import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../RxForm/Rxform.css";
import { useEffect } from "react";
import "@fontsource/league-spartan"; // Defaults to weight 400.
import "@fontsource/source-sans-pro"; // Defaults to weight 400.
import Input2 from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { getCurrentDate } from "../../class/clsGeneralVariables";
import { Checkbox, Layout, Menu, Select } from "antd";
import Header from "../Dashboard/Modules/Header/Header";
import AsideMenu from "../Dashboard/Modules/Aside/AsideMenu";
import Footer from "../Dashboard/Modules/Footer/Footer";
import {
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Popconfirm,
  Space,
} from "antd";
import { Typography } from 'antd';
const { Title } = Typography;
const { Content } = Layout;

function Rxform() {
  const navigate = useNavigate();
  const { TextArea } = Input;
  // Tab Title
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login");
    }
    document.title = "Aligno-Rx-Form";
  }, []);
  const [clinicname, setClinicName] = useState("");
  const [doctorname, setDoctorName] = useState("");
  const [doctornumber, setDoctorNumber] = useState("");
  const [doctorNumberInputValue, setdoctorNumberInputValue] = useState("");
  const [doctoremail, setDoctorEmail] = useState("");
  const [patienid, setPatientId] = useState("");
  const [patientname, setPatientName] = useState("");
  const [patientnumber, setPatientNumber] = useState("");
  const [patientNumberInputValue, setpatientNumberInputValue] = useState("");
  const [patientemail, setPatientEmail] = useState("");
  const [gender, setGender] = useState("");
  const [archesvalue, setArchesValue] = useState("");
  const [pcop, setPcop] = useState("");
  const [lowermidlinemaintain, setLowerMidlineMaintain] = useState(false);
  const [bridgesimplant, setBridgesImplant] = useState("");
  const [lowermidlineimprove, setLowerMidlineImprove] = useState(false);
  const [lowermidlineideal, setLowerMidlineIdeal] = useState(false);
  const [lowermidline, setLowerMidline] = useState("");
  const [uppermidline, setUpperMidline] = useState("");
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
  const [posteriorcrossbitemaintain, setPosteriorCrossbiteMaintain] =
    useState(false);
  const [posteriorcrossbiteimprove, setPosteriorCrossbiteImprove] =
    useState(false);
  const [posteriorcrossbiteideal, setPosteriorCrossbiteIdeal] = useState(false);
  const [procline, setProcline] = useState("");
  const [ipr, setIPR] = useState("");
  const [expand, setExpand] = useState("");
  const [engagers, setEngagers] = useState("");
  const [distalize, setDistalize] = useState("");
  const [aeot, setAEOT] = useState("");
  const [etbt, setETBT] = useState("");
  const [DoctorNotes, setDoctorNotes] = useState("");
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
    const response = await fetch("https://server.aligno.co/api/rxform", {
      //   const response = await fetch('http://localhost:1337/api/rxform', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        DoctorNotes,
      }),
    });

    const data = await response.json();
    if (data.status === "ok") {
      history("/thanks");
    }
    console.log(data);
  }
  return (
    <>
      <Layout>
        <AsideMenu />
        <Layout>
          <Header />
          <Content>
            {/* <Form> */}
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
              <div className=" container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div
                    className="col-12 col-sm-6 col-md-9 col-lg-7 col-sm-6 col-xl-6 formwidth"
                    style={{ width: `900px` }}>
                    <div
                      style={{
                        // margin: `10px`,
                        backgroundColor: `white`,
                        borderRadius: `10px`,
                        padding: `50px`,
                      }}>
                        <Title
                        style={{textAlign:`center`,marginBottom:`15px`}}
                        level={2}>CASE SUBMISSION</Title>
                      {/* <h2 class="text-uppercase text-center mb-5">
                        Case Submission
                      </h2> */}
                      <form onSubmit={rxData}>
                        <div class="row align-items-start">
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <Form.Item
                                name="title"
                                label="Name of Clinic"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input the Clinic Name!",
                                  },
                                ]}>
                                <Input
                                  style={{ width: `400px` }}
                                  onChange={(e) =>
                                    setClinicName(e.target.value)
                                  }
                                  value={clinicname}
                                  placeholder="Clinic Name"
                                  required
                                />
                              </Form.Item>
                              {/* <label
                                className="form-label"
                                for="validationCustom01">
                                Name of Clinic{" "}
                                <span className="required">*</span>
                              </label> */}
                              {/* <input
                                id="userNameInput"
                                type="text"
                                onChange={(e) => setClinicName(e.target.value)}
                                value={clinicname}
                                placeholder="Smile Hub"
                                className="form-control form-control-lg"
                                required
                              /> */}
                            </div>
                          </div>
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <Form.Item
                                name="title"
                                label="Name of Doctor"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input the Clinic Name!",
                                  },
                                ]}>
                                <Input
                                  style={{ width: `400px` }}
                                  onChange={(e) =>
                                    setDoctorName(e.target.value)
                                  }
                                  name="doctorname"
                                  placeholder="Dr Ali"
                                  required
                                />
                              </Form.Item>
                              {/* <label
                                className="form-label"
                                for="form3Example3cg">
                                Name of Doctor{" "}
                                <span className="required">*</span>
                              </label> */}
                              {/* <input
                                type="text"
                                onChange={(e) => setDoctorName(e.target.value)}
                                name="doctorname"
                                placeholder="Dr Ali"
                                id="form3Example3cg"
                                className="form-control form-control-lg"
                                required
                              /> */}
                            </div>
                          </div>
                        </div>
                        <div class="row align-items-start">
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <Form.Item
                                name="title"
                                label="Doctor's Phone Number"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input the Clinic Name!",
                                  },
                                ]}>
                                {/* <Input
                                  style={{ width: `400px` }}
                                  onChange={(e) => setDoctorName(e.target.value)}
                                  name="doctorname"
                                  placeholder="Dr Ali"
                                required
                                /> */}

                                {/* <label
                                className="form-label"
                                for="form3Example4cg">
                                Doctor's Phone Number{" "}
                                <span className="required">*</span>
                              </label> */}
                                <Input2
                                  country={"pk"}
                                  value={doctornumber}
                                  name="doctornumber"
                                  onChange={
                                    ((e) => {
                                      setdoctorNumberInputValue(e.target.value);
                                    },
                                    setDoctorNumber)
                                  }
                                  inputStyle={{
                                    width: "400px",
                                    minHeight: "calc(1.5em)",
                                    fontSize: "1rem",
                                    // borderRadius: ".5rem",
                                  }}
                                  required
                                />
                              </Form.Item>
                            </div>
                          </div>

                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <Form.Item
                                name="title"
                                label=" Doctor's Email"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input the Clinic Name!",
                                  },
                                ]}>
                                <Input
                                  style={{ width: `400px` }}
                                  type="email"
                                  onChange={(e) =>
                                    setDoctorEmail(e.target.value)
                                  }
                                  name="doctoremail"
                                  placeholder="Enter Your Email"
                                  required
                                />
                              </Form.Item>
                              {/* <label
                                className="form-label"
                                for="form3Example3cg">
                                Doctor's Email{" "}
                                <span className="required">*</span>
                              </label> */}
                              {/* <input
                                type="email"
                                onChange={(e) => setDoctorEmail(e.target.value)}
                                name="doctoremail"
                                placeholder="Enter Your Email"
                                id="form3Example3cg"
                                className="form-control form-control-lg"
                                required
                              /> */}
                            </div>
                          </div>
                        </div>
                        <div class="row align-items-start">
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <Form.Item
                                name="title"
                                label="  Patient's ID"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input the Clinic Name!",
                                  },
                                ]}>
                                <Input
                                  style={{ width: `400px` }}
                                  type="text"
                                  onChange={(e) => setPatientId(e.target.value)}
                                  name="patientid"
                                  placeholder="Generated by the Introral Scanner"
                                  required
                                />
                              </Form.Item>
                              {/* <label
                                className="form-label"
                                for="form3Example1cg">
                                Patient's ID <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                onChange={(e) => setPatientId(e.target.value)}
                                name="patientid"
                                placeholder="Generated by the Introral Scanner"
                                id="form3Example1cg"
                                className="form-control form-control-lg"
                                required
                              /> */}
                            </div>
                          </div>
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <Form.Item
                                name="title"
                                label="Patients Name"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input the Clinic Name!",
                                  },
                                ]}>
                                <Input
                                  style={{ width: `400px` }}
                                  type="text"
                                  onChange={(e) =>
                                    setPatientName(e.target.value)
                                  }
                                  // onBlur={formik.handleChange}
                                  // value={formik.values.nameofpatient}
                                  name="nameofpatient"
                                  placeholder="Ali"
                                  required
                                />
                              </Form.Item>
                              {/* <label
                                className="form-label"
                                for="form3Example3cg">
                                Patients Name{" "}
                                <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                onChange={(e) => setPatientName(e.target.value)}
                                // onBlur={formik.handleChange}
                                // value={formik.values.nameofpatient}
                                name="nameofpatient"
                                placeholder="Ali"
                                id="form3Example3cg"
                                className="form-control form-control-lg"
                                required
                              /> */}
                            </div>
                          </div>
                        </div>
                        <div class="row align-items-start">
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <Form.Item
                                name="title"
                                label="Patient's Phone Number"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input the Clinic Name!",
                                  },
                                ]}>
                                <Input2
                                  country={"pk"}
                                  value={patientnumber}
                                  name="patientnumber"
                                  onChange={
                                    ((e) => {
                                      setpatientNumberInputValue(
                                        e.target.value
                                      );
                                    },
                                    setPatientNumber)
                                  }
                                  inputStyle={{
                                    width: "400px",
                                    minHeight: "calc(1.5em)",
                                    fontSize: "1rem",
                                    // borderRadius: ".5rem",
                                  }}
                                  required
                                />
                              </Form.Item>
                            </div>
                          </div>
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <Form.Item
                                name="title"
                                label=" Patient's Email"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input the Clinic Name!",
                                  },
                                ]}>
                                <Input
                                  style={{ width: `400px` }}
                                  type="email"
                                  onChange={(e) =>
                                    setPatientEmail(e.target.value)
                                  }
                                  name="patientemail"
                                  placeholder="ali@gmail.com"
                                  required
                                />
                              </Form.Item>
                              {/* <label
                                className="form-label"
                                for="form3Example4cdg">
                                Patient's Email{" "}
                                <span className="required">*</span>
                              </label>
                              <input
                                type="email"
                                onChange={(e) =>
                                  setPatientEmail(e.target.value)
                                }
                                name="patientemail"
                                placeholder="ali@gmail.com"
                                id="form3Example4cdg"
                                className="form-control form-control-lg"
                                required
                              /> */}
                            </div>
                          </div>
                        </div>
                        <div class="row align-items-start">
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <Form.Item
                                name="title"
                                label="Select Gender"
                                rules={[
                                  {
                                    required: true,
                                    message: "Please input the Clinic Name!",
                                  },
                                ]}>
                                {/* <label
                                className="form-label"
                                for="form3Example4cdg">
                                Select Gender{" "}
                                <span className="required">*</span>
                              </label> */}
                                <Select
                                 style={{ width: `400px` }}
                                  // className="form-select form-select-lg"
                                  required
                                  onChange={(e) => setGender(e.target.value)}
                                  aria-label="Default select example"
                                  
                                  options=
                                  {[
                                    {
                                      label: "Gender",
                                      options: [
                                        {
                                          label: "Male",
                                          value: "Male",
                                        },
                                        {
                                          label: "Female",
                                          value: "Female",
                                        },
                                      ],
                                    },
                                   
                                  ]}
                                  >
                                  {/* <Option value="" disabled selected>
                                    Gender
                                  </Option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option> */}
                                 
                                </Select>
                              </Form.Item>
                            </div>
                          </div>
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4"></div>
                          </div>
                        </div>
                        
                        <Title
                        style={{textAlign:`center`,marginBottom:`15px`}}
                        level={2}>RX FORM - INSTRUCTIONS BY DOCTOR FOR TREATMENT PLANNING </Title>
                        {/* <h2 class="text-uppercase text-center mb-5">
                          RX FORM - Instructions by Doctor for Treatment
                          Planning
                        </h2> */}
                        <div class="row align-items-start">
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                          <Form.Item
                                name="title"
                                label="Primary Concern of the Patient"
                                rules={[
                                  {
                                    // required: true,
                                    message: "Please input the Clinic Name!",
                                  },
                                ]}>
                          {/* <Title level={5}>Primary Concern of the Patient</Title> */}
                            {/* <label className="form-label" for="form3Example1cg">
                              Primary Concern of the Patient
                            </label> */}
                           
                            <div className="form-outline mb-4">
                            <Input
                                  style={{ width: `400px` }}
                                  type="text"
                                  onChange={(e) => setPcop(e.target.value)}
                                  // onBlur={formik.handleChange}
                                  // value={formik.values.nameofpatient}
                                  name="nameofpatient"
                                  placeholder="Crowding in lower arch/Diastema"
                                  required
                                />
                              {/* <Input
                                type="text"
                                id="form3Example1cg"
                                onChange={(e) => setPcop(e.target.value)}
                                className="form-control form-control-lg"
                                placeholder="Crowding in lower arch/Diastema"
                              /> */}
                           
                            </div>
                            </Form.Item>
                          </div>
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                            <Form.Item
                                name="title"
                                label=" Treatment of Arches"
                                rules={[
                                  {
                                    // required: true,
                                    message: "Please input the Clinic Name!",
                                  },
                                ]}>
                               
                                <Select
                                 style={{ width: `400px` }}
                                  // className="form-select form-select-lg"
                                  required
                                  onChange={(e) => setArchesValue(e.target.value)}
                                  aria-label="Default select example"
                                  
                                  options=
                                  {[
                                    {
                                      label: "Treatment of Arches",
                                      options: [
                                        {
                                          label: "Both Arches",
                                          value: "Both Arches",
                                        },
                                        {
                                          label: "Upper Only",
                                          value: "Upper Only",
                                        },
                                        {
                                          label: "Lower Only",
                                          value: "Lower Only",
                                        },
                                      ],
                                    },
                                   
                                  ]}
                                  >
                                
                                 
                                </Select>
                              </Form.Item>
                              
                              {/* <label
                                className="form-label"
                                for="form3Example1cg">
                                Treatment of Arches
                              </label> */}

                              {/* <select
                                onChange={(e) => setArchesValue(e.target.value)}
                                class="form-select form-select-lg"
                                aria-label="Default select example"
                                placeholder="abc">
                                <option value="" disabled selected>
                                  Treatment of Arches
                                </option>
                                <option value="Both Arches">Both Arches</option>
                                <option value="Upper Only">Upper Only</option>
                                <option value="Lower Only">Lower Only</option>
                              </select> */}
                            </div>
                          </div>
                        </div>
                        {/* space line */}
                        <div class="field field-wrap-elem-117">
                          <div name="elem-117"></div>
                          <hr></hr>
                        </div>
                        <Title
                        style={{textAlign:`center`,marginBottom:`15px`}}
                        level={2}>EXISTING CONDITION OF PATIENT </Title>
                        {/* <h3 class="text-uppercase text-center mb-5">
                          Existing Condition of Patient
                        </h3> */}
                        <div class="row align-items-start">
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                            <Form.Item
                                name="title"
                                label=" Lower Midline"
                                rules={[
                                  {
                                    // required: true,
                                    message: "Please input the Clinic Name!",
                                  },
                                ]}>
                               
                                <Select
                                 style={{ width: `400px` }}
                                  // className="form-select form-select-lg"
                                  required
                                  onChange={(e) =>
                                    setLowerMidline(e.target.value)
                                  }
                                  aria-label="Default select example"
                                  
                                  options=
                                  {[
                                    {
                                      label: "Lower Midline",
                                      options: [
                                        {
                                          label: "Centered",
                                          value: "Centered",
                                        },
                                        {
                                          label: "Shifted Right",
                                          value: "Shifted Right",
                                        },
                                        {
                                          label: "Shifted Left",
                                          value: "Shifted Left",
                                        },
                                      ],
                                    },
                                   
                                  ]}
                                  >
                                
                                 
                                </Select>
                              </Form.Item>
                              {/* <label
                                className="form-label"
                                for="form3Example1cg">
                                Lower Midline
                              </label>
                              <select
                                onChange={(e) =>
                                  setLowerMidline(e.target.value)
                                }
                                class="form-select form-select-lg"
                                aria-label="Default select example"
                                placeholder="abc">
                                <option value="" disabled selected>
                                  Lower Midline
                                </option>
                                <option value="Centered">Centered</option>
                                <option value="Shifted Right">
                                  Shifted Right
                                </option>
                                <option value="Shifted Left">
                                  Shifted Left
                                </option>
                              </select> */}
                            </div>
                          </div>
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                            <Form.Item
                                name="title"
                                label="Upper Midline"
                                rules={[
                                  {
                                    // required: true,
                                    message: "Please input the Clinic Name!",
                                  },
                                ]}>
                               
                                <Select
                                 style={{ width: `400px` }}
                                  // className="form-select form-select-lg"
                                  required
                                  onChange={(e) =>
                                    setUpperMidline(e.target.value)
                                  }
                                  aria-label="Default select example"
                                  
                                  options=
                                  {[
                                    {
                                      label: "Upper Midline",
                                      options: [
                                        {
                                          label: "Centered",
                                          value: "Centered",
                                        },
                                        {
                                          label: "Shifted Right",
                                          value: "Shifted Right",
                                        },
                                        {
                                          label: "Shifted Left",
                                          value: "Shifted Left",
                                        },
                                      ],
                                    },
                                   
                                  ]}
                                  >
                                
                                 
                                </Select>
                              </Form.Item>
                              {/* <label
                                className="form-label"
                                for="form3Example1cg">
                                Upper Midline
                              </label>
                              <select
                                onChange={(e) =>
                                  setUpperMidline(e.target.value)
                                }
                                class="form-select form-select-lg"
                                aria-label="Default select example"
                                placeholder="abc">
                                <option value="" disabled selected>
                                  Upper Midline
                                </option>
                                <option value="Centered">Centered</option>
                                <option value="Shifted Right">
                                  Shifted Right
                                </option>
                                <option value="Shifted Left">
                                  Shifted Left
                                </option>
                              </select> */}
                            </div>
                          </div>
                        </div>
                        <div class="row align-items-start">
                          <div class="col">
                            {/* <label
                              className="form-label font-weight-bold"
                              for="form3Example1cg">
                              Molar Relation
                            </label> */}
                            <Title level={5}> Molar Relation</Title>
                            <div class="form-check mt-3">
                            <Checkbox
                            style={{marginTop:`5px`,marginLeft :`0px`}}
                            onChange={(e) => setMRCIR(e.target.value)}
                            >
                              {/* <input
                                class="form-check-input"
                                onChange={(e) => setMRCIR(e.target.value)}
                                type="checkbox"
                                id="flexCheckDefault"
                              /> */}
                               <Form.Item
                                name="title"
                                label="Class I Right"></Form.Item></Checkbox>
                             
                              {/* <label class="form-check-label">
                                Class I Right
                              </label> */}
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) => setMRCIL(e.target.value)}
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">
                                Class I Left
                              </label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) => setMRCIIR(e.target.value)}
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">
                                Class II Right
                              </label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) => setMRCIIL(e.target.value)}
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">
                                Class II Left
                              </label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) => setMRCIIIR(e.target.value)}
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">
                                Class III Right
                              </label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) => setMRCIIIL(e.target.value)}
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">
                                Class III Left
                              </label>
                            </div>
                          </div>

                          <div class="col">
                            <label
                              className="form-label font-weight-bold"
                              for="form3Example1cg">
                              Canine Relation
                            </label>

                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) => setCRCIR(e.target.value)}
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">
                                Class I Right
                              </label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) => setCRCIL(e.target.value)}
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">
                                Class I Left
                              </label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) => setCRCIIR(e.target.value)}
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">
                                Class II Right
                              </label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) => setCRCIIL(e.target.value)}
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">
                                Class II Left
                              </label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) => setCRCIIIR(e.target.value)}
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">
                                Class III Right
                              </label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) => setCRCIIIL(e.target.value)}
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">
                                Class III Left
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="field field-wrap-elem-117">
                          <div name="elem-117"></div>
                          <hr></hr>
                        </div>

                        <div class="form-outline mb-4 mt-4">
                          <label class="form-label" for="form3Example1cg">
                            BRIDGES, IMPLANTS ETC
                          </label>
                          <input
                            onChange={(e) => setBridgesImplant(e.target.value)}
                            type="text"
                            id="form3Example1cg"
                            class="form-control form-control-lg"
                            placeholder="Please mention which teeth have bridges,implants etc so that are not moved in"
                          />
                        </div>
                        <div class="field field-wrap-elem-117">
                          <div name="elem-117"></div>
                          <hr></hr>
                        </div>

                        <div class="row align-items-center">
                          <h5 class="text-uppercase  mb-3 ">Treatment Goals</h5>
                          <div class="col">
                            <label
                              className="form-label font-weight-bold"
                              for="form3Example1cg">
                              Lower Midline
                            </label>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                onChange={(e) =>
                                  setLowerMidlineMaintain(e.target.value)
                                }
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Maintain</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                onChange={(e) =>
                                  setLowerMidlineImprove(e.target.value)
                                }
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Improve</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                onChange={(e) =>
                                  setLowerMidlineIdeal(e.target.value)
                                }
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Ideal</label>
                            </div>
                          </div>

                          <div class="col">
                            <label
                              className="form-label font-weight-bold"
                              for="form3Example1cg">
                              Upper Midline
                            </label>

                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setUpperMidlineMaintain(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Maintain</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setUpperMidlineImprove(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Improve</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setUpperMidlineIdeal(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Ideal</label>
                            </div>
                          </div>
                        </div>
                        <div class="row align-items-center mt-4">
                          <div class="col">
                            <label
                              className="form-label font-weight-bold"
                              for="form3Example1cg">
                              Overbite
                            </label>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setOverbiteMaintain(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Maintain</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setOverbiteImprove(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Improve</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setOverbiteIdeal(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Ideal</label>
                            </div>
                          </div>

                          <div class="col">
                            <label
                              className="form-label font-weight-bold"
                              for="form3Example1cg">
                              Overjet
                            </label>

                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setOverjetMaintain(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Maintain</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setOverjetImprove(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Improve</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setOverjetIdeal(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Ideal</label>
                            </div>
                          </div>
                        </div>
                        <div class="row align-items-center mt-4">
                          <div class="col">
                            <label
                              className="form-label font-weight-bold"
                              for="form3Example1cg">
                              Molar Relation
                            </label>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setMolarRelationMaintain(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Maintain</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setMolarRelationImprove(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Improve</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setMolarRelationIdeal(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Ideal</label>
                            </div>
                          </div>

                          <div class="col">
                            <label
                              className="form-label font-weight-bold"
                              for="form3Example1cg">
                              Canine Relation
                            </label>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setCanineRelationMaintain(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Maintain</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setCanineRelationImprove(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Improve</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setCanineRelationIdeal(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Ideal</label>
                            </div>
                          </div>
                        </div>
                        <div class="row align-items-center mt-4 mb-4">
                          <div class="col">
                            <label
                              className="form-label font-weight-bold"
                              for="form3Example1cg">
                              Arch Form
                            </label>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setArchFormMaintain(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Maintain</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setArchFormImprove(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Improve</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setArchFormIdeal(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Ideal</label>
                            </div>
                          </div>

                          <div class="col">
                            <label
                              className="form-label font-weight-bold"
                              for="form3Example1cg">
                              Posterior Crossbite
                            </label>

                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setPosteriorCrossbiteMaintain(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Maintain</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setPosteriorCrossbiteImprove(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Improve</label>
                            </div>
                            <div class="form-check mt-3">
                              <input
                                class="form-check-input"
                                onChange={(e) =>
                                  setPosteriorCrossbiteIdeal(e.target.value)
                                }
                                type="checkbox"
                                id="flexCheckDefault"
                              />
                              <label class="form-check-label">Ideal</label>
                            </div>
                          </div>
                        </div>
                        <div class="row align-items-start">
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <label
                                className="form-label"
                                for="form3Example1cg">
                                Procline
                              </label>
                              <select
                                class="form-select  form-select-lg"
                                onChange={(e) => setProcline(e.target.value)}
                                aria-label="Default select example"
                                placeholder="abc">
                                <option value="" disabled selected>
                                  Procline
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="Only if needed">
                                  Only if needed
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <label
                                className="form-label"
                                for="form3Example1cg">
                                IPR
                              </label>
                              <select
                                class="form-select form-select-lg"
                                onChange={(e) => setIPR(e.target.value)}
                                aria-label="Default select example"
                                placeholder="abc">
                                <option value="" disabled selected>
                                  IPR
                                </option>
                                <option value="Yes">Yes </option>
                                <option value="No">No</option>
                                <option value="Only if needed">
                                  Only if needed
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row align-items-start">
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <label
                                className="form-label"
                                for="form3Example1cg">
                                Expand
                              </label>
                              <select
                                class="form-select form-select-lg"
                                onChange={(e) => setExpand(e.target.value)}
                                aria-label="Default select example"
                                placeholder="abc">
                                <option value="" disabled selected>
                                  Expand
                                </option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="Only if needed">
                                  Only if needed
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <label
                                className="form-label"
                                for="form3Example1cg">
                                Engagers
                              </label>
                              <select
                                class="form-select form-select-lg"
                                onChange={(e) => setEngagers(e.target.value)}
                                aria-label="Default select example"
                                placeholder="abc">
                                <option value="" disabled selected>
                                  Engagers
                                </option>
                                <option value="Yes">Yes </option>
                                <option value="No">No</option>
                                <option value="Only if needed">
                                  Only if needed
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="form-outline mb-4 mt-4">
                          <label className="form-label" for="form3Example1cg">
                            Distalize
                          </label>
                          <select
                            class="form-select form-select-lg"
                            onChange={(e) => setDistalize(e.target.value)}
                            aria-label="Default select example"
                            placeholder="abc">
                            <option value="" disabled selected>
                              Engagers
                            </option>
                            <option value="Yes">Yes </option>
                            <option value="No">No</option>
                            <option value="Only if needed">
                              Only if needed
                            </option>
                          </select>
                        </div>
                        <div class="form-outline mb-4 mt-4">
                          <label class="form-label" for="form3Example1cg">
                            Avoid Engagers on these teeth(facial restorations,
                            etc)
                          </label>
                          <input
                            type="text"
                            id="form3Example1cg"
                            onChange={(e) => setAEOT(e.target.value)}
                            class="form-control form-control-lg"
                          />
                        </div>
                        <div class="form-outline mb-4 mt-4">
                          <label class="form-label" for="form3Example1cg">
                            Extract these teeth before Treatment
                          </label>
                          <input
                            type="text"
                            id="form3Example1cg"
                            onChange={(e) => setETBT(e.target.value)}
                            class="form-control form-control-lg"
                          />
                        </div>
                        <div class="form-outline mb-4 mt-4">
                          <Form>
                            <Form.Item
                              name="Country"
                              label="Doctor Notes"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input the Notes!",
                                },
                              ]}>
                              <TextArea
                                placeholder="DoctorNotes"
                                onChange={(e) => setDoctorNotes(e.target.value)}
                                value={DoctorNotes}
                              />
                            </Form.Item>
                          </Form>
                        </div>

                        <div class="row align-items-start">
                          <div class="col">
                            <div className="form-check d-flex  mb-5">
                              <input
                                className="form-check-input me-2"
                                required
                                type="checkbox"
                                id="form2Example3cg"
                              />
                              <label
                                className="form-check-label"
                                for="form2Example3g">
                                I agree all statements in{" "}
                                <a
                                  href="https://aligno.co/terms-and-conditions-doctors/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-body">
                                  <u>Terms of service</u>
                                </a>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            type="submit"
                            value="Register"
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
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
            {/* </Form> */}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
}

export default Rxform;
