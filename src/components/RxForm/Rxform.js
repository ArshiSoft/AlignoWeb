import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../RxForm/Rxform.css';
import { useEffect } from 'react';
import '@fontsource/league-spartan'; // Defaults to weight 400.
import '@fontsource/source-sans-pro'; // Defaults to weight 400.
import Input2 from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getCurrentDate } from '../../class/clsGeneralVariables';
import {
	Button,
	Checkbox,
	Col,
	Divider,
	Layout,
	Menu,
	Row,
	Select,
} from 'antd';
import Header from '../Dashboard/Modules/Header/Header';
import AsideMenu from '../Dashboard/Modules/Aside/AsideMenu';
import Footer from '../Dashboard/Modules/Footer/Footer';
import {
	Form,
	Input,
	InputNumber,
	message,
	Modal,
	Popconfirm,
	Space,
} from 'antd';
import { Typography } from 'antd';
import { Option } from 'antd/lib/mentions';
import { API } from '../../class/clsGlobalVariables';
const { Title } = Typography;
const { Content } = Layout;

function Rxform() {
	const navigate = useNavigate();
	const { TextArea } = Input;
	// Tab Title
	useEffect(() => {
		// if (!localStorage.getItem('token')) {
		// 	navigate('/Login');
		// }
		document.title = 'Aligno Rx-Form';
	}, []);

	const [form] = Form.useForm();

	const api = API + 'rxform/';
	const [isAgree, setIsAgree] = useState('false');
	const [isLoading, setIsLoading] = useState(false);

	const history = useNavigate();

	async function onSubmit(values) {
		console.log(values);
		console.log(JSON.stringify(values));

		const response = await fetch(api, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				PatientEmail: values.PatientEmail,
				Patient: values,
			}),
		});

		const data = await response.json();
		if (data.status === 'ok') {
			//history('/thanks');
		} else if (data.status === 'error') {
			var error = data.error.toString();
			if (error.startsWith('Duplicate')) {
				message.warn('Patient already exists!');
				console.log(data);
			}
		}
	}

	const propsCheckboxItem = {
		valuePropName: 'checked',
		style: {
			margin: 0,
		},
	};

	const propsCheckbox = {};
	return (
		<>
			<Layout>
				<AsideMenu />
				<Layout>
					<Header />
					<Content>
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
										<Title
											style={{
												justifyContent: `center`,
												textAlign: `center`,
												marginBottom: `15px`,
											}}
											level={2}>
											CASE SUBMISSION
										</Title>
										<Form
											layout='vertical'
											form={form}
											onFinish={onSubmit}
											scrollToFirstError>
											{/* 
											<Row style={{ justifyContent: `center` }}>
												<Col
													justify='start'
													style={{
														alignContent: `start`,
														marginBottom: `15px`,
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
														span: 11,
													}}
													lg={{
														span: 11,
														offset: 0,
													}}>
													<Form.Item
														style={{}}
														name='ClinicName'
														label='Name of Clinic'
														rules={[
															{
																required: true,
															},
														]}>
														<Input placeholder='Clinic Name' />
													</Form.Item>
												</Col>
												<Col
													style={{ marginBottom: `15px` }}
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
														style={{}}
														name='DoctorName'
														label='Name of Doctor'
														rules={[
															{
																required: true,
															},
														]}>
														<Input placeholder='Dr Ali' />
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
													}}
													lg={{
														span: 11,
														offset: 0,
													}}>

													<Form.Item
														name='DoctorNumber'
														label="Doctor's Phone Number"
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
														name='DoctorEmail'
														label=" Doctor's Email"
														rules={[
															{
																required: true,
															},
														]}>
														<Input
															type='email'
															placeholder='Enter Your Email'
														/>
													</Form.Item>
												</Col>
											</Row> */}
											{/* </div> */}
											{/* <div class="row align-items-start">
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6"> */}
											{/* <div className="form-outline mb-4"> */}
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
														name='PatientID'
														label="  Patient's ID"
														rules={[
															{
																required: true,
															},
														]}>
														<Input placeholder='Generated by the Introral Scanner' />
													</Form.Item>
												</Col>
												{/* </div>
                          </div> */}
												{/* <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6"> */}
												{/* <div className="form-outline mb-4"> */}
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
														name='PatientName'
														label='Patients Name'
														rules={[
															{
																required: true,
															},
														]}>
														<Input placeholder='Ali' />
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
														name='PatientNumber'
														label="Patient's Phone Number"
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
														name='PatientEmail'
														label=" Patient's Email"
														rules={[
															{
																required: true,
															},
														]}>
														<Input type='email' placeholder='ali@gmail.com' />
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
												<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
													<div className='form-outline mb-4'></div>
												</div>
											</Row>
											<Row>
												<Title
													style={{
														textAlign: `center`,
														marginBottom: `15px`,
													}}
													level={2}>
													RX FORM - INSTRUCTIONS BY DOCTOR FOR TREATMENT
													PLANNING
												</Title>
											</Row>
											<Row
												style={{
													alignItems: `start`,
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
														span: 11,
														offset: 0,
													}}
													lg={{
														span: 11,
														offset: 0,
													}}>
													<Form.Item
														name='PrimaryConcern'
														label='Primary Concern of the Patient'>
														<Input
															style={{ marginRight: `10px` }}
															placeholder='Crowding in lower arch/Diastema'
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
														name='TreatmentOfArches'
														label=' Treatment of Arches'>
														<Select
															options={[
																{
																	label: 'Treatment of Arches',
																	options: [
																		{
																			label: 'Both Arches',
																			value: 'Both Arches',
																		},
																		{
																			label: 'Upper Only',
																			value: 'Upper Only',
																		},
																		{
																			label: 'Lower Only',
																			value: 'Lower Only',
																		},
																	],
																},
															]}></Select>
													</Form.Item>
												</Col>
											</Row>
											{/* space line */}
											<Divider orientation='left'></Divider>

											<Title
												style={{
													textAlign: `center`,
													marginBottom: `15px`,
												}}
												level={2}>
												EXISTING CONDITION OF PATIENT{' '}
											</Title>
											<Row
												style={{
													alignItems: `start`,
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
														span: 11,
														offset: 0,
													}}
													lg={{
														span: 11,
														offset: 0,
													}}>
													<Form.Item name='LowerMidline' label=' Lower Midline'>
														<Select
															options={[
																{
																	label: 'Lower Midline',
																	options: [
																		{
																			label: 'Centered',
																			value: 'Centered',
																		},
																		{
																			label: 'Shifted Right',
																			value: 'Shifted Right',
																		},
																		{
																			label: 'Shifted Left',
																			value: 'Shifted Left',
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
													<Form.Item name='UpperMidline' label='Upper Midline'>
														<Select
															options={[
																{
																	label: 'Upper Midline',
																	options: [
																		{
																			label: 'Centered',
																			value: 'Centered',
																		},
																		{
																			label: 'Shifted Right',
																			value: 'Shifted Right',
																		},
																		{
																			label: 'Shifted Left',
																			value: 'Shifted Left',
																		},
																	],
																},
															]}></Select>
													</Form.Item>
												</Col>

												{/* </div> */}
											</Row>

											<Row
												style={{
													alignItems: `start`,
													justifyContent: `center`,
												}}>
												<Col
													style={{ marginBottom: `5px` }}
													xs={{
														span: 11,
														offset: 0,
													}}
													sm={{
														span: 11,
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
													{/* <div class="col"> */}
													<Title level={5}> Molar Relation</Title>
													<Row>
														<Col span={24}>
															<Form.Item name='MRCIR' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>
																	Class I Right
																</Checkbox>
															</Form.Item>
															<Form.Item name='MRCIL' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>
																	Class I Left
																</Checkbox>
															</Form.Item>
															<Form.Item name='MRCIIR' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>
																	Class II Right
																</Checkbox>
															</Form.Item>
															<Form.Item name='MRCIIL' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>
																	Class II Left
																</Checkbox>
															</Form.Item>
															<Form.Item name='MRCIIIR' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>
																	Class III Right
																</Checkbox>
															</Form.Item>
															<Form.Item name='MRCIIIL' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>
																	Class III Left
																</Checkbox>
															</Form.Item>
														</Col>
													</Row>
												</Col>

												<Col
													style={{ marginBottom: `5px`, justifyContent: `end` }}
													xs={{
														span: 12,
														offset: 0,
													}}
													sm={{
														span: 12,
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
													<Title level={5}> Canine Relation</Title>
													<Row>
														<Col span={24}>
															<Form.Item name='CRCIR' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>
																	Class I Right
																</Checkbox>
															</Form.Item>
															<Form.Item name='CRCIL' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>
																	Class I Left
																</Checkbox>
															</Form.Item>
															<Form.Item name='CRCIIR' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>
																	Class II Right
																</Checkbox>
															</Form.Item>
															<Form.Item name='CRCIIL' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>
																	Class II Left
																</Checkbox>
															</Form.Item>
															<Form.Item name='CRCIIIR' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>
																	Class III Right
																</Checkbox>
															</Form.Item>
															<Form.Item name='CRCIIIL' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>
																	Class III Left
																</Checkbox>
															</Form.Item>
														</Col>
													</Row>
												</Col>
											</Row>
											{/* </div> */}
											<Divider orientation='left'></Divider>
											<Row>
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
														offset: 0,
													}}
													lg={{
														span: 24,
														offset: 0,
													}}>
													<Form.Item
														name='Bridges'
														label='  BRIDGES, IMPLANTS ETC'>
														<Input placeholder='Please mention which teeth have bridges,implants etc so that are not moved in' />
													</Form.Item>
												</Col>
											</Row>
											<Divider orientation='left'></Divider>

											<Title
												style={{
													marginBottom: `15px`,
												}}
												level={3}>
												TREATMENT GOALS
											</Title>
											<Row style={{ alignItems: 'center' }}>
												<Col
													style={{ marginBottom: `5px` }}
													xs={{
														span: 11,
														offset: 0,
													}}
													sm={{
														span: 11,
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
													<Title style={{ textAlign: `start` }} level={5}>
														Lower Midline
													</Title>
													<Row>
														<Col span={24}>
															<Form.Item
																name='LMMaintain'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Maintain</Checkbox>
															</Form.Item>
															<Form.Item
																name='LMImprove'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Improve</Checkbox>
															</Form.Item>
															<Form.Item name='LMIdeal' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Ideal</Checkbox>
															</Form.Item>
														</Col>
													</Row>
													<Title
														style={{ textAlign: `start`, marginTop: `15px` }}
														level={5}>
														Overbite
													</Title>
													<Row>
														<Col span={24}>
															<Form.Item
																name='OBMaintain'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Maintain</Checkbox>
															</Form.Item>
															<Form.Item
																name='OBImprove'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Improve</Checkbox>
															</Form.Item>
															<Form.Item name='OBIdeal' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Ideal</Checkbox>
															</Form.Item>
														</Col>
													</Row>
													<Title
														style={{ textAlign: `start`, marginTop: `15px` }}
														level={5}>
														Molar Relation
													</Title>
													<Row>
														<Col span={24}>
															<Form.Item
																name='MRMaintain'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Maintain</Checkbox>
															</Form.Item>
															<Form.Item
																name='MRImprove'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Improve</Checkbox>
															</Form.Item>
															<Form.Item name='MRIdeal' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Ideal</Checkbox>
															</Form.Item>
														</Col>
													</Row>
													<Title
														style={{ textAlign: `start`, marginTop: `15px` }}
														level={5}>
														Arch Form
													</Title>
													<Row>
														<Col span={24}>
															<Form.Item
																name='AFMaintain'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Maintain</Checkbox>
															</Form.Item>
															<Form.Item
																name='AFImprove'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Improve</Checkbox>
															</Form.Item>
															<Form.Item name='AFIdeal' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Ideal</Checkbox>
															</Form.Item>
														</Col>
													</Row>
												</Col>
												<Col
													style={{ marginBottom: `5px`, justifyContent: `end` }}
													xs={{
														span: 11,
														offset: 2,
													}}
													sm={{
														span: 11,
														offset: 2,
													}}
													md={{
														span: 11,
														offset: 2,
													}}
													lg={{
														span: 11,
														offset: 2,
													}}>
													<Title style={{ textAlign: `start` }} level={5}>
														Upper Midline
													</Title>
													<Row>
														<Col span={24}>
															<Form.Item
																name='UMMaintain'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Maintain</Checkbox>
															</Form.Item>
															<Form.Item
																name='UMImprove'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Improve</Checkbox>
															</Form.Item>
															<Form.Item name='UMIdeal' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Ideal</Checkbox>
															</Form.Item>
														</Col>
													</Row>
													<Title
														style={{ textAlign: `start`, marginTop: `15px` }}
														level={5}>
														Overjet
													</Title>
													<Row>
														<Col span={24}>
															<Form.Item
																name='OJMaintain'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Maintain</Checkbox>
															</Form.Item>
															<Form.Item
																name='OJImprove'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Improve</Checkbox>
															</Form.Item>
															<Form.Item name='OJIdeal' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Ideal</Checkbox>
															</Form.Item>
														</Col>
													</Row>
													<Title
														style={{ textAlign: `start`, marginTop: `15px` }}
														level={5}>
														Canine Relation
													</Title>
													<Row>
														<Col span={24}>
															<Form.Item
																name='CRMaintain'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Maintain</Checkbox>
															</Form.Item>
															<Form.Item
																name='CRImprove'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Improve</Checkbox>
															</Form.Item>
															<Form.Item name='CRIdeal' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Ideal</Checkbox>
															</Form.Item>
														</Col>
													</Row>
													<Title
														style={{ textAlign: `start`, marginTop: `15px` }}
														level={5}>
														Posterior Crossbite
													</Title>
													<Row>
														<Col span={24}>
															<Form.Item
																name='PCMaintain'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Maintain</Checkbox>
															</Form.Item>
															<Form.Item
																name='PCImprove'
																{...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Improve</Checkbox>
															</Form.Item>
															<Form.Item name='PCIdeal' {...propsCheckboxItem}>
																<Checkbox {...propsCheckbox}>Ideal</Checkbox>
															</Form.Item>
														</Col>
													</Row>
												</Col>
											</Row>

											<Row
												style={{ justifyContent: `center`, marginTop: `30px` }}>
												<Col
													justify='start'
													style={{
														alignContent: `start`,
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
														span: 11,
													}}
													lg={{
														span: 11,
														offset: 0,
													}}>
													<Form.Item name='Expand' label='Expand'>
														<Select
															options={[
																{
																	label: 'Expand',
																	options: [
																		{
																			label: 'Yes',
																			value: 'Yes',
																		},
																		{
																			label: 'No',
																			value: 'No',
																		},
																		{
																			label: 'Only if needed',
																			value: 'Only if needed',
																		},
																	],
																},
															]}></Select>
													</Form.Item>
												</Col>
												<Col
													justify='start'
													style={{
														alignContent: `start`,
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
														span: 11,
														offset: 1,
													}}
													lg={{
														span: 11,
														offset: 1,
													}}>
													<Form.Item name='Engagers' label=' Engagers'>
														<Select
															options={[
																{
																	label: 'Engagers',
																	options: [
																		{
																			label: 'Yes',
																			value: 'Yes',
																		},
																		{
																			label: 'No',
																			value: 'No',
																		},
																		{
																			label: 'Only if needed',
																			value: 'Only if needed',
																		},
																	],
																},
															]}></Select>
													</Form.Item>
												</Col>
											</Row>
											<Row style={{ justifyContent: `center` }}>
												<Col
													justify='start'
													style={{
														alignContent: `start`,
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
														span: 11,
													}}
													lg={{
														span: 11,
														offset: 0,
													}}>
													<Form.Item name='Distalize' label=' Distalize'>
														<Select
															options={[
																{
																	label: 'Distalize',
																	options: [
																		{
																			label: 'Yes',
																			value: 'Yes',
																		},
																		{
																			label: 'No',
																			value: 'No',
																		},
																		{
																			label: 'Only if needed',
																			value: 'Only if needed',
																		},
																	],
																},
															]}></Select>
													</Form.Item>
												</Col>
												<Col
													justify='start'
													style={{
														alignContent: `start`,
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
														span: 11,
														offset: 1,
													}}
													lg={{
														span: 11,
														offset: 1,
													}}>
													<Form.Item
														name='AvoidEngagers'
														label='Avoid Engagers'>
														<Input placeholder='Avoid Engagers on these teeth(facial restorations, etc)' />
													</Form.Item>
												</Col>
											</Row>

											<Row style={{ justifyContent: `center` }}>
												<Col
													justify='start'
													style={{
														alignContent: `start`,
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
														name='ExtractTeeth'
														label='Extract these teeth before Treatment'>
														<Input />
													</Form.Item>
												</Col>
											</Row>

											<Row style={{ justifyContent: `center` }}>
												<Col
													justify='start'
													style={{
														alignContent: `start`,
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
														name='DoctorNotes'
														label='Doctor Notes'
														rules={[
															{
																required: true,
															},
														]}>
														<TextArea autoSize placeholder='Doctor Notes' />
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
														{...propsCheckboxItem}
														rules={[
															{
																validator: (_, value) =>
																	value
																		? Promise.resolve()
																		: Promise.reject(
																				new Error('Must accept agreement!')
																		  ),
															},
														]}>
														<Checkbox {...propsCheckbox}>
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
													<Button htmlType='submit'>Submit</Button>
												</Form.Item>
											</Row>
										</Form>
									</Row>
								</Col>
							</Row>
						</Col>
					</Content>
					<Footer />
				</Layout>
			</Layout>
		</>
	);
}

export default Rxform;
