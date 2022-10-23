import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom"


function RxDataView(){
	const location = useLocation()
	const params = new URLSearchParams(location.search);

	const [modalInfo, setRxData] = useState([])

  const getRxData = async () => {
		try {
			const response = await axios.get('https://server.aligno.co/api/rxform/'+params.get('id'));
			setRxData(response.data.userdata);
		} catch (error) {
			console.log(error);
		}
	};

  useEffect(() => {
		getRxData();
	}, []);
    return(
        <>
        <div className='containder'>
						<div className='row'>
							<div className='col-lg-6'>
								<h5>Clinic Name : {modalInfo.clinicname}</h5>
								<ul>
	<ol>Clinic Name : {modalInfo.clinicname}</ol>
	<ol>Doctor Name : {modalInfo.doctorname}</ol>
	<ol>Patient Name : {modalInfo.patientname}</ol>
	<ol>Doctor Number :{modalInfo.doctornumber}</ol>
	<ol>Paient Number : {modalInfo.patientnumber}</ol>
	<ol>Patient ID : {modalInfo.patienid}</ol>
	<ol>Doctor Email : {modalInfo.doctoremail}</ol>
	<ol>Patient Email : {modalInfo.patientemail}</ol>
	<ol>Gender : {modalInfo.gender}</ol>
	<ol>Bridges Implant : {modalInfo.bridgesimplant}</ol>
	<ol>MRCIR : {modalInfo.mrciil}</ol>
	</ul></div>
							<div className='col-lg-6'><ul>
	<ol>Clinic Name : {modalInfo.clinicname}</ol>
	<ol>Doctor Name : {modalInfo.doctorname}</ol>
	<ol>Patient Name : {modalInfo.patientname}</ol>
	<ol>Doctor Number :{modalInfo.doctornumber}</ol>
	<ol>Paient Number : {modalInfo.patientnumber}</ol>
	<ol>Patient ID : {modalInfo.patienid}</ol>
	<ol>Doctor Email : {modalInfo.doctoremail}</ol>
	<ol>Patient Email : {modalInfo.patientemail}</ol>
	<ol>Gender : {modalInfo.gender}</ol>
	<ol>Bridges Implant : {modalInfo.bridgesimplant}</ol>
	<ol>MRCIR : {modalInfo.mrciil}</ol>
	</ul></div>
						</div>
					</div>

        </>
    )
}
export default RxDataView;