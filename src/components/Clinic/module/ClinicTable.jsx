import React from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Form,
	Input,
	InputNumber,
	message,
	Modal,
	Popconfirm,
	Space,
} from 'antd';
import { tr } from 'date-fns/locale';
import { API } from '../../../class/clsGlobalVariables';

const ClinicTable = () => {
	const api = API + 'clinicform/';
	const history = useNavigate();
	const navigate = useNavigate();
	const { TextArea } = Input;
	const [form] = Form.useForm();
	const [Clinic, setClinicList] = useState([]);
	const [clinic, setClinic] = useState([]);
	const [approveLoading, setApproveLoading] = useState(false);
	const [isClinicModalOpen, setIsClinicModalOpen] = useState(false);
	const [popUpButton, setPopUpButton] = useState('Create');
	const [popUpTitle, setPopUpTitle] = useState('New Clinic');
	const [clinicName, setClinicName] = useState('');
	const [address, setAddress] = useState('');
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			getClinic();
		}, 200);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		getClinic();
	}, []);

	const showClinicModal = () => {
		setIsClinicModalOpen(true);
	};

	const btnClinicModalCancelClick = () => {
		setIsClinicModalOpen(false);
	};
	const btnClinicModalOkClick = (e) => {
		e.preventDefault();
		setApproveLoading(true);
		form
			.validateFields()
			.then(() => {
				return setTimeout(() => {
					form.submit();
				}, 1000);
			})
			.catch((ex) => {
				setApproveLoading(false);
			});
	};
	const onFormSubmit = (e) => {
		console.log(e);

		clinic.clinicName = e.clinicName;
		clinic.address = e.address;
		clinic.country = e.country;
		clinic.city = e.city;

		console.log(clinic);

		if (popUpButton === 'Create')
			addNewClinic(`Clinic: ${clinic.clinicName} successfully added!`);
		else {
			updateClinic(`Clinic: ${clinic.clinicName} successfully updated!`);
		}

		form.resetFields();
		setApproveLoading(false);
		setIsClinicModalOpen(false);
	};

	async function addNewClinic(successMessage) {
		try {
			console.log(clinic);
			const response = await fetch(api, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					clinicName: clinic.clinicName,
					address: clinic.address,
					city: clinic.city,
					country: clinic.country,
				}),
			});
			if (response.status) {
				getClinic();
				message.success(successMessage);
			} else {
				message.error('Something went wrong!');
			}
		} catch (error) {
			console.log(error);
			message.error('An error occured. Retry!');
		}
	}

	const updateClinic = async (successMessage) => {
		try {
			const response = await axios.put(api + clinic._id, clinic);
			if (response.status) {
				getClinic();
				message.success(successMessage);
			} else {
				message.error('Something went wrong!');
			}
		} catch (error) {
			console.log(error);
			message.error('An error occured. Retry!');
		}
	};

	const deleteClinic = async (row, successMessage) => {
		console.log(row);
		try {
			const response = await fetch(api, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(row),
			});
			if (response.status) {
				getClinic();
				message.success(successMessage);
			} else {
				message.error('Something went wrong!');
			}
		} catch (error) {
			console.log(error);
			message.error('An error occured. Retry!');
		}
	};

	const getClinic = async () => {
		try {
			const response = await axios.get(api);
			setClinicList(response.data.userdata);
		} catch (error) {
			console.log(error);
		}
	};
	const btnEditClick = (e, row) => {
		e.preventDefault();
		setClinic(row);
		console.log(row);
		console.log(clinic);

		// setClinicName(row.clinicName);
		// setAddress(row.address);
		// setCountry(row.country);
		// setCity(row.city);

		form.setFieldValue('clinicName', row.clinicName);
		form.setFieldValue('address', row.address);
		form.setFieldValue('city', row.city);
		form.setFieldValue('country', row.country);

		setPopUpButton('Update');
		setPopUpTitle('Update Clinic: ' + row.clinicName);

		showClinicModal();
	};
	const btnDeleteClick = (e, row) => {
		e.preventDefault();

		Modal.confirm({
			title: `Are you sure to delete Clinic: ${row.clinicName}?`,
			onOk: (e) => {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						deleteClinic(
							row,
							`Clinic: ${row.clinicName} deleted successfully!`
						);

						resolve();
					}, 1000);
				}).catch(() => message.error('Something went wrong!'));
			},
		});
	};
	const btnCreateNewClinicClick = (e) => {
		e.preventDefault();

		setClinicName('');
		setAddress('');
		setCountry('');
		setCity('');

		setPopUpButton('Create');
		setPopUpTitle('New Clinic');

		showClinicModal();
	};
	//   const handleClick =  async ()=> {
	// const response = await fetch('/api/clinicform/:id',{
	// 	method : 'DELETE'
	// })
	// const json = await response.json()
	//   }

	const columns = [
		// {
		//   name: "Date",
		//   omit: false,
		//   selector: (Clinic) => Clinic.CreatedDate,
		//   sortable: true,
		// },
		{
			name: 'Clinic Name',
			selector: (row) => row.clinicName,
			sortable: true,
		},
		{
			name: 'Address',
			selector: (row) => row.address,
			sortable: true,
		},
		{
			name: 'City',
			selector: (row) => row.city,
			sortable: true,
		},
		{
			name: 'Country',
			selector: (row) => row.country,
			sortable: true,
		},
		{
			name: '',
			button: true,
			cell: (row) => (
				<button
					className='btn btn-outline btn-sm btn-primary'
					onClick={(e) => btnEditClick(e, row)}>
					{/* {getActionButtonText(Clinic)} */}
					Edit
				</button>
			),
		},
		// {
		// 	name: '',
		// 	button: true,
		// 	cell: (row) => (
		// 		<button
		// 			className='btn btn-outline btn-sm btn-danger'
		// 			onClick={(e) => btnDeleteClick(e, row)}>
		// 			Delete
		// 		</button>
		// 	),
		// },
	];

	return (
		<>
			<div className='modalcontent'>
				<DataTable
					columns={columns}
					data={Clinic}
					pointerOnHover={true}
					highlightOnHover={true}
					expendableRows={true}
					progressPending={false}
					actions={
						<button
							onClick={(e) => btnCreateNewClinicClick(e)}
							className='btn btn-sm btn-info'>
							New Clinic
						</button>
					}
				/>
				<Modal
					// width={1000}Aligno-1
					//style={{ textAlign: `center` }}
					title={popUpTitle}
					okText={popUpButton}
					open={isClinicModalOpen}
					confirmLoading={approveLoading}
					onOk={btnClinicModalOkClick}
					onCancel={btnClinicModalCancelClick}>
					<Form
						form={form}
						onFinish={onFormSubmit}
						layout='vertical'
						name='form_in_modal'
						initialValues={{
							modifier: 'public',
						}}>
						<Form.Item
							name='clinicName'
							label='Clinic Name'
							rules={[
								{
									required: true,
									message: 'Clinic Name cannot be empty!',
								},
							]}>
							<Input
								// style={{ width: `400px` }}
								placeholder='Clinic Name'
							/>
						</Form.Item>
						<Form.Item
							name='address'
							label='Address'
							rules={[
								{
									required: true,
									message: 'Address cannot be empty!',
								},
							]}>
							<TextArea placeholder='Address' autoSize />
						</Form.Item>
						<Form.Item
							name='city'
							label='City'
							rules={[
								{
									required: true,
									message: 'City cannot be empty!',
								},
							]}>
							<Input placeholder='City' />
						</Form.Item>
						<Form.Item
							name='country'
							label='Country'
							rules={[
								{
									required: true,
									message: 'Country cannot be empty!',
								},
							]}>
							<Input placeholder='Country' />
						</Form.Item>
					</Form>
				</Modal>
			</div>
		</>
	);
};

export default ClinicTable;
