/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import { useEffect } from 'react';
import '@fontsource/league-spartan'; // Defaults to weight 400.
import '@fontsource/source-sans-pro'; // Defaults to weight 400.
import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import Input from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Redirect } from 'react-router-dom';
import { message } from 'antd';
import { createToken, isToken, removeToken } from '../class/clsSession';
import { API } from '../class/clsGlobalVariables';
import { SetUserInfoInLocalStorage } from '../class/clsStorage';
import { Button, Checkbox, Col, Divider, Row, Select, Form, Input } from 'antd';

import {} from 'antd';
import { Typography } from 'antd';
import { Option } from 'antd/lib/mentions';
const { Title } = Typography;

function Login() {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	const [form] = Form.useForm();

	useEffect(() => {
		// if (isToken()) {
		// 	navigate('/');
		// } else {
		// 	removeToken();
		// }
		document.title = 'Aligno Login';
	}, []);

	function btnLoginClick(e) {
		e.preventDefault();
		setIsLoading(true);
		form
			.validateFields()
			.then(() => {
				return setTimeout(() => {
					console.log('form submit');
					form.submit();
				}, 1000);
			})
			.catch((ex) => {
				setIsLoading(false);
			});
	}

	async function onLogin(values) {
		try {
			console.log('inlogin');
			console.log(values);
			const response = await fetch(API + 'login/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			});

			var result = await response.json();

			console.log(result);
			if (result) {
				if (result.status === 'ok') {
					createToken(result.token);
					SetUserInfoInLocalStorage(result.user);
					navigate('/');
				} else if (result.status === 'error') {
					message.warning(result.error);
				}
				console.log(result);
			} else {
				message.error('Something went wrong Result!');
			}
		} catch (ex) {
			message.error('Connection problem!');
			console.log(ex);
		}
		setIsLoading(false);
	}
	return (
		<>
			<Col
				style={{ alignItems: `center`, height: `100` }}
				className='gradient-custom-3'>
				<Row
					style={{
						justifyContent: `center`,
						width: `100%`,
						alignItems: `center`,
					}}>
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
							span: 7,
						}}
						lg={{
							span: 7,
							offset: 0,
						}}>
						<Row
							style={{
								marginTop: `120px`,
								marginBottom: `120px`,
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
									Login
								</Title>
							</Col>
							<Form
								layout='vertical'
								form={form}
								onFinish={onLogin}
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
											span: 24,
										}}
										lg={{
											span: 24,
										}}>
										<Form.Item
											name='Email'
											rules={[
												{
													type: 'email',
													message: 'The input is not valid E-mail!',
												},
												{
													required: true,
												},
											]}>
											<Input
												prefix={
													<UserOutlined className='site-form-item-icon' />
												}
												placeholder='Email'
											/>
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
											span: 24,
											offset: 0,
										}}
										lg={{
											span: 24,
											offset: 0,
										}}>
										<Form.Item
											name='Password'
											rules={[
												{
													required: true,
												},
											]}>
											<Input
												prefix={
													<LockOutlined className='site-form-item-icon' />
												}
												type='password'
												placeholder='Password'
											/>
										</Form.Item>

										{/* </div>
                          </div> */}
									</Col>
								</Row>
								{/* </div> */}
								{/* <Row style={{ justifyContent: `center` }}>
									<Form.Item>
										<Form.Item name='remember' valuePropName='checked' noStyle>
											<Checkbox>Remember me</Checkbox>
										</Form.Item>

										<a className='login-form-forgot' href=''>
											Forgot password
										</a>
									</Form.Item>
								</Row> */}

								<Row style={{ justifyContent: `center`, marginBottom: `0px` }}>
									<Form.Item>
										<Button
											type='primary'
											loading={isLoading}
											onClick={btnLoginClick}
											style={{ width: '250px' }}>
											Log in
										</Button>
									</Form.Item>
								</Row>
								<Row
									style={{
										justifyContent: `center`,
										marginTop: `0px !important`,
									}}>
									<Form.Item>
										Don't have an account? <a href='/register'>register now!</a>
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

export default Login;
