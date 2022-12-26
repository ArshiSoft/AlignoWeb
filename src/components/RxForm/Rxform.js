import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../RxForm/Rxform.css";
import { useEffect } from "react";
import "@fontsource/league-spartan"; // Defaults to weight 400.
import "@fontsource/source-sans-pro"; // Defaults to weight 400.
import Input2 from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { getCurrentDate } from "../../class/clsGeneralVariables";
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Layout,
  Menu,
  Row,
  Select,
} from "antd";
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
import { Typography } from "antd";
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

  const [form] = Form.useForm();

  const history = useNavigate();

  async function rxData(event) {
    event.preventDefault();
    // const response = await fetch("https://server.aligno.co/api/rxform", {
    const response = await fetch("http://localhost:1337/api/rxform", {
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
            <Col
              style={{ alignItems: `center`, height: `100` }}
              className="gradient-custom-3"
              span={24}>
              <Row style={{ justifyContent: `center`, alignItems: `center` }}>
                <Col
                  className="formwidth"
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
                    <Form layout="vertical" form={form}  onFinish={rxData}>
                      {/* <form onSubmit={rxData}> */}
                      <Row
                        style={{justifyContent:`center`}}
                      >
                        <Col
                          justify="start"
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
                            name="Name of Clinic"
                            label="Name of Clinic"
                            rules={[
                              {
                                required: true,
                                message: "Please input the Clinic Name!",
                              },
                            ]}>
                            <Input
                              style={{}}
                              onChange={(e) => setClinicName(e.target.value)}
                              value={clinicname}
                              placeholder="Clinic Name"
                              required
                            />
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
                            name="doctorname"
                            label="Name of Doctor"
                            rules={[
                              {
                                required: true,
                                message: "Please input the Clinic Name!",
                              },
                            ]}>
                            <Input
                              // style={{ width: `400px` }}
                              onChange={(e) => setDoctorName(e.target.value)}
                              name="doctorname"
                              placeholder="Dr Ali"
                              required
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      {/* <div class="row align-items-start"> */}
                      <Row
                        style={{justifyContent:`center`}}
                      >
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
                          {/* <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6"> */}
                          {/* <div className="form-outline mb-4"> */}
                          <Form.Item
                            name="Doctor's Phone Number"
                            label="Doctor's Phone Number"
                            rules={[
                              {
                                required: true,
                                message: "Please input the Clinic Name!",
                              },
                            ]}>
                            <Input2
                              width="100%"
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
                                // width: "225px",
                                minHeight: "calc(1.5em)",
                                fontSize: "1rem",
                                // borderRadius: ".5rem",
                              }}
                              required
                            />
                          </Form.Item>
                          {/* </div> */}
                          {/* </div> */}
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
                          {/* <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6"> */}
                          {/* <div className="form-outline mb-4"> */}
                          <Form.Item
                            name="Doctor's Email"
                            label=" Doctor's Email"
                            rules={[
                              {
                                required: true,
                                message: "Please input the Clinic Name!",
                              },
                            ]}>
                            <Input
                              // style={{ width: `400px` }}
                              type="email"
                              onChange={(e) => setDoctorEmail(e.target.value)}
                              name="doctoremail"
                              placeholder="Enter Your Email"
                              required
                            />
                          </Form.Item>
                          {/* </div> */}
                          {/* </div> */}
                        </Col>
                      </Row>
                      {/* </div> */}
                      {/* <div class="row align-items-start">
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6"> */}
                      {/* <div className="form-outline mb-4"> */}
                      <Row 
                        style={{justifyContent:`center`}}
                      >
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
                            name="Patient's ID"
                            label="  Patient's ID"
                            rules={[
                              {
                                required: true,
                                message: "Please input the Clinic Name!",
                              },
                            ]}>
                            <Input
                              // style={{ width: `400px` }}
                              type="text"
                              onChange={(e) => setPatientId(e.target.value)}
                              name="patientid"
                              placeholder="Generated by the Introral Scanner"
                              required
                            />
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
                            name="Patients Name"
                            label="Patients Name"
                            rules={[
                              {
                                required: true,
                                message: "Please input the Clinic Name!",
                              },
                            ]}>
                            <Input
                              // style={{ width: `400px` }}
                              type="text"
                              onChange={(e) => setPatientName(e.target.value)}
                              // onBlur={formik.handleChange}
                              // value={formik.values.nameofpatient}
                              name="nameofpatient"
                              placeholder="Ali"
                              required
                            />
                          </Form.Item>
                          {/* </div>
                          </div> */}
                        </Col>
                      </Row>
                      {/* </div> */}
                      <Row   
                      style={{justifyContent:`center`}}
                      >
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
                              name="Patient's Phone Number"
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
                                    setpatientNumberInputValue(e.target.value);
                                  },
                                  setPatientNumber)
                                }
                                inputStyle={{
                                  // width: "225px",
                                  minHeight: "calc(1.5em)",
                                  fontSize: "1rem",
                                  // borderRadius: ".5rem",
                                }}
                                required
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
                            offset: 0,
                          }}
                          lg={{
                            span: 11,
                            offset: 1,
                          }}>
                        
                            <Form.Item
                              name="Patient's Email"
                              label=" Patient's Email"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input the Clinic Name!",
                                },
                              ]}>
                              <Input
                                // style={{ width: `400px` }}
                                type="email"
                                onChange={(e) =>
                                  setPatientEmail(e.target.value)
                                }
                                name="patientemail"
                                placeholder="ali@gmail.com"
                                required
                              />
                            </Form.Item>
                      
                        {/* </div> */}
                        </Col>
                      {/* </div> */}
                      </Row>
                      <Row
                      style={{justifyContent:`center`}}
                      >
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
                              name="Select Gender"
                              label="Select Gender"
                              rules={[
                                {
                                  required: true,
                                  message: "Please input the Clinic Name!",
                                },
                              ]}>
                              <Select
                                // style={{ width: `400px` }}
                                // className="form-select form-select-lg"
                                required
                                onChange={(e) => setGender(e.target.value)}
                                aria-label="Default select example"
                                options={[
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
                                ]}></Select>
                            </Form.Item>
                         
                        </Col>
                        <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                          <div className="form-outline mb-4"></div>
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
                      <Row style={{ alignItems: `start`,justifyContent:`center`  }}>
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
                            name="Primary Concern of the Patient"
                            label="Primary Concern of the Patient"
                            rules={[
                              {
                                // required: true,
                                message: "Please input the Clinic Name!",
                              },
                            ]}>
                            <div className="form-outline mb-4">
                              <Input
                                style={{ marginRight: `10px` }}
                                type="text"
                                onChange={(e) => setPcop(e.target.value)}
                                name="nameofpatient"
                                placeholder="Crowding in lower arch/Diastema"
                                required
                              />
                            </div>
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
                              name="Treatment of Arches"
                              label=" Treatment of Arches"
                              rules={[
                                {
                                  // required: true,
                                  message: "Please input the Clinic Name!",
                                },
                              ]}>
                              <Select
                                // style={{ width: `400px`, }}
                                // className="form-select form-select-lg"
                                required
                                onChange={(e) => setArchesValue(e.target.value)}
                                aria-label="Default select example"
                                options={[
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
                                ]}></Select>
                            </Form.Item>
                            </Col>
                    
                      </Row>
                      {/* space line */}
                      <Divider orientation="left"></Divider>

                      <Title
                        style={{
                          textAlign: `center`,
                          marginBottom: `15px`,
                        }}
                        level={2}>
                        EXISTING CONDITION OF PATIENT{" "}
                      </Title>
                      <Row style={{ alignItems: `start`,justifyContent:`center`  }}>
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
                              name="Lower Midline"
                              label=" Lower Midline"
                              rules={[
                                {
                                  // required: true,
                                  message: "Please input the Clinic Name!",
                                },
                              ]}>
                              <Select
                                // style={{ width: `400px` }}
                                required
                                onChange={(e) =>
                                  setLowerMidline(e.target.value)
                                }
                                aria-label="Default select example"
                                options={[
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
                       <Form.Item
                              name="Upper Midline"
                              label="Upper Midline"
                              rules={[
                                {
                                  // required: true,
                                  message: "Please input the Clinic Name!",
                                },
                              ]}>
                              <Select
                                // style={{ width: `400px` }}
                                required
                                onChange={(e) =>
                                  setUpperMidline(e.target.value)
                                }
                                aria-label="Default select example"
                                options={[
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
                                ]}></Select>
                            </Form.Item>
                            
                         
                          </Col>
                       
                      {/* </div> */}
                      </Row>
                    
                    
                      <Row style={{ alignItems: `start`,justifyContent:`center`  }}>
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
                          <Title 
                        
                          level={5}> Molar Relation</Title>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) => setMRCIR(e.target.value)}>
                                <Form.Item
                                  name="Class I Right"
                                  label="Class I Right"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          {/* <div class="form-check mt-3"> */}
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) => setMRCIL(e.target.value)}>
                                <Form.Item
                                  name="Class I Left"
                                  label="Class I Left"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) => setMRCIIR(e.target.value)}>
                                <Form.Item
                                  name="Class II Right"
                                  label="Class II Right"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) => setMRCIIL(e.target.value)}>
                                <Form.Item
                                  name="Class II Left"
                                  label=" Class II Left"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) => setMRCIIIR(e.target.value)}>
                                <Form.Item
                                  name="Class III Right"
                                  label=" Class III Right"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>

                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) => setMRCIIIL(e.target.value)}>
                                <Form.Item
                                  name="Class III Left"
                                  label=" Class III Left"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>

                         
                        </Col>

                        <Col
                      
                          style={{ marginBottom: `5px`,justifyContent:`end` }}
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
                            offset: 1,
                          }}
                          lg={{
                            span: 11,
                            offset: 1,
                          }}>
                        
                          <Title level={5}> Canine Relation</Title>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) => setCRCIR(e.target.value)}>
                                <Form.Item
                                  name=" Class I Right"
                                  label=" Class I Right"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>

                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) => setCRCIL(e.target.value)}>
                                <Form.Item
                                  name=" Class I Left"
                                  label="  Class I Left"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) => setCRCIIR(e.target.value)}>
                                <Form.Item
                                  name="Class II Right"
                                  label=" Class II Right"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>

                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) => setCRCIIL(e.target.value)}>
                                <Form.Item
                                  name=" Class II Left"
                                  label="  Class II Left"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>

                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) => setCRCIIIR(e.target.value)}>
                                <Form.Item
                                  name=" Class III Right"
                                  label="   Class III Right"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>

                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) => setCRCIIIL(e.target.value)}>
                                <Form.Item
                                  name="Class III Left"
                                  label="   Class III Left"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      {/* </div> */}
                      <Divider orientation="left"></Divider>
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
                          name="  BRIDGES, IMPLANTS ETC"
                          label="  BRIDGES, IMPLANTS ETC">
                          <Input
                            // style={{ width: `800px` }}
                            type="text"
                            onChange={(e) => setBridgesImplant(e.target.value)}
                            name="nameofpatient"
                            placeholder="Please mention which teeth have bridges,implants etc so that are not moved in"
                            required
                          />
                        </Form.Item>
                        </Col>
                      </Row>
                      <Divider orientation="left"></Divider>

                      <Title style={{ marginTop: `5px` }} level={4}>
                        TREATMENT GOALS
                      </Title>
                      <Row style={{ alignItems: `start` }}>
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
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setLowerMidlineMaintain(e.target.value)
                                }>
                                <Form.Item
                                  name="Maintain"
                                  label="Maintain"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setLowerMidlineImprove(e.target.value)
                                }>
                                <Form.Item
                                  name="Improve"
                                  label="Improve"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setLowerMidlineIdeal(e.target.value)
                                }>
                                <Form.Item
                                  name="Ideal"
                                  label="Ideal"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Title style={{ textAlign: `start`,marginTop:`15px` }} level={5}>
                            Overbite
                          </Title>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setOverbiteMaintain(e.target.value)
                                }>
                                <Form.Item
                                  name="title"
                                  label="Maintain"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setOverbiteImprove(e.target.value)
                                }>
                                <Form.Item
                                  name="title"
                                  label="Improve"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setOverbiteIdeal(e.target.value)
                                }>
                                <Form.Item
                                  name="title"
                                  label="Ideal"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Title style={{ textAlign: `start`,marginTop:`15px` }} level={5}>
                            Molar Relation
                          </Title>
                          <Row>
                          <Col span={24}
                         >
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setMolarRelationMaintain(e.target.value)
                                }>
                                <Form.Item
                                  name="Maintain2"
                                  label="Maintain"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setMolarRelationImprove(e.target.value)
                                }>
                                <Form.Item
                                  name="Improve2"
                                  label="Improve"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setMolarRelationIdeal(e.target.value)
                                }>
                                <Form.Item
                                  name="Ideal2"
                                  label="Ideal"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Title style={{ textAlign: `start`,marginTop:`15px` }} level={5}>
                            Arch Form
                          </Title>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setArchFormMaintain(e.target.value)
                                }>
                                <Form.Item
                                  name="Maintain3"
                                  label="Maintain"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setArchFormImprove(e.target.value)
                                }>
                                <Form.Item
                                  name="Improve3"
                                  label="Improve"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setArchFormIdeal(e.target.value)
                                }>
                                <Form.Item
                                  name="Ideal3"
                                  label="Ideal"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                        </Col>
                        <Col
                      
                      style={{ marginBottom: `5px`,justifyContent:`end` }}
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
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setUpperMidlineMaintain(e.target.value)
                                }>
                                <Form.Item
                                  name="Maintain4"
                                  label="Maintain"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setUpperMidlineImprove(e.target.value)
                                }>
                                <Form.Item
                                  name="Improve4"
                                  label="Improve"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setUpperMidlineIdeal(e.target.value)
                                }>
                                <Form.Item
                                  name="Ideal4"
                                  label="Ideal"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Title style={{ textAlign: `start`,marginTop:`15px` }} level={5}>
                            Overjet
                          </Title>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setOverjetMaintain(e.target.value)
                                }>
                                <Form.Item
                                  name="Maintain5"
                                  label="Maintain"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setOverjetImprove(e.target.value)
                                }>
                                <Form.Item
                                  name="Improve5"
                                  label="Improve"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setOverjetIdeal(e.target.value)
                                }>
                                <Form.Item
                                  name="Ideal5"
                                  label="Ideal"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Title style={{ textAlign: `start`,marginTop:`15px` }} level={5}>
                            Canine Relation
                          </Title>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setCanineRelationMaintain(e.target.value)
                                }>
                                <Form.Item
                                  name="Maintain6"
                                  label="Maintain"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setCanineRelationImprove(e.target.value)
                                }>
                                <Form.Item
                                  name="Improve6"
                                  label="Improve"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setCanineRelationIdeal(e.target.value)
                                }>
                                <Form.Item
                                  name="Ideal6"
                                  label="Ideal"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Title style={{ textAlign: `start`,marginTop:`15px` }} level={5}>
                            Posterior Crossbite
                          </Title>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setPosteriorCrossbiteMaintain(e.target.value)
                                }>
                                <Form.Item
                                  name="Maintain7"
                                  label="Maintain"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setPosteriorCrossbiteImprove(e.target.value)
                                }>
                                <Form.Item
                                  name="Improve7"
                                  label="Improve"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginLeft: `0px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setPosteriorCrossbiteIdeal(e.target.value)
                                }>
                                <Form.Item
                                  name="Ideal7"
                                  label="Ideal"></Form.Item>
                              </Checkbox>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                      <Row>
                        <Col span={24}></Col>
                      </Row>
                      <Row
                        style={{justifyContent:`center`,marginTop:`30px`}}
                      >
                        <Col
                          justify="start"
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
                            name="Expand"
                            label="Expand"
                            rules={[
                              {
                                // required: true,
                                message: "Please input the Clinic Name!",
                              },
                            ]}>
                            <Select
                              // style={{ width: `400px` }}
                              required
                              onChange={(e) => setExpand(e.target.value)}
                              aria-label="Default select example"
                              options={[
                                {
                                  label: "Expand",
                                  options: [
                                    {
                                      label: "Yes",
                                      value: "Yes",
                                    },
                                    {
                                      label: "No",
                                      value: "No",
                                    },
                                    {
                                      label: "Only if needed",
                                      value: "Only if needed",
                                    },
                                  ],
                                },
                              ]}></Select>
                          </Form.Item>
                        </Col>
                        <Col
                          justify="start"
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
                            offset: 1,
                          }}
                          lg={{
                            span: 11,
                            offset: 1,
                          }}>
                          
                            <Form.Item
                              name="Engagers"
                              label=" Engagers"
                              rules={[
                                {
                                  // required: true,
                                  message: "Please input the Clinic Name!",
                                },
                              ]}>
                              <Select
                                // style={{ width: `400px` }}
                                required
                                onChange={(e) => setEngagers(e.target.value)}
                                aria-label="Default select example"
                                options={[
                                  {
                                    label: "Engagers",
                                    options: [
                                      {
                                        label: "Yes",
                                        value: "Yes",
                                      },
                                      {
                                        label: "No",
                                        value: "No",
                                      },
                                      {
                                        label: "Only if needed",
                                        value: "Only if needed",
                                      },
                                    ],
                                  },
                                ]}></Select>
                            </Form.Item>
                         </Col>
                        
                      </Row>
                      <Row
                        style={{justifyContent:`center`}}
                      >
                        <Col
                          justify="start"
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
                            span: 23,
                          }}
                          lg={{
                            span: 23,
                            offset: 0,
                          }}>
                    
                        <Form.Item
                          name="Distalize"
                          label=" Distalize"
                          rules={[
                            {
                              // required: true,
                              message: "Please input the Clinic Name!",
                            },
                          ]}>
                          <Select
                            // style={{ width: `800px` }}
                            required
                            onChange={(e) => setDistalize(e.target.value)}
                            aria-label="Default select example"
                            options={[
                              {
                                label: "Distalize",
                                options: [
                                  {
                                    label: "Yes",
                                    value: "Yes",
                                  },
                                  {
                                    label: "No",
                                    value: "No",
                                  },
                                  {
                                    label: "Only if needed",
                                    value: "Only if needed",
                                  },
                                ],
                              },
                            ]}></Select>
                        </Form.Item>
                  </Col>
                  </Row>
                    
                       
                        <Row
                        style={{justifyContent:`center`}}
                      >
                        <Col
                          justify="start"
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
                            span: 23,
                          }}
                          lg={{
                            span: 23,
                            offset: 0,
                          }}>
                          <Form.Item
                            name=" Avoid Engagers on these teeth(facial restorations, etc)"
                            label="  Avoid Engagers on these teeth(facial restorations, etc)">
                            <Input
                              // style={{ width: `800px` }}
                              type="text"
                              onChange={(e) => setAEOT(e.target.value)}
                              name="nameofpatient"
                              // placeholder="Please mention which teeth have bridges,implants etc so that are not moved in"
                              required
                            />

                          </Form.Item>
                          </Col>
                        </Row>
                      
                        <Row
                        style={{justifyContent:`center`}}
                      >
                        <Col
                          justify="start"
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
                            span: 23,
                          }}
                          lg={{
                            span: 23,
                            offset: 0,
                          }}>
                       
                          <Form.Item
                            name="Extract these teeth before Treatment"
                            label="  Extract these teeth before Treatment">
                            <Input
                              // style={{ width: `800px` }}
                              type="text"
                              onChange={(e) => setETBT(e.target.value)}
                              name="nameofpatient"
                              // placeholder="Please mention which teeth have bridges,implants etc so that are not moved in"
                              required
                            />
                          </Form.Item>
                          </Col>
                        </Row>
                     
                        <Row
                        style={{justifyContent:`center`}}
                      >
                        <Col
                          justify="start"
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
                            span: 23,
                          }}
                          lg={{
                            span: 23,
                            offset: 0,
                          }}>
                        <Form.Item
                          name="Doctor Notes"
                          label="Doctor Notes"
                          rules={[
                            {
                              required: true,
                              message: "Please input the Notes!",
                            },
                          ]}>
                          <TextArea
                            // style={{ width: `800px` }}
                            placeholder="DoctorNotes"
                            onChange={(e) => setDoctorNotes(e.target.value)}
                            value={DoctorNotes}
                          />
                        </Form.Item>
                        </Col>
                        </Row>
                     

                   
                   
                        <Row
                        style={{justifyContent:`center`}}
                      >
                        <Col
                          justify="start"
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
                            span: 23,
                          }}
                          lg={{
                            span: 23,
                            offset: 0,
                          }}>
                            
                              <Checkbox
                                style={{
                                  marginTop: `5px`,
                                  marginBottom: `30px`,
                                  height: `20px`,
                                }}
                                onChange={(e) =>
                                  setOverjetMaintain(e.target.value)
                                }>
                                <Form.Item
                                  name="I agree all statements in"
                                  label=" I agree all statements in">
                                  <a
                                    href="https://aligno.co/terms-and-conditions-doctors/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-body">
                                    <u>Terms of service</u>
                                  </a>
                                </Form.Item>
                              </Checkbox>
                            </Col>
                           </Row>
                      
                          
                    <Row 
                    style={{justifyContent:`center`}}
                    >
                        <Button
                          type="submit"
                          value="Register"
                          className="gradient-custom-4 text-body">
                          Submit
                        </Button>
                        </Row>
                     
                    </Form>
                    {/* </form> */}
                    {/* </div> */}
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
