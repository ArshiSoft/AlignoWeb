/* eslint-disable */
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { message } from 'antd';

function Activate() {
	const navigate = useNavigate()
	useEffect(() => {
		if (!localStorage.getItem('token')) {
			navigate('/Login')
		}

	}, [])
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const userID = params.get('id');
	const api = 'https://server.aligno.co/api/user/';

	const setUserAsActive = async () => {
		try {
			const response = await axios.get(api + userID);
			console.log(response);

			if (response.data.userdata.active) {
				message.warning('User already activated!');
				return;
			}
			response.data.userdata.active = true;

			const updateResponse = await axios.put(
				api + userID,
				response.data.userdata
			);
			console.log(updateResponse);
			if (updateResponse.status) {
				message.success('User activated. You can now login.');
			} else {
				message.error(updateResponse.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		document.title = 'Aligno - Activate User';
		setUserAsActive();
	}, []);

	return (
		<>
			<h2>User activated!</h2>
			<br />
			<label>
				Click <a href='/Login'>here</a> to Login
			</label>
		</>
	);
}
export default Activate;
