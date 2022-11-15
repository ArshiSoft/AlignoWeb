/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Register/Register.css';
import { useEffect } from 'react';
import '@fontsource/league-spartan'; // Defaults to weight 400.
import '@fontsource/source-sans-pro'; // Defaults to weight 400.

import Input from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as Yup from 'yup'

function validate() {
	const pass1 = document.getElementById('pass1');
	const pass2 = document.getElementById('pass2');
	if (pass1.value == pass2.value) {
		document.getElementById('Match').style.display = 'none';
	} else {
		document.getElementById('Match').style.display = 'block';
	}
}

function Register() {

	const navigate = useNavigate()

	
	const [firstname, setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [gender, setGender] = useState('');
	const [degree, setDegree] = useState('');
	const [email, setEmail] = useState('');
	const [department, setDepartment] = useState('');
	const [speciality, setSpeciality] = useState('');
	const [completecases, setCompleteCases] = useState('');
	const [country, setCountry] = useState('');
	const [state, setState] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [phoneinputvalue, setPhoneInputValue] = useState('');
	const [phone, setPhone] = useState('');
	const [zip, setZip] = useState('');
	const [password, setPassword] = useState('');
	const [showhide, setShowHide] = useState('');

	// Tab Title
	useEffect(() => {
		document.title = 'Aligno - Register';
	}, []);


	
	




	const handleshowhide = (event) => {
		const getuser = event.target.value;

		setShowHide(getuser);
	};




	const history = useNavigate();

	async function regData(event) {
		event.preventDefault();
		const response = await fetch('https://server.aligno.co/api/regform', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstname,
				lastname,
				degree,
				speciality,
				completecases,
				email,
				department,
				country,
				state,
				address,
				city,
				phone,
				zip,
				gender,
				password,
			}),
		});

		const data = await response.json();
		if (data.status === 'ok') {
			const mailResponse = await fetch(
				'https://server.aligno.co/api/sendmail-noreply',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						to: email,
						subject: 'Activation Email',
						//html: 'Hello',
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
																											><a href="https://portal.aligno.co/activate?id=${data.response._id}">Activate Now</a></span
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
				}
			);
			if (mailResponse.status) {
				console.log(mailResponse.json());
				history('/Login');
			}
		}
		console.log(data);

		// const getuser = event.target.value;
		// setShowHide(getuser)
	}

	return (
		<>
			<div className='mask d-flex align-items-center h-100 gradient-custom-3'>
				<div className=' container h-100'>
					<div className='row d-flex justify-content-center align-items-center h-100'>
						<div
							className='col-12 col-sm-6 col-md-9 col-lg-7 col-sm-6 col-xl-6 formwidth'
							style={{ width: `900px`, height: `1500px` }}>
							<div
								style={{
									// margin: `10px`,
									backgroundColor: `white`,
									borderRadius: `10px`,
									padding: `50px`,
								}}>
								<h2 class='text-uppercase text-center mb-5'>Register</h2>
								<form onSubmit={regData}>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='validationCustom01'>
													First Name<span className='required'>*</span>
												</label>

												<input
													id='userNameInput'
													type='text'
													onChange={(e) => setFirstName(e.target.value)}
													value={firstname}
													placeholder='First Name'
													// onBlur={formik.handleChange}
													// value={formik.values.clinicname}
													// name="clinicname"
													className='form-control form-control-lg'
													required
												/>
												{/* <div className="text-danger">
            {formik.errors.clinicname ? formik.errors.clinicname : null}
          </div> */}
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													Last Name <span className='required'>*</span>
												</label>
												<input
													type='text'
													onChange={(e) => setLastName(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.doctorname}
													name='lastname'
													placeholder='Last Name'
													id='form3Example3cg'
													className='form-control form-control-lg'
													required
												/>
												{/* <div className="text-danger">
            {formik.errors.doctorname ? formik.errors.doctorname : null}
          </div> */}
											</div>
										</div>
									</div>

									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													Email <span className='required'>*</span>
												</label>
												<input
													type='email'
													onChange={(e) => setEmail(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.doctoremail}
													name='email'
													placeholder='Enter Your Email'
													id='form3Example3cg'
													className='form-control form-control-lg'
													required
												/>
												{/* <div className="text-danger">
            {formik.errors.doctoremail ? formik.errors.doctoremail : null}
          </div> */}
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example4cg'>
													Phone Number <span className='required'>*</span>
												</label>
												<Input
													country={'pk'}
													value={phone}
													name='patientnumber'
													required
													onChange={
														((e) => {
															setPhoneInputValue(e.target.value);
														},
														setPhone)
													}
													inputStyle={{
														width: '100%',
														minHeight: 'calc(1.5em + 1rem + 2px)',
														fontSize: '1.25rem',
														borderRadius: '.5rem',
													}}
												/>
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example4cdg'>
													Select Gender <span className='required'>*</span>
												</label>
												<select
													className='form-select form-select-lg'
													required
													onChange={(e) => setGender(e.target.value)}
													aria-label='Default select example'>
													<option value='' disabled selected>
														Gender
													</option>
													<option value='Male'>Male</option>
													<option value='Female'>Female</option>
												</select>
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Department <span className='required'>*</span>
												</label>
												<select
													className='form-select form-select-lg'
													required
													onChange={(e) => {
														handleshowhide(e);
														setDepartment(e.target.value);
													}}
													aria-label='Default select example'
													placeholder=''>
													<option value='' disabled selected>
														Select Department
													</option>
													<option value='1'>Doctor</option>
													<option value='2'>Patient</option>
													<option value='3'>Staff/CS Department</option>
													<option value='4'>Planning Department</option>
													<option value='5'>Manufacturing Department</option>
												</select>
											</div>
										</div>
									</div>

									{showhide === '1' && (
										<div>
											<div class='row align-items-start'>
												<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
													<div className='form-outline mb-4'>
														<label className='form-label' for='form3Example1cg'>
															Degree <span className='required'>*</span>
														</label>
														<select
															onChange={(e) => setDegree(e.target.value)}
															className='form-select form-select-lg'
															required
															aria-label='Default select example'
															placeholder='Degree'>
															<option value='' disabled selected>
																Degree
															</option>
															<option value='DDS'>DDS</option>
															<option value='DMD'>DMD</option>
															<option value='MDS'>MDS</option>
															<option value='Not Applicable'>
																Not Applicable
															</option>
														</select>
													</div>
												</div>
												<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
													<div className='form-outline mb-4'>
														<label className='form-label' for='form3Example1cg'>
															Speciality <span className='required'>*</span>
														</label>
														<select
															onChange={(e) => setSpeciality(e.target.value)}
															className='form-select form-select-lg'
															required
															aria-label='Default select example'
															placeholder='Speciality'>
															<option value='' disabled selected>
																Speciality
															</option>
															<option value='General Practitioner'>
																General Practitioner
															</option>
															<option value='Orthodontist'>Orthodontist</option>
															<option value='Other specialist'>
																Other specialist
															</option>
														</select>
													</div>
												</div>
											</div>
											<div class='row align-items-start'>
												<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
													<div className='form-outline mb-4'>
														<label className='form-label' for='form3Example1cg'>
															Completed aligner cases{' '}
															<span className='required'>*</span>
														</label>
														<select
															onChange={(e) => setCompleteCases(e.target.value)}
															class='form-select form-select-lg'
															required
															aria-label='Default select example'
															placeholder='Completed aligner cases'>
															<option value='' disabled selected>
																Completed aligner cases
															</option>
															<option value='None Completed'>
																None Completed
															</option>
															<option value='1-10'>1-10</option>
															<option value='11-50'>11-50</option>
															<option value='51-100'>51-100</option>
														</select>
													</div>
												</div>
											</div>
										</div>
									)}
									<div class='row align-items-start mt-4'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Country <span className='required'>*</span>
												</label>
												<select
													onChange={(e) => setCountry(e.target.value)}
													class='form-select form-select-lg'
													required
													aria-label='Default select example'
													placeholder='Country'>
													<option value='' disabled selected>
														Country
													</option>
													<option value='Pakistan'>Pakistan</option>
													<option value='Afghanistan'>Afghanistan</option>
													<option value='Nepal'>Nepal</option>
													<option value='Iran'>Iran</option>
												</select>
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													State or Province <span className='required'>*</span>
												</label>
												<select
													onChange={(e) => setState(e.target.value)}
													class='form-select form-select-lg'
													required
													aria-label='Default select example'
													placeholder='State or Province'>
													<option value='' disabled selected>
														State or Province
													</option>
													<option value='Punjab'>Punjab</option>
													<option value='Sindh'>Sindh</option>
													<option value='Balochistan'>Balochistan</option>
													<option value='California'>California</option>
													<option value='Arizona'>Arizona</option>
												</select>
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-12 col-lg-12 col-xl-12'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Address <span className='required'>*</span>
												</label>
												<input
													type='text'
													onChange={(e) => setAddress(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.patientid}
													name='patientid'
													placeholder='Address'
													id='form3Example1cg'
													className='form-control form-control-lg'
													required
												/>
												{/* <div className="text-danger">
            {formik.errors.patientid ? formik.errors.patientid : null}
          </div> */}
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													City <span className='required'>*</span>
												</label>
												<input
													type='text'
													onChange={(e) => setCity(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.patientid}
													name='City'
													placeholder='City'
													id='form3Example1cg'
													className='form-control form-control-lg'
													required
												/>
												{/* <div className="text-danger">
            {formik.errors.patientid ? formik.errors.patientid : null}
          </div> */}
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													ZIP/Postal code
												</label>
												<input
													type='text'
													onChange={(e) => setZip(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='ZIP/Postal code'
													id='form3Example3cg'
													className='form-control form-control-lg'
												/>
												{/* <div className="text-danger">
            {formik.errors.nameofpatient ? formik.errors.nameofpatient : null}
          </div> */}
											</div>
										</div>
									</div>

									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													Password <span className='required'>*</span>
												</label>
												<input
													type='password'
													onKeyUp={() => validate()}
													onChange={(e) => setPassword(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='Enter Password'
													id='pass1'
													className='form-control form-control-lg'
													required
												/>
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													Confirm Password <span className='required'>*</span>
												</label>
												<input
													type='password'
													onKeyUp={() => validate()}
													onChange={(e) => set(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name=''
													placeholder='Enter Password'
													id='pass2'
													className={`form-control form-control-lg `}
													required
												/>

												<p
													style={{ color: `red`, marginLeft: `7px` }}
													id='Match'>
													{' '}
													Password not Match
												</p>
											</div>
										</div>
									</div>

									{/*  */}
									<div class='row align-items-start'>
										<div class='col'>
											<div className='form-check d-flex  mb-5'>
												<input
													className='form-check-input me-2'
													required
													type='checkbox'
													id='form2Example3cg'
												/>
												<label
													className='form-check-label'
													for='form2Example3g'>
													I agree all statements in{' '}
													<a
														href='https://aligno.co/terms-and-conditions-doctors/'
														target='_blank'
														rel='noopener noreferrer'
														className='text-body'>
														<u>Terms of service</u>
													</a>
												</label>
											</div>
										</div>
									</div>
									<div className='d-flex justify-content-center'>
										<button
											type='submit'
											value='Register'
											className='btn btn-success btn-block btn-lg gradient-custom-4 text-body'>
											Register
										</button>
									</div>

									{/* <p className='text-center text-muted mt-5 mb-0'>
										Have already an account?{' '}
										<a href='#!' className='fw-bold text-body'>
											<u>Login here</u>
										</a>
									</p> */}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

// export const InventoryEditForm = withFormik({
// 	enableReinitialize: true,
// 	mapPropsToValues: ({ tempData }) => {
// 	  // On tempData?.customerDetails all the details data is set except warehouse data, warehouse can be accessible on tempData[1]
// 	  return ({
// 		NAME: tempData?.customerDetails?.NAME || "",
// 		CODE: tempData?.customerDetails?.CODE || "",
// 		//SUPPLIER_DESCRIPTION: tempData?.customerDetails?.SUPPLIER_DESCRIPTION || "",
// 		CITY: tempData?.customerDetails?.CITY || "",
// 		ADDRESS_1: tempData?.customerDetails?.ADDRESS_1 || "",
// 		POSTAL_CODE: tempData?.customerDetails?.POSTAL_CODE || "",
// 		PHONE_1: tempData?.customerDetails?.PHONE_1 || "",
// 		EMAIL: tempData?.customerDetails?.EMAIL || "",
// 		//COUNTRY: tempData?.customerDetails?.COUNTRY || "",
// 		//PROVINCE: tempData?.customerDetails?.PROVINCE || "",
// 		NOTES: tempData?.customerDetails?.NOTES || "",
// 		ACTIVE_FLAG: tempData?.customerDetails?.ACTIVE_FLAG || ""
// 	  })
// 	},
// 	validationSchema: Yup.object().shape({
// 	  NAME: Yup.string().required("Name is a required field"),
// 	  POSTAL_CODE: Yup.string().required("Postal Code is a required field"),
// 	  PHONE_1: Yup.string().min(10, "Phone Number is not valid").required("Phone is a required field"),
// 	  EMAIL: Yup.string().email('Invalid email format').required("Email is a required field"),
// 	  ADDRESS_1: Yup.string().required("Address is required field"),
// 	  COUNTRY: Yup.string().required("Country is required field"),
// 	  //PROVINCE: Yup.string().required("Province/State is a required field"),
// 	  CITY: Yup.string().required("City/Town  is a required feild"),
// 	  // POSTAL_CODE:Yup.string().required("Postal Code is a required field").matches("([A-Z]{1}[0-9]{1}){3}")
// 	}),

// 	handleSubmit: (values, { props: { submitFormHandler }, setSubmitting, resetForm }) => {
// 	  setSubmitting(true);

// 	  setTimeout(() => {
// 		setSubmitting(false);
// 	  }, 1000);

// 	  submitFormHandler({ payload: values, setSubmitting, resetForm });
// 	},
//   })(InnerForm);

export default Register;
