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



function Register() {
	// Tab Title
	useEffect(() => {
		document.title = 'Aligno-Register';
	}, []);
	const [firstname,setFirstName] = useState('');
	const [lastname, setLastName] = useState('');
	const [gender, setGender] = useState('');
	const [degree, setDegree] = useState('');
	const [email, setEmail] = useState('');
    const [speciality, setSpeciality] = useState('');
	const [completecases, setCompleteCases] = useState('');
	const [country, setCountry] = useState('');
	const [state, setState] = useState('');
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [phoneinputvalue,setPhoneInputValue] = useState('');
	const [phone,setPhone] = useState('');
	const [zip, setZip] = useState('');
	const [password, setPassword] = useState('');
	const [showhide, setShowHide] = useState('');

	// const formSchema = Yup.object().shape({
	// 	password: Yup.string()
	// 	  .required('Password is mendatory')
	// 	  .min(3, 'Password must be at 3 char long'),
	// 	confirmPwd: Yup.string()
	// 	  .required('Password is mendatory')
	// 	  .oneOf([Yup.ref('password')], 'Passwords does not match'),
	//   })
	//   const formOptions = { resolver: yupResolver(formSchema) }
	//   const { register, formState } = useForm(formOptions)
	//   const { errors } = formState

	//   function regData(data) {
	// 	console.log(JSON.stringify(data, null, 4))
	// 	return false
	//   }
	 

	const handleshowhide=(event)=>{
		const getuser = event.target.value;
		setShowHide(getuser)
	}
	
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
			history('/thanks');
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
							style={{ width: `900px` ,height : `1500px`}}>
							<div
								style={{
									// margin: `10px`,
									backgroundColor: `white`,
									borderRadius: `10px`,
									padding: `50px`,
								}}>
								<h2 class='text-uppercase text-center mb-5'>Register</h2>
								<form onSubmit={regData}>
									{/* <FormGroup style={RowSpacing} row>
          <Label style={LabelFont} md={3} lg={2} for="NAME" sm={1}>Name<span className="text-danger">*</span></Label>
          <Col sm={5} md={3} lg={4} >
            <Input
              tabIndex={1}
              onClick={() => { setInputValueLength(inputValueLength + 1) }}
              style={InputBottomBorderOnly}
              size="sm"
              tag={Field}
              name="NAME"
              value={values?.NAME}
              onChange={(e) => { setFieldValue("NAME", e.target.value); customerCodeValidator("NAME", e.target.value) }}
              placeholder="Name"
              className={touched && touched.NAME ? ((errors && errors.NAME) || !isCustomerCodeValid ? 'is-invalid text-md-left' : 'is-valid text-md-left') : 'text-md-left'}
              disabled={isViewable}
            />
            <ErrorMessage component={FormFeedback} name="NAME" />
            {!isCustomerCodeValid && isCustomerCodeValid !== undefined && <h6 className='text-danger'>Name already exists </h6>}

          </Col>

          <Col md={3} lg={2} sm={1}>
          </Col>
          <Col sm={5} md={3} lg={4}>
            <div className='align_items_inline'>
              <Label style={LabelFont} for="ACTIVE_FLAG" className="flex_one checkbox_label_margin">Active</Label>
              <FormSwitch
                tabIndex={11}
                setFieldValue={setFieldValue}
                name="ACTIVE_FLAG"
                value={values?.ACTIVE_FLAG}
              />
            </div>
          </Col>
                                          </FormGroup> */}
<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-9 col-lg-9 col-xl-9'>
											
										</div>
										<div class='col-sm-12 col-12 col-md-3 col-lg-3 col-xl-3'>
										<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Categories
												</label>
												<select
													onChange={(e) => (handleshowhide(e))}
													class='form-select form-select-lg'
													aria-label='Default select example'
													placeholder=''>
													<option value='' disabled selected>
														Categories
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
									{ showhide ==='1' && (
										<div>
									
									
									
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Degree
												</label>
												<select
													onChange={(e) => setDegree(e.target.value)}
													class='form-select form-select-lg'
													aria-label='Default select example'
													placeholder='Degree'>
													<option value='' disabled selected>
														Degree
													</option>
													<option value='DDS'>DDS</option>
													<option value='DMD'>DMD</option>
													<option value='MDS'>MDS</option>
													<option value='Not Applicable'>Not Applicable</option>
												</select>
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Speciality
												</label>
												<select
													onChange={(e) => setSpeciality(e.target.value)}
													class='form-select form-select-lg'
													aria-label='Default select example'
													placeholder='Speciality'>
													<option value='' disabled selected>
														Speciality
													</option>
													<option value='General Practitioner'>General Practitioner</option>
													<option value='Orthodontist'>Orthodontist</option>
													<option value='Other specialist'>Other specialist</option>
												</select>
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Completed aligner cases
												</label>
												<select
													onChange={(e) => setCompleteCases(e.target.value)}
													class='form-select form-select-lg'
													aria-label='Default select example'
													placeholder='Completed aligner cases'>
													<option value='' disabled selected>
													Completed aligner cases
													</option>
													<option value='Centered'>None Completed</option>
													<option value='Shifted Right'>1-10</option>
													<option value='Shifted Left'>11-50</option>
													<option value='Shifted Left'>51-100</option>
												</select>
											</div>
										</div>
										
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
										
									</div>
									<div class='row align-items-start'>
										
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
											<label className='form-label' for='form3Example3cg'>
													Password <span>*</span>
												</label>
												<input
													type='password'
													// {...register('password')}
													onChange={(e) => setPassword(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='Enter Password'
													id='form3Example3cg'
													className='form-control form-control-lg'
													required
												/>
												 {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
											</div>
										</div>
										{/* <div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
											<label className='form-label' for='form3Example3cg'>
												Confirm	Password <span>*</span>
												</label>
												<input
													type='password'
													{...register('confirmPwd')}
													// onChange={(e) => setPassword(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='Enter Password'
													id='form3Example3cg'
													className={`form-control form-control-lg ${errors.confirmPwd ? 'is-invalid' : ''}`}
													required
												/>
												<div className="invalid-feedback">{errors.confirmPwd?.message}</div>
											</div>
										</div> */}
									</div>
								
									{/* <div class='row align-items-start  mt-4'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
										<div>
        <input type="text" className='form-input-dotted ' class='form-input-dotted' placeholder="Dental Licenese"  readonly="readonly" />
      </div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
										<div>
        <input type="text" className='form-input-dotted ' class='form-input-dotted' placeholder="NPI"  readonly="readonly" />
      </div>
										</div>
									</div>
									<div class='row align-items-start mt-4'>
									<div>
        <input type="text" className='form-input-dotted' class='form-input-dotted' placeholder="Tax ID"  readonly="readonly" />
      </div>
										
									</div> */}
									
									
									</div>
)}
	{ showhide ==='2' && (
										<div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='validationCustom01'>
													First Name<span>*</span>
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
													Last Name <span>*</span>
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
												<label className='form-label' for='form3Example4cdg'>
													Select Gender <span>*</span>
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
										
									</div>
								
									{/* <div class='row align-items-start  mt-4'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
										<div>
        <input type="text" className='form-input-dotted ' class='form-input-dotted' placeholder="Dental Licenese"  readonly="readonly" />
      </div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
										<div>
        <input type="text" className='form-input-dotted ' class='form-input-dotted' placeholder="NPI"  readonly="readonly" />
      </div>
										</div>
									</div>
									<div class='row align-items-start mt-4'>
									<div>
        <input type="text" className='form-input-dotted' class='form-input-dotted' placeholder="Tax ID"  readonly="readonly" />
      </div>
										
									</div> */}
									
									<div class='row align-items-start mt-4'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Country
												</label>
												<select
													onChange={(e) => setCountry(e.target.value)}
													class='form-select form-select-lg'
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
													State or Province
												</label>
												<select
													onChange={(e) => setState(e.target.value)}
													class='form-select form-select-lg'
													aria-label='Default select example'
													placeholder='State or Province'>
													<option value='' disabled selected>
													State or Province
													</option>
													<option value='Centered'>Punjab</option>
													<option value='Shifted Right'>Sindh</option>
													<option value='Shifted Left'>Balochistan</option>
													<option value='Shifted Left'>California</option>
													<option value='Shifted Left'>Arizona</option>
												</select>
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Address <span>*</span>
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
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													City <span>*</span>
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
										
									</div>
									<div class='row align-items-start'>
									<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example4cg'>
													Phone Number <span>*</span>
												</label>
												<Input
													country={'pk'}
													value={phone}
													name='patientnumber'
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
													required
												/>
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													ZIP/Postal code <span>*</span>
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
													required
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
													Password <span>*</span>
												</label>
												<input
													type='password'
													// {...register('password')}
													onChange={(e) => setPassword(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='Enter Password'
													id='form3Example3cg'
													className='form-control form-control-lg'
													required
												/>
												 {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
											</div>
										</div>
										{/* <div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
											<label className='form-label' for='form3Example3cg'>
												Confirm	Password <span>*</span>
												</label>
												<input
													type='password'
													{...register('confirmPwd')}
													// onChange={(e) => setPassword(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='Enter Password'
													id='form3Example3cg'
													className={`form-control form-control-lg ${errors.confirmPwd ? 'is-invalid' : ''}`}
													required
												/>
												<div className="invalid-feedback">{errors.confirmPwd?.message}</div>
											</div>
										</div> */}
									</div>
									</div>
)}
{ showhide ==='3' && (
										<div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='validationCustom01'>
													First Name<span>*</span>
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
													Last Name <span>*</span>
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
												<label className='form-label' for='form3Example4cdg'>
													Select Gender <span>*</span>
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
										
									</div>
								
									{/* <div class='row align-items-start  mt-4'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
										<div>
        <input type="text" className='form-input-dotted ' class='form-input-dotted' placeholder="Dental Licenese"  readonly="readonly" />
      </div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
										<div>
        <input type="text" className='form-input-dotted ' class='form-input-dotted' placeholder="NPI"  readonly="readonly" />
      </div>
										</div>
									</div>
									<div class='row align-items-start mt-4'>
									<div>
        <input type="text" className='form-input-dotted' class='form-input-dotted' placeholder="Tax ID"  readonly="readonly" />
      </div>
										
									</div> */}
									
									<div class='row align-items-start mt-4'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Country
												</label>
												<select
													onChange={(e) => setCountry(e.target.value)}
													class='form-select form-select-lg'
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
													State or Province
												</label>
												<select
													onChange={(e) => setState(e.target.value)}
													class='form-select form-select-lg'
													aria-label='Default select example'
													placeholder='State or Province'>
													<option value='' disabled selected>
													State or Province
													</option>
													<option value='Centered'>Punjab</option>
													<option value='Shifted Right'>Sindh</option>
													<option value='Shifted Left'>Balochistan</option>
													<option value='Shifted Left'>California</option>
													<option value='Shifted Left'>Arizona</option>
												</select>
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Address <span>*</span>
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
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													City <span>*</span>
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
										
									</div>
									<div class='row align-items-start'>
									<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example4cg'>
													Phone Number <span>*</span>
												</label>
												<Input
													country={'pk'}
													value={phone}
													name='patientnumber'
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
													required
												/>
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													ZIP/Postal code <span>*</span>
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
													required
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
													Password <span>*</span>
												</label>
												<input
													type='password'
													// {...register('password')}
													onChange={(e) => setPassword(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='Enter Password'
													id='form3Example3cg'
													className='form-control form-control-lg'
													required
												/>
												 {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
											</div>
										</div>
										{/* <div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
											<label className='form-label' for='form3Example3cg'>
												Confirm	Password <span>*</span>
												</label>
												<input
													type='password'
													{...register('confirmPwd')}
													// onChange={(e) => setPassword(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='Enter Password'
													id='form3Example3cg'
													className={`form-control form-control-lg ${errors.confirmPwd ? 'is-invalid' : ''}`}
													required
												/>
												<div className="invalid-feedback">{errors.confirmPwd?.message}</div>
											</div>
										</div> */}
									</div>
									</div>
)}
{ showhide ==='4' && (
										<div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='validationCustom01'>
													First Name<span>*</span>
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
													Last Name <span>*</span>
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
												<label className='form-label' for='form3Example4cdg'>
													Select Gender <span>*</span>
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
										
									</div>
								
									{/* <div class='row align-items-start  mt-4'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
										<div>
        <input type="text" className='form-input-dotted ' class='form-input-dotted' placeholder="Dental Licenese"  readonly="readonly" />
      </div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
										<div>
        <input type="text" className='form-input-dotted ' class='form-input-dotted' placeholder="NPI"  readonly="readonly" />
      </div>
										</div>
									</div>
									<div class='row align-items-start mt-4'>
									<div>
        <input type="text" className='form-input-dotted' class='form-input-dotted' placeholder="Tax ID"  readonly="readonly" />
      </div>
										
									</div> */}
									
									<div class='row align-items-start mt-4'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Country
												</label>
												<select
													onChange={(e) => setCountry(e.target.value)}
													class='form-select form-select-lg'
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
													State or Province
												</label>
												<select
													onChange={(e) => setState(e.target.value)}
													class='form-select form-select-lg'
													aria-label='Default select example'
													placeholder='State or Province'>
													<option value='' disabled selected>
													State or Province
													</option>
													<option value='Centered'>Punjab</option>
													<option value='Shifted Right'>Sindh</option>
													<option value='Shifted Left'>Balochistan</option>
													<option value='Shifted Left'>California</option>
													<option value='Shifted Left'>Arizona</option>
												</select>
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Address <span>*</span>
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
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													City <span>*</span>
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
										
									</div>
									<div class='row align-items-start'>
									<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example4cg'>
													Phone Number <span>*</span>
												</label>
												<Input
													country={'pk'}
													value={phone}
													name='patientnumber'
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
													required
												/>
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													ZIP/Postal code <span>*</span>
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
													required
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
													Password <span>*</span>
												</label>
												<input
													type='password'
													// {...register('password')}
													onChange={(e) => setPassword(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='Enter Password'
													id='form3Example3cg'
													className='form-control form-control-lg'
													required
												/>
												 {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
											</div>
										</div>
										{/* <div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
											<label className='form-label' for='form3Example3cg'>
												Confirm	Password <span>*</span>
												</label>
												<input
													type='password'
													{...register('confirmPwd')}
													// onChange={(e) => setPassword(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='Enter Password'
													id='form3Example3cg'
													className={`form-control form-control-lg ${errors.confirmPwd ? 'is-invalid' : ''}`}
													required
												/>
												<div className="invalid-feedback">{errors.confirmPwd?.message}</div>
											</div>
										</div> */}
									</div>
									</div>
)}

{ showhide ==='5' && (
										<div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='validationCustom01'>
													First Name<span>*</span>
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
													Last Name <span>*</span>
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
												<label className='form-label' for='form3Example4cdg'>
													Select Gender <span>*</span>
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
										
									</div>
								
									{/* <div class='row align-items-start  mt-4'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
										<div>
        <input type="text" className='form-input-dotted ' class='form-input-dotted' placeholder="Dental Licenese"  readonly="readonly" />
      </div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
										<div>
        <input type="text" className='form-input-dotted ' class='form-input-dotted' placeholder="NPI"  readonly="readonly" />
      </div>
										</div>
									</div>
									<div class='row align-items-start mt-4'>
									<div>
        <input type="text" className='form-input-dotted' class='form-input-dotted' placeholder="Tax ID"  readonly="readonly" />
      </div>
										
									</div> */}
									
									<div class='row align-items-start mt-4'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Country
												</label>
												<select
													onChange={(e) => setCountry(e.target.value)}
													class='form-select form-select-lg'
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
													State or Province
												</label>
												<select
													onChange={(e) => setState(e.target.value)}
													class='form-select form-select-lg'
													aria-label='Default select example'
													placeholder='State or Province'>
													<option value='' disabled selected>
													State or Province
													</option>
													<option value='Centered'>Punjab</option>
													<option value='Shifted Right'>Sindh</option>
													<option value='Shifted Left'>Balochistan</option>
													<option value='Shifted Left'>California</option>
													<option value='Shifted Left'>Arizona</option>
												</select>
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Address <span>*</span>
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
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													City <span>*</span>
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
										
									</div>
									<div class='row align-items-start'>
									<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example4cg'>
													Phone Number <span>*</span>
												</label>
												<Input
													country={'pk'}
													value={phone}
													name='patientnumber'
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
													required
												/>
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													ZIP/Postal code <span>*</span>
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
													required
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
													Password <span>*</span>
												</label>
												<input
													type='password'
													// {...register('password')}
													onChange={(e) => setPassword(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='Enter Password'
													id='form3Example3cg'
													className='form-control form-control-lg'
													required
												/>
												 {/* <div className="invalid-feedback">{errors.password?.message}</div> */}
											</div>
										</div>
										{/* <div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
											<label className='form-label' for='form3Example3cg'>
												Confirm	Password <span>*</span>
												</label>
												<input
													type='password'
													{...register('confirmPwd')}
													// onChange={(e) => setPassword(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='Enter Password'
													id='form3Example3cg'
													className={`form-control form-control-lg ${errors.confirmPwd ? 'is-invalid' : ''}`}
													required
												/>
												<div className="invalid-feedback">{errors.confirmPwd?.message}</div>
											</div>
										</div> */}
									</div>
									</div>
)}


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
											Submit
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
