import React from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const RxTable = () => {
	const [rxdata, setRxData] = useState([]);

	const getRxData = async () => {
		try {
			const response = await axios.get('https://server.aligno.co/api/rx-form');
			setRxData(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const columns = [
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
		// 	name: 'Patient Name',
		// 	selector: (row) => <img width={50} height={50} src={row.flag} />,
		// },
	];
	useEffect(() => {
		getRxData();
	}, []);

	return <DataTable columns={columns} data={rxdata.User} />;
};
export default RxTable;
