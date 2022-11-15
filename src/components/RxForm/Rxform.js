import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../RxForm/Rxform.css';
import { useEffect } from 'react';
import '@fontsource/league-spartan'; // Defaults to weight 400.
import '@fontsource/source-sans-pro'; // Defaults to weight 400.
import Input from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getCurrentDate } from '../../class/clsGeneralVariables';


function Rxform() {

	const navigate = useNavigate()

	// Tab Title
	useEffect(() => {
		document.title = 'Aligno-Rx-Form';
		if (!localStorage.getItem('token')) {
			navigate('/Login')
		}
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
	const [archesvalue, setArchesValue] = useState('');
	const [pcop, setPcop] = useState('');
	const [lowermidlinemaintain, setLowerMidlineMaintain] = useState(false);
	const [bridgesimplant, setBridgesImplant] = useState('');
	const [lowermidlineimprove, setLowerMidlineImprove] = useState(false);
	const [lowermidlineideal, setLowerMidlineIdeal] = useState(false);
	const [lowermidline, setLowerMidline] = useState('');
	const [uppermidline, setUpperMidline] = useState('');
	const [mrcir, setMRCIR] = useState(false);
	const [mrcil, setMRCIL] = useState(false);
	const [mrciir, setMRCIIR] = useState(false);
	const [mrciil, setMRCIIL] = useState(false);
	const [mrciiir, setMRCIIIR] = useState(false);
	const [mrciiil, setMRCIIIL] = useState(false);
	const [crcir, setCRCIR] = useState(false);
	const [crcil, setCRCIL] = useState(false);
	const [crciir, setCRCIIR] = useState(false);
	const [crciil, setCRCIIL] = useState(false);
	const [crciiir, setCRCIIIR] = useState(false);
	const [crciiil, setCRCIIIL] = useState(false);
	const [uppermidlinemaintain, setUpperMidlineMaintain] = useState(false);
	const [uppermidlineimprove, setUpperMidlineImprove] = useState(false);
	const [uppermidlineidela, setUpperMidlineIdeal] = useState(false);
	const [upperoverbitemaintain, setOverbiteMaintain] = useState(false);
	const [overbiteimprove, setOverbiteImprove] = useState(false);
	const [overbiteideal, setOverbiteIdeal] = useState(false);
	const [overjetmaintain, setOverjetMaintain] = useState(false);
	const [overjetimprove, setOverjetImprove] = useState(false);
	const [overjetideal, setOverjetIdeal] = useState(false);
	const [molarrelationmaintain, setMolarRelationMaintain] = useState(false);
	const [molarrelationimrpove, setMolarRelationImprove] = useState(false);
	const [molarrelationideal, setMolarRelationIdeal] = useState(false);
	const [caninerelationmaintain, setCanineRelationMaintain] = useState(false);
	const [caninerelationimprove, setCanineRelationImprove] = useState(false);
	const [caninerelationideal, setCanineRelationIdeal] = useState(false);
	const [archformmaintain, setArchFormMaintain] = useState(false);
	const [archformimprove, setArchFormImprove] = useState(false);
	const [archformideal, setArchFormIdeal] = useState(false);
	const [posteriorcrossbitemaintain, setPosteriorCrossbiteMaintain] = useState(false);
	const [posteriorcrossbiteimprove, setPosteriorCrossbiteImprove] = useState(false);
	const [posteriorcrossbiteideal, setPosteriorCrossbiteIdeal] = useState(false);
	const [procline, setProcline] = useState('');
	const [ipr, setIPR] = useState('');
	const [expand, setExpand] = useState('');
	const [engagers, setEngagers] = useState('');
	const [distalize, setDistalize] = useState('');
	const [aeot, setAEOT] = useState('');
	const [etbt, setETBT] = useState('');
	const CaseApproved = false;
	const CaseAlignerSendForManufacturing = false;
	const CaseAlignerManufacturing = false;
	const CaseAlignerManufactured = false;
	const CaseAlignerDispached = false;
	const CaseClosed = false;
	const TotalAligners = 0;
	const CurrentAligner = 0;
	const CreatedDate = getCurrentDate();

	const history = useNavigate();


	async function rxData(event) {
		event.preventDefault();
		const response = await fetch('https://server.aligno.co/api/rxform', {
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
				archesvalue,
				lowermidlinemaintain,
				lowermidlineimprove,
				lowermidlineideal,
				pcop,
				lowermidline,
				bridgesimplant,
				uppermidline,
				mrcir,
				mrcil,
				mrciir,
				mrciil,
				mrciiir,
				mrciiil,
				crcir,
				crcil,
				crciir,
				crciil,
				crciiir,
				crciiil,
				uppermidlinemaintain,
				uppermidlineimprove,
				uppermidlineidela,
				upperoverbitemaintain,
				overbiteimprove,
				overbiteideal,
				overjetmaintain,
				overjetimprove,
				overjetideal,
				molarrelationmaintain,
				molarrelationimrpove,
				molarrelationideal,
				caninerelationmaintain,
				caninerelationimprove,
				caninerelationideal,
				archformmaintain,
				archformimprove,
				archformideal,
				posteriorcrossbitemaintain,
				posteriorcrossbiteimprove,
				posteriorcrossbiteideal,
				procline,
				ipr,
				expand,
				distalize,
				aeot,
				etbt,
				engagers,
				CaseApproved,
				CaseAlignerSendForManufacturing,
				CaseAlignerManufacturing,
				CaseAlignerManufactured,
				CaseAlignerDispached,
				CaseClosed,
				TotalAligners,
				CurrentAligner,
				CreatedDate,
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
							style={{ width: `900px` }}>
							<div
								style={{
									// margin: `10px`,
									backgroundColor: `white`,
									borderRadius: `10px`,
									padding: `50px`,
								}}>
								<h2 class='text-uppercase text-center mb-5'>Case Submission</h2>
								<form onSubmit={rxData}>

									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='validationCustom01'>
													Name of Clinic <span className='required'>*</span>
												</label>
												<input
													id='userNameInput'
													type='text'
													onChange={(e) => setClinicName(e.target.value)}
													value={clinicname}
													placeholder='Smile Hub'

													className='form-control form-control-lg'
													required
												/>

											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													Name of Doctor <span className='required'>*</span>
												</label>
												<input
													type='text'
													onChange={(e) => setDoctorName(e.target.value)}
													name='doctorname'
													placeholder='Dr Ali'
													id='form3Example3cg'
													className='form-control form-control-lg'
													required
												/>
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example4cg'>
													Doctor's Phone Number{' '}
													<span className='required'>*</span>
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

										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													Doctor's Email <span className='required'>*</span>
												</label>
												<input
													type='email'
													onChange={(e) => setDoctorEmail(e.target.value)}
													name='doctoremail'
													placeholder='Enter Your Email'
													id='form3Example3cg'
													className='form-control form-control-lg'
													required
												/>
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Patient's ID <span className='required'>*</span>
												</label>
												<input
													type='text'
													onChange={(e) => setPatientId(e.target.value)}
													name='patientid'
													placeholder='Generated by the Introral Scanner'
													id='form3Example1cg'
													className='form-control form-control-lg'
													required />
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example3cg'>
													Patients Name <span className='required'>*</span>
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
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example4cg'>
													Patient's Phone Number{' '}
													<span className='required'>*</span>
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
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example4cdg'>
													Patient's Email <span className='required'>*</span>
												</label>
												<input
													type='email'
													onChange={(e) => setPatientEmail(e.target.value)}

													name='patientemail'
													placeholder='ali@gmail.com'
													id='form3Example4cdg'
													className='form-control form-control-lg'
													required
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
											</div>
										</div>
									</div>

									<h2 class='text-uppercase text-center mb-5'>
										RX FORM - Instructions by Doctor for Treatment Planning
									</h2>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<label className='form-label' for='form3Example1cg'>
												Primary Concern of the Patient
											</label>
											<div className='form-outline mb-4'>
												<input
													type='text'
													id='form3Example1cg'
													onChange={(e) => setPcop(e.target.value)}
													className='form-control form-control-lg'
													placeholder='Crowding in lower arch/Diastema'
												/>
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Treatment of Arches
												</label>

												<select
													onChange={(e) => setArchesValue(e.target.value)}
													class='form-select form-select-lg'
													aria-label='Default select example'
													placeholder='abc'>
													<option value='' disabled selected>
														Treatment of Arches
													</option>
													<option value='Both Arches'>Both Arches</option>
													<option value='Upper Only'>Upper Only</option>
													<option value='Lower Only'>Lower Only</option>
												</select>
											</div>
										</div>
									</div>
									{/* space line */}
									<div class='field field-wrap-elem-117'>
										<div name='elem-117'></div>
										<hr></hr>
									</div>

									<h3 class='text-uppercase text-center mb-5'>
										Existing Condition of Patient
									</h3>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Lower Midline
												</label>
												<select
													onChange={(e) => setLowerMidline(e.target.value)}
													class='form-select form-select-lg'
													aria-label='Default select example'
													placeholder='abc'>
													<option value='' disabled selected>
														Lower Midline
													</option>
													<option value='Centered'>Centered</option>
													<option value='Shifted Right'>Shifted Right</option>
													<option value='Shifted Left'>Shifted Left</option>
												</select>
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Upper Midline
												</label>
												<select
													onChange={(e) => setUpperMidline(e.target.value)}
													class='form-select form-select-lg'
													aria-label='Default select example'
													placeholder='abc'>
													<option value='' disabled selected>
														Upper Midline
													</option>
													<option value='Centered'>Centered</option>
													<option value='Shifted Right'>Shifted Right</option>
													<option value='Shifted Left'>Shifted Left</option>
												</select>
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col'>
											<label
												className='form-label font-weight-bold'
												for='form3Example1cg'>
												Molar Relation
											</label>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setMRCIR(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Class I Right</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setMRCIL(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Class I Left</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setMRCIIR(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Class II Right</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setMRCIIL(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Class II Left</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setMRCIIIR(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Class III Right</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setMRCIIIL(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Class III Left</label>
											</div>
										</div>

										<div class='col'>
											<label
												className='form-label font-weight-bold'
												for='form3Example1cg'>
												Canine Relation
											</label>

											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setCRCIR(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Class I Right</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setCRCIL(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Class I Left</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setCRCIIR(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Class II Right</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setCRCIIL(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Class II Left</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setCRCIIIR(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Class III Right</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setCRCIIIL(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Class III Left</label>
											</div>
										</div>
									</div>
									<div class='field field-wrap-elem-117'>
										<div name='elem-117'></div>
										<hr></hr>
									</div>

									<div class='form-outline mb-4 mt-4'>
										<label class='form-label' for='form3Example1cg'>
											BRIDGES, IMPLANTS ETC
										</label>
										<input
											onChange={(e) => setBridgesImplant(e.target.value)}
											type='text'
											id='form3Example1cg'
											class='form-control form-control-lg'
											placeholder='Please mention which teeth have bridges,implants etc so that are not moved in'
										/>
									</div>
									<div class='field field-wrap-elem-117'>
										<div name='elem-117'></div>
										<hr></hr>
									</div>

									<div class='row align-items-center'>
										<h5 class='text-uppercase  mb-3 '>Treatment Goals</h5>
										<div class='col'>
											<label
												className='form-label font-weight-bold'
												for='form3Example1cg'>
												Lower Midline
											</label>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													type='checkbox'
													onChange={(e) =>
														setLowerMidlineMaintain(e.target.value)
													}
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Maintain</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													type='checkbox'
													onChange={(e) =>
														setLowerMidlineImprove(e.target.value)
													}
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Improve</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													type='checkbox'
													onChange={(e) => setLowerMidlineIdeal(e.target.value)}
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Ideal</label>
											</div>
										</div>

										<div class='col'>
											<label
												className='form-label font-weight-bold'
												for='form3Example1cg'>
												Upper Midline
											</label>

											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) =>
														setUpperMidlineMaintain(e.target.value)
													}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Maintain</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) =>
														setUpperMidlineImprove(e.target.value)
													}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Improve</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setUpperMidlineIdeal(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Ideal</label>
											</div>
										</div>
									</div>
									<div class='row align-items-center mt-4'>
										<div class='col'>
											<label
												className='form-label font-weight-bold'
												for='form3Example1cg'>
												Overbite
											</label>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setOverbiteMaintain(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Maintain</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setOverbiteImprove(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Improve</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setOverbiteIdeal(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Ideal</label>
											</div>
										</div>

										<div class='col'>
											<label
												className='form-label font-weight-bold'
												for='form3Example1cg'>
												Overjet
											</label>

											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setOverjetMaintain(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Maintain</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setOverjetImprove(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Improve</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setOverjetIdeal(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Ideal</label>
											</div>
										</div>
									</div>
									<div class='row align-items-center mt-4'>
										<div class='col'>
											<label
												className='form-label font-weight-bold'
												for='form3Example1cg'>
												Molar Relation
											</label>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) =>
														setMolarRelationMaintain(e.target.value)
													}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Maintain</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) =>
														setMolarRelationImprove(e.target.value)
													}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Improve</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) =>
														setMolarRelationIdeal(e.target.value)
													}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Ideal</label>
											</div>
										</div>

										<div class='col'>
											<label
												className='form-label font-weight-bold'
												for='form3Example1cg'>
												Canine Relation
											</label>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) =>
														setCanineRelationMaintain(e.target.value)
													}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Maintain</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) =>
														setCanineRelationImprove(e.target.value)
													}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Improve</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) =>
														setCanineRelationIdeal(e.target.value)
													}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Ideal</label>
											</div>
										</div>
									</div>
									<div class='row align-items-center mt-4 mb-4'>
										<div class='col'>
											<label
												className='form-label font-weight-bold'
												for='form3Example1cg'>
												Arch Form
											</label>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setArchFormMaintain(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Maintain</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setArchFormImprove(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Improve</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) => setArchFormIdeal(e.target.value)}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Ideal</label>
											</div>
										</div>

										<div class='col'>
											<label
												className='form-label font-weight-bold'
												for='form3Example1cg'>
												Posterior Crossbite
											</label>

											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) =>
														setPosteriorCrossbiteMaintain(e.target.value)
													}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Maintain</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) =>
														setPosteriorCrossbiteImprove(e.target.value)
													}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Improve</label>
											</div>
											<div class='form-check mt-3'>
												<input
													class='form-check-input'
													onChange={(e) =>
														setPosteriorCrossbiteIdeal(e.target.value)
													}
													type='checkbox'
													id='flexCheckDefault'
												/>
												<label class='form-check-label'>Ideal</label>
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Procline
												</label>
												<select
													class='form-select  form-select-lg'
													onChange={(e) => setProcline(e.target.value)}
													aria-label='Default select example'
													placeholder='abc'>
													<option value='' disabled selected>
														Procline
													</option>
													<option value='Yes'>Yes</option>
													<option value='No'>No</option>
													<option value='Only if needed'>Only if needed</option>
												</select>
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													IPR
												</label>
												<select
													class='form-select form-select-lg'
													onChange={(e) => setIPR(e.target.value)}
													aria-label='Default select example'
													placeholder='abc'>
													<option value='' disabled selected>
														IPR
													</option>
													<option value='Yes'>Yes </option>
													<option value='No'>No</option>
													<option value='Only if needed'>Only if needed</option>
												</select>
											</div>
										</div>
									</div>
									<div class='row align-items-start'>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Expand
												</label>
												<select
													class='form-select form-select-lg'
													onChange={(e) => setExpand(e.target.value)}
													aria-label='Default select example'
													placeholder='abc'>
													<option value='' disabled selected>
														Expand
													</option>
													<option value='Yes'>Yes</option>
													<option value='No'>No</option>
													<option value='Only if needed'>Only if needed</option>
												</select>
											</div>
										</div>
										<div class='col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6'>
											<div className='form-outline mb-4'>
												<label className='form-label' for='form3Example1cg'>
													Engagers
												</label>
												<select
													class='form-select form-select-lg'
													onChange={(e) => setEngagers(e.target.value)}
													aria-label='Default select example'
													placeholder='abc'>
													<option value='' disabled selected>
														Engagers
													</option>
													<option value='Yes'>Yes </option>
													<option value='No'>No</option>
													<option value='Only if needed'>Only if needed</option>
												</select>
											</div>
										</div>
									</div>
									<div class='form-outline mb-4 mt-4'>
										<label className='form-label' for='form3Example1cg'>
											Distalize
										</label>
										<select
											class='form-select form-select-lg'
											onChange={(e) => setDistalize(e.target.value)}
											aria-label='Default select example'
											placeholder='abc'>
											<option value='' disabled selected>
												Engagers
											</option>
											<option value='Yes'>Yes </option>
											<option value='No'>No</option>
											<option value='Only if needed'>Only if needed</option>
										</select>
									</div>
									<div class='form-outline mb-4 mt-4'>
										<label class='form-label' for='form3Example1cg'>
											Avoid Engagers on these teeth(facial restorations, etc)
										</label>
										<input
											type='text'
											id='form3Example1cg'
											onChange={(e) => setAEOT(e.target.value)}
											class='form-control form-control-lg'
										/>
									</div>
									<div class='form-outline mb-4 mt-4'>
										<label class='form-label' for='form3Example1cg'>
											Extract these teeth before Treatment
										</label>
										<input
											type='text'
											id='form3Example1cg'
											onChange={(e) => setETBT(e.target.value)}
											class='form-control form-control-lg'
										/>
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


export default Rxform;
