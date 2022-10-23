import React from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button,} from 'react-bootstrap';
import './RxTable.css';
import { Link } from 'react-router-dom';

// import { useReactToPrint } from 'react-to-print';





const RxTable = () => {
	const [rxdata, setRxData] = useState([])
	const [pending, setPending] = React.useState(true);
	const [rows, setRows] = React.useState([]);
	const [modalInfo, setModalInfo] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [show, setShow] = useState(false);
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

	// const rowEvents = {
	// onClick : (e ,row) => {
	// 	console.log(row)
	// }
	// }
	const handleButtonClick = (e, row) => {
		e.preventDefault();
		console.log("Row Id", row);
		// setModalInfo(row)
		// toggelTrueFalse();
		history('/Rx-data?id='+row._id,row);
// 		<Link
//   to={{
//     pathname: "/Rx-data",
//     state: row // your data array of objects
//   }}
// ></Link>
		
		
	};

	const toggelTrueFalse = () => {
		setShowModal(handleShow);
	};
	


	const getRxData = async () => {
		try {
			// const response = await axios.get('http://localhost:3000/api/rxform');
			const response = await axios.get('https://server.aligno.co/api/rxform');
			setRxData(response.data.userdata);
		} catch (error) {
			console.log(error);
		}
	};

	const columns = [
		// {
		// 	name: 'ID',
		// 	selector: (row) => row._id,
		// },
		{
			name: 'Clinic Name',
			selector: (row) => row.clinicname,
		},
		{
			name: 'Doctor Name',
			selector: (row) => row.doctorname,
		},
		{
			name: 'Doctor Email',
			selector: (row) => row.doctoremail,
		},
		{
			name: 'Doctor Phone',
			selector: (row) => row.doctornumber,
		},
		{
			name: 'Patient Name',
			selector: (row) => row.patientname,
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
		// {
		// 	name: 'Full Data',
		// 	cell: ( row ) => (
		// 		<button className='btn-sm btn btn-primary' onClick={(e) => history('/Rx-data')(e ,row._id)}>
		// 			Details
		// 		</button>
		// 	)
		// },
		{
			name: "Actions",
			button: true,
			cell: (row) => (
				<button
					className="btn btn-outline btn-sm btn-primary"
					onClick={(e) => handleButtonClick(e, row)}
				>
					View
				</button>
			),
		}
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
	const history = useNavigate();
	// const ReactToPrint = useReactToPrint();

	const ModalContent = () => {
		return (
			<>
			</>
			// <Link to='Rx-data'>Data</Link>
// 			<Modal  dialogClassName="my-modal" show={show} onHide={handleClose}>
// 				<Modal.Header closeButton>
// 					<Modal.Title></Modal.Title>
// 					{/* <ReactToPrint 
// 					trigger={() => {
// 						return <button>Print</button>
// 					}}
// 					// content = {()=>componentRef}
// 					documentTitle = 'new documnet'
// 					pageStyle = "print"
// 					onAfterPrint = {()=>{console.log('document printed')}}
// 					/> */}
					
// 					</Modal.Header>
// 				<Modal.Body>
// 				{/* <div ref = {el=>(componentRef=el)}> */}
// 					<div className='containder'>
// 						<div className='row'>
// 							<div className='col-lg-6'>
// 								<h5>Clinic Name : {modalInfo.clinicname}</h5>
// 								<ul>
// 	<ol>Clinic Name : {modalInfo.clinicname}</ol>
// 	<ol>Doctor Name : {modalInfo.doctorname}</ol>
// 	<ol>Patient Name : {modalInfo.patientname}</ol>
// 	<ol>Doctor Number :{modalInfo.doctornumber}</ol>
// 	<ol>Paient Number : {modalInfo.patientnumber}</ol>
// 	<ol>Patient ID : {modalInfo.patienid}</ol>
// 	<ol>Doctor Email : {modalInfo.doctoremail}</ol>
// 	<ol>Patient Email : {modalInfo.patientemail}</ol>
// 	<ol>Gender : {modalInfo.gender}</ol>
// 	<ol>Bridges Implant : {modalInfo.bridgesimplant}</ol>
// 	<ol>MRCIR : {modalInfo.mrciil}</ol>
// 	</ul></div>
// 							<div className='col-lg-6'><ul>
// 	<ol>Clinic Name : {modalInfo.clinicname}</ol>
// 	<ol>Doctor Name : {modalInfo.doctorname}</ol>
// 	<ol>Patient Name : {modalInfo.patientname}</ol>
// 	<ol>Doctor Number :{modalInfo.doctornumber}</ol>
// 	<ol>Paient Number : {modalInfo.patientnumber}</ol>
// 	<ol>Patient ID : {modalInfo.patienid}</ol>
// 	<ol>Doctor Email : {modalInfo.doctoremail}</ol>
// 	<ol>Patient Email : {modalInfo.patientemail}</ol>
// 	<ol>Gender : {modalInfo.gender}</ol>
// 	<ol>Bridges Implant : {modalInfo.bridgesimplant}</ol>
// 	<ol>MRCIR : {modalInfo.mrciil}</ol>
// 	</ul></div>
// 						</div>
// 					</div>

// {/* </div> */}
// 				</Modal.Body>
				
// 				<Modal.Footer>
// 					<Button variant="secondary" onClick={handleClose}>Close</Button>
// 				</Modal.Footer>


// 			</Modal>
			
		);
	};

	return (
		<div className='modalcontent'>
	<DataTable
		title="Rx-Data"
		columns={columns}
		data={rxdata}
		pagination
		pointerOnHover={true}
		highlightOnHover={true}
		// rowEvent= {handleButtonClick}
		progressPending={pending}

	
		
	/>;
		{ show ? <ModalContent/> : null }
	</div>
	);
	

};


export default RxTable;
