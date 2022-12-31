/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import '@fontsource/league-spartan'; // Defaults to weight 400.
import '@fontsource/source-sans-pro'; // Defaults to weight 400.

// import Input from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Redirect } from 'react-router-dom';
import { message } from 'antd';
import { createToken, isToken, removeToken } from '../class/clsSession';
import { API } from '../class/clsGlobalVariables';
import { SetUserInfoInLocalStorage } from '../class/clsStorage';

function Login() {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Tab Title
	useEffect(() => {
		if (isToken()) {
			navigate('/');
		} else {
			removeToken();
		}
		document.title = 'Aligno Login';
	}, []);

	async function loginUser(event) {
		event.preventDefault();
		try {
			const response = await fetch(API + 'login/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
					password,
				}),
			});

			var result = await response.json();

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
	}
	return (
		<>
			<div className='mask d-flex align-items-center h-100 gradient-custom-3'>
				<div className=' container h-100'>
					<div className='row d-flex justify-content-center align-items-center h-100'>
						<div
							className='col-12 col-sm-6 col-md-9 col-lg-7 col-sm-6 col-xl-6 formwidth mt-5'
							style={{ width: `600px`, height: `920px` }}>
							<div
								style={{
									backgroundColor: `white`,
									borderRadius: `10px`,
									padding: `50px`,
								}}>
								<h2 class='text-uppercase text-center mb-5'>Login</h2>
								<form onSubmit={loginUser}>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-12 col-lg-12 col-xl-12'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													Email <span className='required'>*</span>
												</label>
												<input
													type='email'
													onChange={(e) => setEmail(e.target.value)}
													name='email'
													placeholder='Enter Your Email'
													value={email}
													id='form3Example3cg'
													className='form-control form-control-lg'
													required
												/>
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-12 col-lg-12 col-xl-12'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													Password <span className='required'>*</span>
												</label>
												<input
													type='password'
													onChange={(e) => setPassword(e.target.value)}
													name='password'
													value={password}
													placeholder='Enter Password'
													id='form3Example3cg'
													className='form-control form-control-lg'
													required
												/>
											</div>
										</div>
									</div>

									{/* TERMS AND CONDITIONS  */}
									{/* <div class='row align-items-start'>
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
                                    </div> */}
									<div className='d-flex justify-content-center'>
										<button
											type='submit'
											value='Login'
											className='btn btn-success btn-block btn-lg gradient-custom-4 text-body'>
											Login
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

export default Login;
