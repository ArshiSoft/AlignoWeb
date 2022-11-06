 /* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Register/Register.css';
import { useEffect } from 'react';
import '@fontsource/league-spartan'; // Defaults to weight 400.
import '@fontsource/source-sans-pro'; // Defaults to weight 400.

import Input from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



function Register() {
	// Tab Title
	useEffect(() => {
		document.title = 'Aligno-Register';
	}, []);
	const [clinicname, setClinicName] = useState('');
	const [doctorname, setDoctorName] = useState('');
	const [doctornumber, setDoctorNumber] = useState('');
	const [doctorNumberInputValue, setdoctorNumberInputValue] = useState('');
	const [doctoremail, setDoctorEmail] = useState('');
	const [patienid, setPatientId] = useState('');
	const [patientname, setPatientName] = useState('');
	const [patientnumber, setPatientNumber] = useState('');
	const [patientNumberInputValue, setpatientNumberInputValue] = useState('');
	const [patientemail, setPatientEmail] = useState('');
	const [gender, setGender] = useState('');
	const [password, setPassword] = useState('')
	
	const history = useNavigate();



	async function regData(event) {
		event.preventDefault();
		const response = await fetch('https://server.aligno.co/api/regform', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				clinicname,
				doctorname,
				doctornumber,
				doctoremail,
				patienid,
				patientname,
				patientnumber,
				patientemail,
				gender,
				password,
				
			}),
		});

		const data = await response.json();
		if (data.status === 'ok') {
			history('/thanks');
		}
		console.log(data);
	}
	return (
		<>
			<div className='mask d-flex align-items-center h-100 gradient-custom-3'>
				<div className=' container h-100'>
					<div className='row d-flex justify-content-center align-items-center h-100'>
						<div
							className='col-12 col-sm-6 col-md-9 col-lg-7 col-sm-6 col-xl-6 formwidth'
							style={{ width: `900px` ,height : `920px`}}>
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
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='validationCustom01'>
													Name of Clinic <span>*</span>
												</label>

												<input
													id='userNameInput'
													type='text'
													onChange={(e) => setClinicName(e.target.value)}
													value={clinicname}
													placeholder='Smile Hub'
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
													Name of Doctor <span>*</span>
												</label>
												<input
													type='text'
													onChange={(e) => setDoctorName(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.doctorname}
													name='doctorname'
													placeholder='Dr Ali'
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
												<label className='form-label' for='form3Example4cg'>
													Doctor's Phone Number <span>*</span>
												</label>
												<Input
													country={'pk'}
													value={doctornumber}
													name='doctornumber'
													onChange={
														((e) => {
															setdoctorNumberInputValue(e.target.value);
														},
														setDoctorNumber)
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
										{/* <div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Doctors Number <span>*</span>
												</label>
												<input
													type='tel'
													onChange={(e) => setDoctorNumber(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.doctornumber}
													name='doctornumber'
													placeholder='Enter Phone Number'
													id='form3Example1cg'
													className='form-control form-control-lg'
													required
												/>
												 <div className="text-danger">
            {formik.errors.doctornumber ? formik.errors.doctornumber : null}
          </div> 
											</div>
										</div> */}
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													Doctor's Email <span>*</span>
												</label>
												<input
													type='email'
													onChange={(e) => setDoctorEmail(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.doctoremail}
													name='doctoremail'
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
												<label className='form-label' for='form3Example1cg'>
													Patient's ID <span>*</span>
												</label>
												<input
													type='text'
													onChange={(e) => setPatientId(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.patientid}
													name='patientid'
													placeholder='Generated by the Introral Scanner'
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
													Patients Name <span>*</span>
												</label>
												<input
													type='text'
													onChange={(e) => setPatientName(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='Ali'
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
												<label className='form-label' for='form3Example4cg'>
													Patient's Phone Number <span>*</span>
												</label>
												<Input
													country={'pk'}
													value={patientnumber}
													name='patientnumber'
													onChange={
														((e) => {
															setpatientNumberInputValue(e.target.value);
														},
														setPatientNumber)
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
										{/* <div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example4cg'>
													Patient's Phone Number <span>*</span>
												</label>
												<input
													type='text'
													onChange={(e) => setPatientNumber(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.patientnumber}
													name='patientnumber'
													placeholder='Enter Phone Number'
													id='form3Example4cg'
													className='form-control form-control-lg'
													required
												/>
												 <div className="text-danger">
            {formik.errors.patientnumber ? formik.errors.patientnumber : null}
          </div> 
											</div>
										</div> */}
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example4cdg'>
													Patient's Email <span>*</span>
												</label>
												<input
													type='email'
													onChange={(e) => setPatientEmail(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.patientemail}
													name='patientemail'
													placeholder='ali@gmail.com'
													id='form3Example4cdg'
													className='form-control form-control-lg'
													required
												/>
												{/* <div className="text-danger">
            {formik.errors.patientemail ? formik.errors.patientemail : null}
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
													Password <span>*</span>
												</label>
												<input
													type='password'
													onChange={(e) => setPassword(e.target.value)}
													// onBlur={formik.handleChange}
													// value={formik.values.nameofpatient}
													name='nameofpatient'
													placeholder='Enter Password'
													id='form3Example3cg'
													className='form-control form-control-lg'
													required
												/>
											</div>
										</div>
									</div>

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
