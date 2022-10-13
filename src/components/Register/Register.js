import React from "react";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function Register() {

    const [clinicname, setClinicName] = useState('');
	const [doctorname, setDoctorName] = useState('');
	const [doctornumber, setDoctorNumber] = useState('');
	const [doctoremail, setDoctorEmail] = useState('');
	const [patienid, setPatientId] = useState('');
	const [patientname, setPatientName] = useState('');
	const [patientnumber, setPatientNumber] = useState('');
	const [patientemail, setPatientEmail] = useState('');
    const [gender, setGender] = useState("");

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
            <Navbar />
            <div className='mask d-flex align-items-center h-100 gradient-custom-3'>
                <div className=' container h-100'>
                    <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div
                            className='col-12 col-sm-6 col-md-9 col-lg-7 col-sm-6 col-xl-6 formwidth'
                            style={{ width: `900px` }}>
                            <div
                                style={{
                                    // margin: `10px`,
                                    backgroundColor: `white`,
                                    borderRadius: `10px`,
                                    padding: `50px`,
                                }}>
                                <h2 class='text-uppercase text-center mb-5'>Case Submission</h2>
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
                                                <label className='form-label' for='form3Example1cg'>
                                                    Doctors Number <span>*</span>
                                                </label>
                                                <input
                                                    type='tel'
                                                    onChange={(e) => setDoctorNumber(e.target.value)}
                                                    // onBlur={formik.handleChange}
                                                    // value={formik.values.doctornumber}
                                                    name='doctornumber'
                                                    id='form3Example1cg'
                                                    className='form-control form-control-lg'
                                                    required
                                                />
                                                {/* <div className="text-danger">
            {formik.errors.doctornumber ? formik.errors.doctornumber : null}
          </div> */}
                                            </div>
                                        </div>
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
                                                <input
                                                    type='text'
                                                    onChange={(e) => setPatientNumber(e.target.value)}
                                                    // onBlur={formik.handleChange}
                                                    // value={formik.values.patientnumber}
                                                    name='patientnumber'
                                                    id='form3Example4cg'
                                                    className='form-control form-control-lg'
                                                    required
                                                />
                                                {/* <div className="text-danger">
            {formik.errors.patientnumber ? formik.errors.patientnumber : null}
          </div> */}
                                            </div>
                                        </div>
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
                                                {/*<label className='form-label' for='form3Example4cdg'>
													Email <span>*</span>
												</label>
												<input
													type='email'
													onChange={(e) => setEmail(e.target.value)}
													//  onBlur={formik.handleChange}
													// value={formik.values.email}
													name='email'
													id='form3Example4cdg'
													className='form-control form-control-lg'
												/>
												 <div className="text-danger">
            {formik.errors.email ? formik.errors.email : null}
          </div> */}
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

                                    <p className='text-center text-muted mt-5 mb-0'>
										Have already an account?{' '}
										<a href='#!' className='fw-bold text-body'>
											<u>Login here</u>
										</a>
									</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;