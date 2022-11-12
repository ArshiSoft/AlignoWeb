/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import '@fontsource/league-spartan'; // Defaults to weight 400.
import '@fontsource/source-sans-pro'; // Defaults to weight 400.

// import Input from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



function Login() {
    // Tab Title
    useEffect(() => {
        document.title = 'Aligno-Login';
    }, []);



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const history = useNavigate();



    async function loginUser(event) {
        event.preventDefault()
        const response = await fetch('https://server.aligno.co/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        const data = await response.json()

        if (data.user) {
            localStorage.setItem('token', data.user)
            alert('login successfull')
            window.location.href = '/Dashboard'

        }
        else {
            alert('please check your username and password')
            window.location.href = '/Login'
        }

    }
    return (
        <>
            <div className='mask d-flex align-items-center h-100 gradient-custom-3'>
                <div className=' container h-100'>
                    <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div
                            className='col-12 col-sm-6 col-md-9 col-lg-7 col-sm-6 col-xl-6 formwidth mt-5'
                            style={{ width: `600px` ,height : `920px` }}>
                            <div
                                style={{
                                    // margin: `10px`,
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
                                                    Email <span>*</span>
                                                </label>
                                                <input
                                                    type='email'
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    // onBlur={formik.handleChange}
                                                    // value={formik.values.doctoremail}
                                                    name='email'
                                                    placeholder='Enter Your Email'
                                                    value={email}
                                                    id='form3Example3cg'
                                                    className='form-control form-control-lg'
                                                    required
                                                />
                                                {/* <div className="text-danger">
            {formik.errors.doctoremail ? formik.errors.doctoremail : null}
          </div> */}
                                            </div>
                                        </div>
                                        <div class='col-sm-12 col-12 col-md-12 col-lg-12 col-xl-12'>
                                            <div className='form-outline mb-4'>
                                                <label className='form-label' for='form3Example3cg'>
                                                    Password <span>*</span>
                                                </label>
                                                <input
                                                    type='password'
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    // onBlur={formik.handleChange}
                                                    // value={formik.values.doctoremail}
                                                    name='password'
                                                    value={password}
                                                    placeholder='Enter Password'
                                                    id='form3Example3cg'
                                                    className='form-control form-control-lg'
                                                    required
                                                />
                                                {/* <div className="text-danger">
            {formik.errors.doctoremail ? formik.errors.doctoremail : null}
          </div> */}
                                            </div>
                                        </div>
                                    </div>

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
