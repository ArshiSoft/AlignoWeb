import React from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RxTable.css';
import { InputNumber, message, Modal, Popconfirm, Space } from 'antd';
import { API } from '../../../class/clsGlobalVariables';

const RxTable = () => {
	const api = API + 'rxform/';
	const history = useNavigate();

	const [Patients, setPatientsList] = useState([]);
	const [Patient, setPatient] = useState([]);
	const [totalAligners, setTotalAligners] = useState(0);
	const [approveLoading, setApproveLoading] = useState(false);
	const [isPlanningModalOpen, setIsPlanningModalOpen] = useState(false);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			getPatients();
		}, 200);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		getPatients();
	}, []);

	const showPlanningModal = () => {
		setIsPlanningModalOpen(true);
	};
	const btnPlanningModalCancelClick = () => {
		setIsPlanningModalOpen(false);
	};
	const btnViewClick = (e, patient) => {
		e.preventDefault();
		history('/Rx-data?id=' + patient._id);
	};
	const btnActionClick = (e, patient) => {
		e.preventDefault();
		setPatient(patient);
		var caseStatus = getCaseStatus(patient);
		if (caseStatus == 'New') {
			setTotalAligners(patient.TotalAligners);
			showPlanningModal();
			return;
		} else if (caseStatus == 'Case Approved') {
			Modal.confirm({
				title: 'Are you sure to send one Aligner for Manufacturing?',
				onOk: (e) => {
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							patient.CaseAlignerSendForManufacturing = true;
							updatePatient(
								patient,
								`Aligner # ${
									patient.CurrentAligner + 1
								} sent for Manufacturing!`
							);
							resolve();
						}, 1000);
					}).catch(() => message.error('Something went wrong!'));
				},
			});
		} else if (caseStatus == 'Approved for Manufacturing') {
			Modal.confirm({
				title: 'Are you sure to Start Manufacturing this Aligner?',
				onOk: (e) => {
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							patient.CaseAlignerManufacturing = true;
							updatePatient(
								patient,
								`Aligner # ${patient.CurrentAligner + 1} started Manufacturing!`
							);
							resolve();
						}, 1000);
					}).catch(() => message.error('Something went wrong!'));
				},
			});
		} else if (caseStatus == 'Aligner Manufacturing') {
			Modal.confirm({
				title: 'Are you sure that Aligner is Complete?',
				onOk: (e) => {
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							patient.CaseAlignerManufactured = true;
							updatePatient(
								patient,
								`Aligner # ${patient.CurrentAligner + 1} Manufactured!`
							);
							resolve();
						}, 1000);
					}).catch(() => message.error('Something went wrong!'));
				},
			});
		} else if (caseStatus == 'Aligner Manufactured') {
			Modal.confirm({
				title: 'Are you sure to dispatch Aligner?',
				onOk: (e) => {
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							patient.CaseAlignerDispached = true;
							patient.CurrentAligner += 1;
							updatePatient(
								patient,
								`Aligner # ${patient.CurrentAligner} Dispatched!`
							);
							resolve();
						}, 1000);
					}).catch(() => message.error('Something went wrong!'));
				},
			});
		} else if (caseStatus == 'Aligner Dispatched') {
			Modal.confirm({
				title: `Are you sure to ${
					patient.CurrentAligner >= patient.TotalAligners
						? 'Close the Case?'
						: 'Send one more aligner for manufacturing?'
				}?`,
				onOk: (e) => {
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							if (patient.CurrentAligner >= patient.TotalAligners) {
								patient.CaseClosed = true;
								updatePatient(
									patient,
									`Patient's (${patient.patientname}) case has been closed!`
								);
							} else {
								patient.CaseAlignerManufacturing = false;
								patient.CaseAlignerManufactured = false;
								patient.CaseAlignerDispached = false;
								updatePatient(
									patient,
									`Aligner # ${
										patient.CurrentAligner + 1
									} sent for Manufacturing!`
								);
							}
							resolve();
						}, 1000);
					}).catch(() => message.error('Something went wrong!'));
				},
			});
		}
	};
	const btnPlanningModalApproveClick = (e) => {
		e.preventDefault();
		if (totalAligners <= 0 || totalAligners > 30) {
			message.warning('Must enter between 1 and 30!');
			return;
		}
		setApproveLoading(true);
		// var patient = getPatient(Patient._id);
		Patient.TotalAligners = totalAligners;
		Patient.CaseApproved = true;
		return setTimeout(() => {
			updatePatient(Patient, `Plan approved for ${Patient.patientname}!`);
			setApproveLoading(false);
			setIsPlanningModalOpen(false);
		}, 1000);
	};

	const updatePatient = async (patient, successMessage) => {
		try {
			var response = await axios.put(api + patient._id, patient);
			if (response.status) {
				getPatients();
				message.success(successMessage);
			} else {
				message.error('Something went wrong!');
			}
		} catch (error) {
			console.log(error);
			message.error('An error occured. Retry!');
		}
	};

	const getCaseStatus = (patient) => {
		var rtnValue = 'New';
		if (patient.CaseApproved) {
			rtnValue = 'Case Approved';
		}
		if (patient.CaseAlignerSendForManufacturing) {
			rtnValue = 'Approved for Manufacturing';
		}
		if (patient.CaseAlignerManufacturing) {
			rtnValue = 'Aligner Manufacturing';
		}
		if (patient.CaseAlignerManufactured) {
			rtnValue = 'Aligner Manufactured';
		}
		if (patient.CaseAlignerDispached) {
			rtnValue = 'Aligner Dispatched';
		}
		if (patient.CaseClosed) {
			rtnValue = 'Case Closed';
		}
		return rtnValue;
	};

	const getPatient = async (id) => {
		try {
			var response = await axios.get(api + id);
			return response.data.userdata;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	const getPatients = async () => {
		try {
			const response = await axios.get(api);
			setPatientsList(response.data.userdata);
		} catch (error) {
			console.log(error);
		}
	};

	const getActionButtonText = (patient) => {
		var rtnValue = 'Approve';
		if (patient.CaseApproved) {
			rtnValue = 'Send 1 to Manufacture';
		}
		if (patient.CaseAlignerSendForManufacturing) {
			rtnValue = 'Start Manufacture';
		}
		if (patient.CaseAlignerManufacturing) {
			rtnValue = 'Complete Aligner';
		}
		if (patient.CaseAlignerManufactured) {
			rtnValue = 'Dispatch Aligner';
		}
		if (patient.CaseAlignerDispached) {
			if (patient.TotalAligners <= patient.CurrentAligner) {
				rtnValue = 'Close Case';
			} else {
				rtnValue = 'Send 1 to Manufacture';
			}
		}
		if (patient.CaseClosed) {
			rtnValue = 'Case Closed';
		}
		return rtnValue;
	};

	const columns = [
		{
			name: 'Date',
			omit: false,
			selector: (patient) => patient.Patient.CreatedDate,
			sortable: true,
		},
		{
			name: 'Clinic Name',
			selector: (patient) => patient.Patient.ClinicName,
			sortable: true,
		},
		{
			name: 'Doctor Name',
			selector: (patient) => patient.Patient.doctorname,
			sortable: true,
		},
		{
			name: 'Patient Name',
			selector: (patient) => patient.Patient.PatientName,
			sortable: true,
		},
		{
			name: 'Patient Email',
			selector: (patient) => patient.Patient.PatientEmail,
		},
		{
			name: 'Patient Phone',
			selector: (patient) => {
				var link = 'http://wa.me/' + patient.Patient.PatientNumber;
				return (
					<a href={link} target='_blank'>
						{patient.Patient.PatientNumber}
					</a>
				);
			},
		},
		{
			name: 'Case Status',
			selector: (patient) => {
				return getCaseStatus(patient);
			},
			sortable: true,
		},
		{
			name: 'Total Aligners',
			selector: (patient) => patient.TotalAligners,
			sortable: true,
		},
		{
			name: 'Current Aligner',
			selector: (patient) => patient.CurrentAligner,
			sortable: true,
		},
		{
			name: '',
			button: true,
			cell: (patient) => (
				<button
					className='btn btn-outline btn-sm btn-primary'
					onClick={(e) => btnViewClick(e, patient)}>
					View
				</button>
			),
		},
		{
			name: '',
			button: true,
			cell: (patient) => (
				<button
					className='btn btn-outline btn-sm btn-primary'
					onClick={(e) => btnActionClick(e, patient)}>
					{getActionButtonText(patient)}
				</button>
			),
		},
	];

	const ModalContent = () => {
		return (
			<>
				{/* <Modal dialogClassName='my-modal' show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title></Modal.Title>
						 <ReactToPrint
								trigger={() => {
									return <button>Print</button>
								}}
								// content = {()=>componentRef}
								documentTitle = 'new documnet'
								pageStyle = "print"
								onAfterPrint = {()=>{console.log('document printed')}}
								/> 
					</Modal.Header>
					<Modal.Body>
						<div className='container'>
							<div className='patient'>
								<div className='col-lg-4'>
									<h5>Set Aligners Plan for {patient.patientname}</h5>
									<br />
									<br />
									<div class='patient align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label'>
													Total Aligners: <span className='required'>*</span>
												</label>

												<input
													type='number'
													onChange={(e) => setTotalAligners(e.target.value)}
													value={totalAligners}
													className='form-control form-control-lg'
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</Modal.Body>

					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button variant='primary' onClick={btnApproveClick}>
							Approve Plan
						</Button>
					</Modal.Footer>
				</Modal> */}
			</>
		);
	};

	return (
		<>
			<div className='modalcontent'>
				<DataTable
					title='Patients'
					columns={columns}
					data={Patients}
					pointerOnHover={true}
					highlightOnHover={true}
					expendableRows={true}
					progressPending={false}
					// subHeader
					// subHeaderComponent={
					// 	<input
					// 		type='text'
					// 		placeholder='search here'
					// 		className='w-25 form-control'
					// 		value={search}
					// 		onChange={(e) => setSearch(e.target.value)}></input>
					// }
					// subHeaderAlign='left'
				/>
				<Modal
					title={'Set Aligners Plan for ' + Patient.patientname}
					okText='Approve'
					open={isPlanningModalOpen}
					confirmLoading={approveLoading}
					onOk={btnPlanningModalApproveClick}
					onCancel={btnPlanningModalCancelClick}>
					<Space>
						<label className='form-label'>
							Total Aligners: <span className='required'>*</span>
						</label>
						<InputNumber
							onChange={(value) => setTotalAligners(value)}
							value={totalAligners}
							min={1}
							max={30}
						/>
					</Space>
				</Modal>
			</div>
		</>
	);
};

export default RxTable;
