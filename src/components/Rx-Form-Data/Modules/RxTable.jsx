import React from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './RxTable.css';
import { Link } from 'react-router-dom';
import { $CombinedState } from 'redux';
import { message } from 'antd';

// import { useReactToPrint } from 'react-to-print';

const RxTable = () => {
	const [rxdata, setRxData] = useState([]);
	const [pending, setPending] = React.useState(true);
	const [rows, setRows] = React.useState([]);
	const [modalInfo, setModalInfo] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [show, setShow] = useState(false);
	const [search, setSearch] = useState('');
	const [filteredRxTable, setFilteredRxTable] = useState([]);
	const [totalaligners, setTotalAligners] = useState(0);
	// const [isPlanningModalOpen, setIsPlanningModalOpen] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	// const [componentRef,setComponentRef] = useState([]);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setRows(rxdata);
			setPending(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);

	// const showPlanningModal = () => {
	// 	setIsPlanningModalOpen(true);
	// };
	// const btnPlanningModalOkClick = () => {
	// 	setIsPlanningModalOpen(false);
	// };
	// const btnPlanningModalCancelClick = () => {
	// 	setIsPlanningModalOpen(false);
	// };

	// const rowEvents = {
	// onClick : (e ,row) => {
	// 	console.log(row)
	// }
	// }
	const btnViewClick = (e, row) => {
		e.preventDefault();
		history('/Rx-data?id=' + row._id);
		// 		<Link
		//   to={{
		//     pathname: "/Rx-data",
		//     state: row // your data array of objects
		//   }}
		// ></Link>
	};
	const btnActionClick = (e, row) => {
		e.preventDefault();
		setModalInfo(row);
		setTotalAligners(row.TotalAligners);
		setShow(true);
	};
	const btnApproveClick = (e) => {
		e.preventDefault();
		if (totalaligners <= 0 || totalaligners > 30) {
			setShow(false);
			message.warning('Must enter between 1 to 30!');
			return;
		}
	};

	const toggelTrueFalse = () => {
		setShowModal(handleShow);
	};

	const getRxData = async () => {
		try {
			// const response = await axios.get('http://localhost:3000/api/rxform');
			const response = await axios.get('https://server.aligno.co/api/rxform');
			setRxData(response.data.userdata);
			setFilteredRxTable(response.data.userdata);
		} catch (error) {
			console.log(error);
		}
	};

	const getActionButtonText = (row) => {
		var rtnValue = 'Approve';
		if (row.CaseApproved) {
			rtnValue = 'Send 1 to Manufacture';
		}
		if (row.CaseAlignerSendForManufacturing) {
			rtnValue = 'Start Manufacture';
		}
		if (row.CaseAlignerManufacturing) {
			rtnValue = 'Complete Aligner';
		}
		if (row.CaseAlignerManufactured) {
			rtnValue = 'Dispatch Aligner';
		}
		if (row.CaseAlignerDispached) {
			if (row.TotalAligners <= row.CurrentAligner) {
				rtnValue = 'Close Case';
			} else {
				rtnValue = 'Send 1 to Manufacture';
			}
		}
		if (row.CaseClosed) {
			rtnValue = 'Case Closed';
		}
		return rtnValue;
	};

	const columns = [
		{
			name: 'Date',
			omit: false,
			selector: (row) => row.CreatedDate,
			sortable: true,
		},
		{
			name: 'Clinic Name',
			selector: (row) => row.clinicname,
			sortable: true,
		},
		{
			name: 'Doctor Name',
			selector: (row) => row.doctorname,
			sortable: true,
		},
		// {
		// 	name: 'Doctor Email',
		// 	selector: (row) => row.doctoremail,
		// },
		{
			name: 'Patient Name',
			selector: (row) => row.patientname,
			sortable: true,
		},
		{
			name: 'Patient Email',
			selector: (row) => row.patientemail,
		},
		{
			name: 'Patient Phone',
			selector: (row) => {
				var link = 'http://wa.me/' + row.patientnumber;
				return (
					<a href={link} target='_blank'>
						{row.patientnumber}
					</a>
				);
			},
		},
		{
			name: 'Case Status',
			selector: (row) => {
				var rtnValue = 'New';
				if (row.CaseApproved) {
					rtnValue = 'Case Approved';
				}
				if (row.CaseAlignerSendForManufacturing) {
					rtnValue = 'Approved an aligner for Manufacturing';
				}
				if (row.CaseAlignerManufacturing) {
					rtnValue = 'Aligner Manufacturing';
				}
				if (row.CaseAlignerManufactured) {
					rtnValue = 'Aligner Manufactured';
				}
				if (row.CaseAlignerDispached) {
					rtnValue = 'Aligner Dispatched';
				}
				if (row.CaseClosed) {
					rtnValue = 'Case Closed';
				}
				return rtnValue;
			},
			sortable: true,
		},
		{
			name: 'Total Aligners',
			selector: (row) => row.TotalAligners,
			sortable: true,
		},
		{
			name: 'Current Aligner',
			selector: (row) => row.CurrentAligner,
			sortable: true,
		},
		{
			name: '',
			button: true,
			cell: (row) => (
				<button
					className='btn btn-outline btn-sm btn-primary'
					onClick={(e) => btnViewClick(e, row)}>
					View
				</button>
			),
		},
		{
			name: '',
			button: true,
			cell: (row) => (
				<button
					className='btn btn-outline btn-sm btn-primary'
					onClick={(e) => btnActionClick(e, row)}>
					{getActionButtonText(row)}
				</button>
			),
		},
		// {
		// 	name:"Action",
		//   cell: (row: { _id: any }) => (
		// 	  <>
		// 	<span onClick={() => handleButtonClick(row._id)} className='btn btn-primary'><Pencil/></span>{'     '}
		// 	<span onClick={() => handleButtonClick(row._id)} className='btn btn-danger'><Trash/></span>
		// 	</>
		//   ),

		//   ignoreRowClick: true,
		//   allowOverflow: true,
		//   button: true,
		// },{/*end*/}
		// {
		// 	name: 'Patient Name',
		// 	selector: (row) => <img width={50} height={50} src={row.flag} />,
		// },
	];
	useEffect(() => {
		getRxData();
	}, []);

	useEffect(() => {
		const result = rxdata.filter((rxdata) => {
			return rxdata.clinicname.toLowerCase().match(search.toLowerCase());
		});
		setFilteredRxTable(result);
	}, [search]);

	const history = useNavigate();
	// const ReactToPrint = useReactToPrint();

	const ModalContent = () => {
		return (
			<>
				<Modal dialogClassName='my-modal' show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title></Modal.Title>
						{/* <ReactToPrint
								trigger={() => {
									return <button>Print</button>
								}}
								// content = {()=>componentRef}
								documentTitle = 'new documnet'
								pageStyle = "print"
								onAfterPrint = {()=>{console.log('document printed')}}
								/> */}
					</Modal.Header>
					<Modal.Body>
						{/* <div ref = {el=>(componentRef=el)}> */}
						<div className='container'>
							<div className='row'>
								<div className='col-lg-4'>
									<h5>Set Aligners Plan for {modalInfo.patientname}</h5>
									{/* <ul>
										<ol>
											Total Aligners :
											<input type='number' className='form-control' />
										</ol>
									</ul> */}
									<br />
									<br />
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label'>
													Total Aligners: <span className='required'>*</span>
												</label>

												<input
													type='number'
													placeholder='Minimum 1'
													onChange={(e) => setTotalAligners(e.target.value)}
													value={totalaligners}
													className='form-control form-control-lg'
													required
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* </div> */}
					</Modal.Body>

					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
						<Button variant='primary' onClick={btnApproveClick}>
							Approve Plan
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	};

	const success = () => {
		message.success('This is a success message');
	};

	return (
		<>
			<button onClick={success}>Show Success</button>
			<div className='modalcontent'>
				<DataTable
					title='Rx-Data'
					columns={columns}
					data={filteredRxTable}
					pointerOnHover={true}
					highlightOnHover={true}
					// rowEvent= {handleButtonClick}
					expendableRows={true}
					progressPending={pending}
					subHeader
					subHeaderComponent={
						<input
							type='text'
							placeholder='search here'
							className='w-25 form-control'
							value={search}
							onChange={(e) => setSearch(e.target.value)}></input>
					}
					subHeaderAlign='left'
				/>
				;{show ? <ModalContent /> : null}
				{/* <Modal
				title='Planning'
				open={isPlanningModalOpen}
				onOk={btnPlanningModalOkClick}
				onCancel={btnPlanningModalCancelClick}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal> */}
			</div>
		</>
	);
};

export default RxTable;
