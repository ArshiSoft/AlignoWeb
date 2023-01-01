import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Register/Register.css';
import { useEffect } from 'react';
import '@fontsource/league-spartan'; // Defaults to weight 400.
import '@fontsource/source-sans-pro'; // Defaults to weight 400.
import 'react-phone-input-2/lib/style.css';
import {
	Button,
	Checkbox,
	Col,
	Divider,
	Row,
	Select,
	Form,
	Input,
	message,
} from 'antd';
import { Typography } from 'antd';
import { Option } from 'antd/lib/mentions';
import { API } from '../../class/clsGlobalVariables';
import axios from 'axios';
import { async } from 'q';
const { Title } = Typography;

function Register() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [hideDegree, setHideDegree] = useState(true);
	const [hideSpeciality, setHideSpeciality] = useState(true);
	const [hideAlignerCases, setHideAlignerCases] = useState(true);
	const [hideClinic, setHideClinic] = useState(true);
	const [clinic, setClinic] = useState([]);
	const [clinicList, setClinicList] = useState([]);
	const [form] = Form.useForm();
	const api = API + 'regform/';

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			fetchClinicList();
		}, 200);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		fetchClinicList();
	}, []);

	const clinicOptions = clinicList.map((clinic) => {
		return <option value={clinic._id}>{clinic.clinicName}</option>;
	});

	const onClinicChange = (value) => {
		setClinic(clinicList.find((clinic) => clinic._id == value));
		console.log(clinic);
	};

	const onDepartmentChange = (value) => {
		switch (value) {
			case '1': {
				//Doctor
				setHideDegree(false);
				setHideSpeciality(false);
				setHideAlignerCases(false);
				setHideClinic(false);
				break;
			}
			case '2': {
				//Patient
				setHideDegree(true);
				setHideSpeciality(true);
				setHideAlignerCases(true);
				setHideClinic(false);
				break;
			}
			case '3': {
				//Staff
				setHideDegree(true);
				setHideSpeciality(true);
				setHideAlignerCases(true);
				setHideClinic(false);
				break;
			}
			case '4': {
				//Planning
				setHideDegree(true);
				setHideSpeciality(true);
				setHideAlignerCases(true);
				setHideClinic(true);
				break;
			}
			case '5': {
				//Manufacturing
				setHideDegree(true);
				setHideSpeciality(true);
				setHideAlignerCases(true);
				setHideClinic(true);
				break;
			}
			default: {
				setHideDegree(true);
				setHideSpeciality(true);
				setHideAlignerCases(true);
				setHideClinic(true);
				break;
			}
		}
	};

	const fetchClinicList = async () => {
		try {
			const response = await axios.get(API + 'clinicform/');
			setClinicList(response.data.userdata);
			console.log(response);
			console.log(clinicList);
		} catch (error) {
			console.log(error);
		}
	};

	async function btnRegisterClick(e) {
		e.preventDefault();
		setIsLoading(true);
		form
			.validateFields()
			.then(() => {
				return setTimeout(() => {
					form.submit();
				}, 1000);
			})
			.catch((ex) => {
				setIsLoading(false);
			});
	}
	async function onRegister(values) {
		console.log(values);

		try {
			var Password = values.Password;
			values.Password = undefined;
			values.ConfirmPassword = undefined;

			const response = await fetch(api, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					Email: values.Email,
					Password: Password,
					Active: false,
					User: values,
				}),
			});

			const data = await response.json();
			if (data.status === 'ok') {
				const mailResponse = await fetch(API + 'sendmail-noreply/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						to: values.Email,
						subject: 'Activation Email',
						html: `<!DOCTYPE html>
											<html
							lang="en"
							xmlns:o="urn:schemas-microsoft-com:office:office"
							xmlns:v="urn:schemas-microsoft-com:vml"
						>
							<head>
								<title></title>
								<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
								<meta content="width=device-width,initial-scale=1" name="viewport" />
								<style>
									* {
										box-sizing: border-box;
									}
									body {
										margin: 0;
										padding: 0;
									}
									a[x-apple-data-detectors] {
										color: inherit !important;
										text-decoration: inherit !important;
									}
									#MessageViewBody a {
										color: inherit;
										text-decoration: none;
									}
									p {
										line-height: inherit;
									}
									.desktop_hide,
									.desktop_hide table {
										mso-hide: all;
										display: none;
										max-height: 0;
										overflow: hidden;
									}
									@media (max-width: 520px) {
										.desktop_hide table.icons-inner {
											display: inline-block !important;
										}
										.icons-inner {
											text-align: center;
										}
										.icons-inner td {
											margin: 0 auto;
										}
										.image_block img.big,
										.row-content {
											width: 100% !important;
										}
										.mobile_hide {
											display: none;
										}
										.stack .column {
											width: 100%;
											display: block;
										}
										.mobile_hide {
											min-height: 0;
											max-height: 0;
											max-width: 0;
											overflow: hidden;
											font-size: 0;
										}
										.desktop_hide,
										.desktop_hide table {
											display: table !important;
											max-height: none !important;
										}
									}
								</style>
							</head>
							<body
								style="
									background-color: #fff;
									margin: 0;
									padding: 0;
									-webkit-text-size-adjust: none;
									text-size-adjust: none;
								"
							>
								<table
									cellpadding="0"
									cellspacing="0"
									class="nl-container"
									role="presentation"
									style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #fff"
									width="100%"
								>
									<tbody>
										<tr>
											<td>
												<table
													cellpadding="0"
													cellspacing="0"
													class="row row-1"
													role="presentation"
													style="mso-table-lspace: 0; mso-table-rspace: 0"
													width="100%"
												>
													<tbody>
														<tr>
															<td>
																<table
																	cellpadding="0"
																	cellspacing="0"
																	class="row-content stack"
																	role="presentation"
																	style="
																		mso-table-lspace: 0;
																		mso-table-rspace: 0;
																		color: #000;
																		width: 500px;
																	"
																	width="500"
																>
																	<tbody>
																		<tr>
																			<td
																				class="column column-1"
																				style="
																					mso-table-lspace: 0;
																					mso-table-rspace: 0;
																					font-weight: 400;
																					text-align: left;
																					vertical-align: top;
																					padding-top: 5px;
																					padding-bottom: 5px;
																					border-top: 0;
																					border-right: 0;
																					border-bottom: 0;
																					border-left: 0;
																				"
																				width="100%"
																			>
																				<table
																					cellpadding="0"
																					cellspacing="0"
																					class="image_block block-1"
																					role="presentation"
																					style="mso-table-lspace: 0; mso-table-rspace: 0"
																					width="100%"
																				>
																					<tr>
																						<td
																							class="pad"
																							style="
																								width: 100%;
																								padding-right: 0;
																								padding-left: 0;
																							"
																						>
																							<div
																								class="alignment"
																								style="line-height: 10px"
																							>
																								<a
																									href="https://aligno.co"
																									style="outline: none"
																									tabindex="-1"
																									target="_blank"
																									><img
																										alt="Aligno - Invisible Braces"
																										class="big"
																										src="https://aligno.co/wp-content/uploads/2022/05/android-chrome-512x512-1-e1653489851985.png"
																										style="
																											display: block;
																											height: auto;
																											border: 0;
																											width: 500px;
																											max-width: 100%;
																										"
																										title="Aligno - Invisible Braces"
																										width="500"
																								/></a>
																							</div>
																						</td>
																					</tr>
																				</table>
																				<table
																					cellpadding="0"
																					cellspacing="0"
																					class="heading_block block-3"
																					role="presentation"
																					style="mso-table-lspace: 0; mso-table-rspace: 0"
																					width="100%"
																				>
																					<tr>
																						<td
																							class="pad"
																							style="
																								width: 100%;
																								text-align: center;
																								padding-top: 60px;
																							"
																						>
																							<h1
																								style="
																									margin: 0;
																									color: #555;
																									font-size: 23px;
																									font-family: 'Source Sans Pro', Tahoma,
																										Verdana, Segoe, sans-serif;
																									line-height: 120%;
																									text-align: center;
																									direction: ltr;
																									font-weight: 700;
																									letter-spacing: normal;
																									margin-top: 0;
																									margin-bottom: 0;
																								"
																							>
																								<span class="tinyMce-placeholder"
																									>Welcome to Aligno</span
																								>
																							</h1>
																						</td>
																					</tr>
																				</table>
																				<table
																					cellpadding="0"
																					cellspacing="0"
																					class="paragraph_block block-5"
																					role="presentation"
																					style="
																						mso-table-lspace: 0;
																						mso-table-rspace: 0;
																						word-break: break-word;
																					"
																					width="100%"
																				>
																					<tr>
																						<td
																							class="pad"
																							style="
																								padding-top: 70px;
																								padding-right: 10px;
																								padding-bottom: 10px;
																								padding-left: 10px;
																							"
																						>
																							<div
																								style="
																									color: #000;
																									font-size: 19px;
																									font-family: 'Source Sans Pro', Tahoma,
																										Verdana, Segoe, sans-serif;
																									font-weight: 400;
																									line-height: 120%;
																									text-align: left;
																									direction: ltr;
																									letter-spacing: 0;
																									mso-line-height-alt: 22.8px;
																								"
																							>
																								<p style="margin: 0">
																									This is an activation email sent to verify
																									your email. Click below to activate your
																									account.
																								</p>
																							</div>
																						</td>
																					</tr>
																				</table>
																				<table
																					cellpadding="0"
																					cellspacing="0"
																					class="button_block block-7"
																					role="presentation"
																					style="mso-table-lspace: 0; mso-table-rspace: 0"
																					width="100%"
																				>
																					<tr>
																						<td
																							class="pad"
																							style="
																								text-align: center;
																								padding-top: 70px;
																								padding-right: 10px;
																								padding-bottom: 10px;
																								padding-left: 10px;
																							"
																						>
																							<div class="alignment">
																								<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:38px;width:121px;v-text-anchor:middle;" arcsize="11%" stroke="false" fillcolor="#1a9eaf"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:14px"><![endif]-->
																								<div
																									style="
																										text-decoration: none;
																										display: inline-block;
																										color: #fff;
																										background-color: #1a9eaf;
																										border-radius: 4px;
																										width: auto;
																										border-top: 0 solid transparent;
																										font-weight: 400;
																										border-right: 0 solid transparent;
																										border-bottom: 0 solid transparent;
																										border-left: 0 solid transparent;
																										padding-top: 5px;
																										padding-bottom: 5px;
																										font-family: Arial, Helvetica Neue,
																											Helvetica, sans-serif;
																										text-align: center;
																										mso-border-alt: none;
																										word-break: keep-all;
																									"
																								>
																									<span
																										style="
																											padding-left: 20px;
																											padding-right: 20px;
																											font-size: 14px;
																											display: inline-block;
																											letter-spacing: normal;
																										"
																										><span
																											dir="ltr"
																											style="
																												word-break: break-word;
																												line-height: 28px;
																											"
																											><a style="color:white;" href="https://portal.aligno.co/activate?id=${data.response._id}">Activate Now</a></span
																										></span
																									>
																								</div>
																								<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																							</div>
																						</td>
																					</tr>
																				</table>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
												<table
													cellpadding="0"
													cellspacing="0"
													class="row row-2"
													role="presentation"
													style="mso-table-lspace: 0; mso-table-rspace: 0"
													width="100%"
												>
													<tbody>
														<tr>
															<td>
																<table
																	cellpadding="0"
																	cellspacing="0"
																	class="row-content stack"
																	role="presentation"
																	style="
																		mso-table-lspace: 0;
																		mso-table-rspace: 0;
																		color: #000;
																		width: 500px;
																	"
																	width="500"
																>
																	<tbody>
																		<tr>
																			<td
																				class="column column-1"
																				style="
																					mso-table-lspace: 0;
																					mso-table-rspace: 0;
																					font-weight: 400;
																					text-align: left;
																					vertical-align: top;
																					padding-top: 5px;
																					padding-bottom: 5px;
																					border-top: 0;
																					border-right: 0;
																					border-bottom: 0;
																					border-left: 0;
																				"
																				width="100%"
																			>
																				<table
																					cellpadding="0"
																					cellspacing="0"
																					class="icons_block block-1"
																					role="presentation"
																					style="mso-table-lspace: 0; mso-table-rspace: 0"
																					width="100%"
																				>
																					<tr>
																						<td
																							class="pad"
																							style="
																								vertical-align: middle;
																								color: #9d9d9d;
																								font-family: inherit;
																								font-size: 15px;
																								padding-bottom: 5px;
																								padding-top: 5px;
																								text-align: center;
																							"
																						>
																							<table
																								cellpadding="0"
																								cellspacing="0"
																								role="presentation"
																								style="
																									mso-table-lspace: 0;
																									mso-table-rspace: 0;
																								"
																								width="100%"
																							>
																								<tr>
																									<td
																										class="alignment"
																										style="
																											vertical-align: middle;
																											text-align: center;
																										"
																									>
																										<!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																										<!--[if !vml]><!--><table
																											cellpadding="0"
																											cellspacing="0"
																											class="icons-inner"
																											role="presentation"
																											style="
																												mso-table-lspace: 0;
																												mso-table-rspace: 0;
																												display: inline-block;
																												margin-right: -4px;
																												padding-left: 0;
																												padding-right: 0;
																											"
																										><!--<![endif]--></table>
																									</td>
																								</tr>
																							</table>
																						</td>
																					</tr>
																				</table>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
								<!-- End -->
							</body>
						</html>`,
					}),
				});
				if (mailResponse.status) {
					navigate('/thanks-register');
					console.log(mailResponse.json());
				}
			} else {
				message.warn('Email Taken!');
			}
			console.log(data);
		} catch (ex) {
			console.log('Error' + ex);
			message.error('Something went wrong!');
		}

		setIsLoading(false);
	}

	return (
		<>
			<Col
				style={{ alignItems: `center`, height: `100` }}
				className='gradient-custom-3'
				span={24}>
				<Row style={{ justifyContent: `center`, alignItems: `center` }}>
					<Col
						className='formwidth'
						style={{ width: `900px` }}
						xs={{
							span: 24,
							offset: 0,
						}}
						sm={{
							span: 18,
							offset: 0,
						}}
						md={{
							span: 18,
						}}
						lg={{
							span: 18,
							offset: 0,
						}}>
						<Row
							style={{
								// margin: `10px`,
								backgroundColor: `white`,
								borderRadius: `10px`,
								padding: `50px`,
								justifyContent: `center`,
							}}>
							<Col
								style={{ marginBottom: `5px` }}
								xs={{
									span: 24,
									offset: 0,
								}}
								sm={{
									span: 24,
									offset: 0,
								}}
								md={{
									span: 24,
								}}
								lg={{
									span: 24,
								}}>
								<Title
									style={{
										justifyContent: `center`,
										textAlign: `center`,
										marginBottom: `15px`,
									}}
									level={2}>
									REGISTER
								</Title>
							</Col>
							<Form
								layout='vertical'
								form={form}
								onFinish={onRegister}
								scrollToFirstError>
								<Row style={{ justifyContent: `center` }}>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
										}}
										lg={{
											span: 11,
										}}>
										<Form.Item
											name='FirstName'
											label=' First Name'
											rules={[
												{
													required: true,
												},
											]}>
											<Input placeholder='First Name' />
										</Form.Item>
									</Col>

									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 1,
										}}
										lg={{
											span: 11,
											offset: 1,
										}}>
										<Form.Item
											name='LastName'
											label='Last Name'
											rules={[
												{
													required: true,
												},
											]}>
											<Input placeholder='Last Name' />
										</Form.Item>
										{/* </div>
                          </div> */}
									</Col>
								</Row>
								{/* </div> */}
								<Row style={{ justifyContent: `center` }}>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 0,
										}}
										lg={{
											span: 11,
											offset: 0,
										}}>
										<Form.Item
											name='Email'
											label=' Email'
											rules={[
												{
													required: true,
												},
											]}>
											<Input type='email' placeholder='ali@gmail.com' />
										</Form.Item>
									</Col>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 1,
										}}
										lg={{
											span: 11,
											offset: 1,
										}}>
										<Form.Item
											name='PhoneNumber'
											label='Phone Number'
											rules={[
												{
													required: true,
												},
											]}>
											<Input
												addonBefore={
													<Form.Item noStyle>
														<Select
															defaultValue='+92'
															style={{
																width: 70,
															}}>
															<Option value='92'>+92</Option>
														</Select>
													</Form.Item>
												}
												style={{
													width: '100%',
												}}
											/>
										</Form.Item>

										{/* </div> */}
									</Col>
									{/* </div> */}
								</Row>
								<Row style={{ justifyContent: `center` }}>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 0,
										}}
										lg={{
											span: 11,
											offset: 0,
										}}>
										{/* <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6"> */}
										{/* <div className="form-outline mb-4"> */}
										<Form.Item
											name='Gender'
											label='Select Gender'
											rules={[
												{
													required: true,
												},
											]}>
											<Select
												placeholder='Select a Gender'
												options={[
													{
														label: 'Gender',
														options: [
															{
																label: 'Male',
																value: 'Male',
															},
															{
																label: 'Female',
																value: 'Female',
															},
														],
													},
												]}></Select>
										</Form.Item>
									</Col>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 1,
										}}
										lg={{
											span: 11,
											offset: 1,
										}}>
										{/* <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6"> */}
										{/* <div className="form-outline mb-4"> */}
										<Form.Item
											name='Department'
											label='Department'
											rules={[
												{
													required: true,
												},
											]}>
											<Select
												placeholder='Select Department'
												onChange={onDepartmentChange}
												options={[
													{
														label: 'Department',
														options: [
															{
																label: 'Doctor',
																value: '1',
															},
															{
																label: 'Patient',
																value: '2',
															},
															{
																label: 'Saff/CS Department',
																value: '3',
															},
															{
																label: 'Planning Department',
																value: '4',
															},
															{
																label: 'Manufacturing Department',
																value: '5',
															},
														],
													},
												]}></Select>
										</Form.Item>
									</Col>
								</Row>
								<Row style={{ justifyContent: `center` }}>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 0,
										}}
										lg={{
											span: 11,
											offset: 0,
										}}>
										{/* <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6"> */}
										{/* <div className="form-outline mb-4"> */}
										<Form.Item
											name='Degree'
											shouldUpdate
											label='Degree'
											hidden={hideDegree}
											rules={[
												{
													required: !hideDegree,
												},
											]}>
											<Select
												placeholder='Select Degree'
												options={[
													{
														label: 'Degree',
														options: [
															{
																label: 'DDS',
																value: 'DDS',
															},
															{
																label: 'DMD',
																value: 'DMD',
															},
															{
																label: 'MDS',
																value: 'MDS',
															},
															{
																label: 'Not Applicable',
																value: 'Not Applicable',
															},
														],
													},
												]}></Select>
										</Form.Item>
									</Col>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 1,
										}}
										lg={{
											span: 11,
											offset: 1,
										}}>
										{/* <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6"> */}
										{/* <div className="form-outline mb-4"> */}
										<Form.Item
											hidden={hideSpeciality}
											shouldUpdate
											name='Speciality'
											label='Speciality'
											rules={[
												{
													required: !hideSpeciality,
												},
											]}>
											<Select
												placeholder='Select Speciality'
												options={[
													{
														label: 'Speciality',
														options: [
															{
																label: 'General Practitioner',
																value: 'General Practitioner',
															},
															{
																label: 'Orthodontist',
																value: 'Orthodontist',
															},
															{
																label: 'Other Specialist',
																value: 'Other Specialist',
															},
														],
													},
												]}></Select>
										</Form.Item>
									</Col>
								</Row>
								<Row style={{ justifyContent: `center` }}>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 0,
										}}
										lg={{
											span: 11,
											offset: 0,
										}}>
										{/* <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6"> */}
										{/* <div className="form-outline mb-4"> */}

										<Form.Item
											name='Clinic'
											label='Clinic'
											style={{ margin: '0px' }}
											hidden={hideClinic}
											rules={[
												{
													required: !hideClinic,
												},
											]}
											shouldUpdate>
											<Select
												placeholder='Select Clinic'
												onChange={onClinicChange}>
												{clinicOptions}
											</Select>
										</Form.Item>
										<label
											style={{ margintop: '0px', marginleft: '2px' }}
											for='Clinic'>
											{clinic.address && !hideClinic
												? `${clinic.address}, ${clinic.city}, ${clinic.country}`
												: ''}
										</label>
									</Col>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 1,
										}}
										lg={{
											span: 11,
											offset: 1,
										}}>
										<Form.Item
											shouldUpdate
											name='CompletedAlignerCases'
											label='Completed aligner cases'
											hidden={hideAlignerCases}
											rules={[
												{
													required: !hideAlignerCases,
												},
											]}>
											<Select
												placeholder='Completed aligner cases'
												options={[
													{
														label: 'Completed aligner cases',
														options: [
															{
																label: 'None Completed',
																value: 'None Completed',
															},
															{
																label: '1-10',
																value: '1-10',
															},
															{
																label: '11-50',
																value: '11-50',
															},
															{
																label: '51-100',
																value: '51-100',
															},
														],
													},
												]}></Select>
										</Form.Item>
									</Col>
								</Row>
								<Divider />
								<Row style={{ justifyContent: `center` }}>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 0,
										}}
										lg={{
											span: 11,
											offset: 0,
										}}>
										{/* <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6"> */}
										{/* <div className="form-outline mb-4"> */}
										<Form.Item
											name='Country'
											label='Country'
											rules={[
												{
													required: true,
												},
											]}>
											<Select
												placeholder='Select Country'
												options={[
													{
														label: 'Country',
														options: [
															{
																label: 'Pakistan',
																value: 'Pakistan',
															},
															{
																label: 'China',
																value: 'China',
															},
															{
																label: 'Nepal',
																value: 'Nepal',
															},
															{
																label: 'England',
																value: 'England',
															},
															{
																label: 'Australia',
																value: 'Australia',
															},
														],
													},
												]}></Select>
										</Form.Item>
									</Col>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 1,
										}}
										lg={{
											span: 11,
											offset: 1,
										}}>
										<Form.Item
											name='State'
											label='State or Province'
											rules={[
												{
													required: true,
												},
											]}>
											<Select
												placeholder='Select State'
												options={[
													{
														label: 'State',
														options: [
															{
																label: 'Punjab',
																value: 'Punjab',
															},
															{
																label: 'Sindh',
																value: 'Sindh',
															},
															{
																label: 'Balochistan',
																value: 'Balochistan',
															},
															{
																label: 'KPK',
																value: 'KPK',
															},
														],
													},
												]}></Select>
										</Form.Item>
									</Col>
								</Row>
								<Row style={{ justifyContent: `center` }}>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 23,
											offset: 0,
										}}
										lg={{
											span: 23,
											offset: 0,
										}}>
										<Form.Item
											name='Address'
											label='Address'
											rules={[
												{
													required: true,
												},
											]}>
											<Input placeholder='Enter Your Address' />
										</Form.Item>
									</Col>
								</Row>
								<Row style={{ justifyContent: `center` }}>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 0,
										}}
										lg={{
											span: 11,
											offset: 0,
										}}>
										{/* <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6"> */}
										{/* <div className="form-outline mb-4"> */}
										<Form.Item
											name='City'
											label='City'
											rules={[
												{
													required: true,
												},
											]}>
											<Input placeholder='Enter Your City' />
										</Form.Item>
									</Col>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 1,
										}}
										lg={{
											span: 11,
											offset: 1,
										}}>
										<Form.Item name='ZipCode' label='Zip/Postal Code'>
											<Input placeholder='Enter Your Zip/Postal Code' />
										</Form.Item>
									</Col>
								</Row>
								<Row style={{ justifyContent: `center` }}>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 0,
										}}
										lg={{
											span: 11,
											offset: 0,
										}}>
										{/* <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6"> */}
										{/* <div className="form-outline mb-4"> */}
										<Form.Item
											name='Password'
											label='Password'
											rules={[
												{
													required: true,
												},
											]}>
											<Input
												type='password'
												placeholder='Enter Your Password'
											/>
										</Form.Item>
									</Col>
									<Col
										style={{ marginBottom: `5px` }}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 11,
											offset: 1,
										}}
										lg={{
											span: 11,
											offset: 1,
										}}>
										<Form.Item
											name='ConfirmPassword'
											label='Confirm Password'
											rules={[
												{
													required: true,
													validator: (_, value) =>
														value === form.getFieldValue('Password')
															? Promise.resolve()
															: Promise.reject(
																	new Error('Password does not match!')
															  ),
												},
											]}>
											<Input type='password' placeholder='Confirm Password' />
										</Form.Item>
									</Col>
								</Row>

								<Row style={{ justifyContent: `center` }}>
									<Col
										justify='start'
										style={{
											alignContent: `start`,
											marginTop: `20px`,
											marginBottom: `20px`,
										}}
										xs={{
											span: 24,
											offset: 0,
										}}
										sm={{
											span: 24,
											offset: 0,
										}}
										md={{
											span: 23,
										}}
										lg={{
											span: 23,
											offset: 0,
										}}>
										<Form.Item
											name='agreement'
											valuePropName='checked'
											rules={[
												{
													validator: (_, value) =>
														value
															? Promise.resolve()
															: Promise.reject(
																	new Error(
																		'You Must agree to Terms & Conditions!'
																	)
															  ),
												},
											]}>
											<Checkbox>
												I agree all statements in{' '}
												<a
													href='https://aligno.co/terms-and-conditions-doctors/'
													target='_blank'
													rel='noopener noreferrer'>
													Terms & Conditions
												</a>
											</Checkbox>
										</Form.Item>
									</Col>
								</Row>

								<Row style={{ justifyContent: `center` }}>
									<Form.Item>
										<Button loading={isLoading} onClick={btnRegisterClick}>
											Register
										</Button>
									</Form.Item>
								</Row>
							</Form>
						</Row>
					</Col>
				</Row>
			</Col>
		</>
	);
}

export default Register;
