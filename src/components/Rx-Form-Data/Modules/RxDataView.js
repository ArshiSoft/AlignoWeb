/* eslint-disable */
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";


function RxDataView() {
    const location = useLocation()
    const params = new URLSearchParams(location.search);

    const [modalInfo, setRxData] = useState([])

    const getRxData = async () => {
        try {
            const response = await axios.get('https://server.aligno.co/api/rxform/' + params.get('id'));
            setRxData(response.data.userdata);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getRxData();
    }, []);
    return (
        <>

            <div className='container mt-2'>
                <h3>{modalInfo.clinicname}</h3>
                <div className='row '>
                    <div className='col-lg-6 col-md-6 '>
                        <h5 className=''>Doctor</h5>
                        <p className='ml-4'><strong>Name  :    &nbsp; &nbsp;
                        </strong> {modalInfo.doctorname}</p>
                        <p className='ml-4'><strong>Email  :     &nbsp; &nbsp;&nbsp;
                        </strong> {modalInfo.doctoremail}</p>
                        <p className='ml-4'><strong>Phone  :    &nbsp; &nbsp;
                        </strong> {modalInfo.doctornumber}</p>
                        <h5 className=''>Instructions</h5>
                        <p className='ml-4'><strong>Primary Concern  :    &nbsp; &nbsp;
                        </strong> {modalInfo.pcop}</p>
                        <p className='ml-4'><strong>Treatment of Arches  :     &nbsp; &nbsp;
                        </strong> {modalInfo.archesvalue}</p>
                       
                        

                    </div>
                    <div className='col-lg-6 col-md-6 ' style={{paddingLeft:`70px`}}>
                        <h5 className=''>Patient</h5>
                        <p className='ml-4'><strong>ID  : &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;
                        </strong> {modalInfo.patienid}</p>
                        <p className='ml-4'><strong>Name  :    &nbsp; &nbsp;
                        </strong> {modalInfo.patientname}</p>
                        <p className='ml-4'><strong>Email  :     &nbsp; &nbsp;&nbsp;
                        </strong> {modalInfo.patientemail}</p>
                        <p className='ml-4'><strong>Phone  :    &nbsp; &nbsp;
                        </strong> {modalInfo.patientnumber}</p>
                        <p className='ml-4'><strong>Gender  :    &nbsp; &nbsp;
                        </strong> {modalInfo.gender}</p>


                    </div>
                    <div class='field field-wrap-elem-117'>
										<div name='elem-117'></div>
										<hr></hr>
									</div>
                    <div className='row '>
                        <h4 style={{textAlign: `center`}}
                         className='mt-3 mb-5'>EXISTING CONDITION OF PATIENT</h4>
                         <div className='col-lg-6 col-md-6' >
                        <p className='ml-4'><strong>Lower Midline  :    &nbsp; &nbsp;
                        </strong> {modalInfo.lowermidline}</p>
                        </div>
                        <div className='col-lg-6 col-md-6' style={{paddingLeft:`80px`}}>
                        <p className='ml-4'><strong>Upper Midline  :    &nbsp; &nbsp;
                        </strong> {modalInfo.uppermidline}</p>
                        </div>
                        <div className='col-lg-12 col-md-12'>
                            <p className='ml-4 mb-5'><strong>Bridges, Implants ETC:     &nbsp; &nbsp;
                        </strong> {modalInfo.bridgesimplant}</p>
                        </div>
                      


                    </div>
                    <div className='row'>
                    <div className='col-lg-6 col-md-6 '>
                        <h5 className=''>Molar Relation</h5>
                        <p className='ml-4'><strong>Class I Right  :    &nbsp; &nbsp;
                        </strong> {modalInfo.mrcir}</p>
                        <p className='ml-4'><strong>Class I Left  : &nbsp; &nbsp; &nbsp;&nbsp;
                        </strong> {modalInfo.mrcil}</p>
                        <p className='ml-4'><strong>Class II Right :    &nbsp; &nbsp;
                        </strong> {modalInfo.mrciir}</p>
                        <p className='ml-4'><strong>Class II Left :    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.mrciil}</p>
                        <p className='ml-4'><strong>Class III Right:    &nbsp; &nbsp;
                        </strong> {modalInfo.mrciiir}</p>
                        <p className='ml-4'><strong>Class III Left:    &nbsp; &nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.mrciiil}</p>
                       
                      
                        

                    </div>
                    <div className='col-lg-6 col-md-6 ' style={{paddingLeft:`80px`}}>
                        <h5 className=''>Canine Relation</h5>
                        <p className='ml-4'><strong>Class I Right  :    &nbsp; &nbsp;
                        </strong> {modalInfo.crcir}</p>
                        <p className='ml-4'><strong>Class I Left  : &nbsp; &nbsp; &nbsp;&nbsp;
                        </strong> {modalInfo.crcil}</p>
                        <p className='ml-4'><strong>Class II Right :    &nbsp; &nbsp;
                        </strong> {modalInfo.crciir}</p>
                        <p className='ml-4'><strong>Class II Left :    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.crciil}</p>
                        <p className='ml-4'><strong>Class III Right:    &nbsp; &nbsp;
                        </strong> {modalInfo.crciiir}</p>
                        <p className='ml-4'><strong>Class III Left:    &nbsp; &nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.crciiil}</p>


                    </div>
                    </div>
                    <div class='field field-wrap-elem-117'>
										<div name='elem-117'></div>
										<hr></hr>
									</div>
                    <div className='row mb-3'>
                    <h4 style={{textAlign: `center`}}
                         className='mt-3 mb-5'>TREATMENT GOALS</h4>
                    <div className='col-lg-3 col-md-3 '>
                        <h5 style={{textAlign: `center`,paddingRight: `40px`}} className=''>Lower Midline</h5>
                        <p className='ml-4'><strong>Maintain  :    &nbsp; &nbsp;
                        </strong> {modalInfo.lowermidlinemaintain}</p>
                        <p className='ml-4'><strong>Improve  : &nbsp; &nbsp;&nbsp;
                        </strong> {modalInfo.lowermidlineimprove}</p>
                        <p className='ml-4'><strong>Ideal : &nbsp;   &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.lowermidlineideal}</p>
                       
                       
                      
                        

                    </div>
                    <div className='col-lg-3 col-md-3 '>
                        <h5 style={{textAlign: `center`,paddingRight: `85px`}} className=''>Upper Midline</h5>
                        <p className=''><strong>Maintain  :    &nbsp; &nbsp;
                        </strong> {modalInfo.uppermidlinemaintain}</p>
                        <p className=''><strong>Improve  : &nbsp; &nbsp;&nbsp;
                        </strong> {modalInfo.uppermidlineimprove}</p>
                        <p className=''><strong>Ideal : &nbsp;   &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.uppermidlineidela}</p>
                       


                    </div>
                    <div className='col-lg-3 col-md-3 '>
                        <h5 style={{textAlign: `center`,marginRight: `50px`}} className=''>Overbite</h5>
                        <p className='ml-4'><strong>Maintain  :    &nbsp; &nbsp;
                        </strong> {modalInfo.upperoverbitemaintain}</p>
                        <p className='ml-4'><strong>Improve  : &nbsp; &nbsp;&nbsp;
                        </strong> {modalInfo.overbiteimprove}</p>
                        <p className='ml-4'><strong>Ideal : &nbsp;   &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.overbiteideal}</p>
                       
                       
                      
                        

                    </div>
                    <div className='col-lg-3 col-md-3 '>
                        <h5 style={{textAlign: `center`,marginRight: `50px`}} className=''>Overjet</h5>
                        <p className='ml-4'><strong>Maintain  :    &nbsp; &nbsp;
                        </strong> {modalInfo.overjetmaintain}</p>
                        <p className='ml-4'><strong>Improve  : &nbsp; &nbsp;&nbsp;
                        </strong> {modalInfo.overjetimprove}</p>
                        <p className='ml-4'><strong>Ideal : &nbsp;   &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.overjetideal}</p>
                       


                    </div>
                    </div>
                    <div className='row mb-3'>
                  
                    <div className='col-lg-3 col-md-3 '>
                        <h5 style={{textAlign: `center`,paddingRight: `40px`}} className=''>Molar Relation</h5>
                        <p className='ml-4'><strong>Maintain  :    &nbsp; &nbsp;
                        </strong> {modalInfo.molarrelationmaintain}</p>
                        <p className='ml-4'><strong>Improve  : &nbsp; &nbsp;&nbsp;
                        </strong> {modalInfo.molarrelationimrpove}</p>
                        <p className='ml-4'><strong>Ideal : &nbsp;   &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.molarrelationideal}</p>
                       
                       
                      
                        

                    </div>
                    <div className='col-lg-3 col-md-3 '>
                        <h5 style={{textAlign: `center`,paddingRight: `85px`}} className=''>Canine Relation</h5>
                        <p className=''><strong>Maintain  :    &nbsp; &nbsp;
                        </strong> {modalInfo.caninerelationmaintain}</p>
                        <p className=''><strong>Improve  : &nbsp; &nbsp;&nbsp;
                        </strong> {modalInfo.caninerelationimprove}</p>
                        <p className=''><strong>Ideal : &nbsp;   &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.caninerelationideal}</p>
                       


                    </div>
                    <div className='col-lg-3 col-md-3 '>
                        <h5 style={{textAlign: `center`,marginRight: `50px`}} className=''>Arch Form</h5>
                        <p className='ml-4'><strong>Maintain  :    &nbsp; &nbsp;
                        </strong> {modalInfo.archformmaintain}</p>
                        <p className='ml-4'><strong>Improve  : &nbsp; &nbsp;&nbsp;
                        </strong> {modalInfo.archformimprove}</p>
                        <p className='ml-4'><strong>Ideal : &nbsp;   &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.archformideal}</p>
                       
                       
                      
                        

                    </div>
                    <div className='col-lg-3 col-md-3 '>
                        <h5 style={{textAlign: `center`,marginRight: `50px`}} className=''>Posterior Crossbite</h5>
                        <p className='ml-4'><strong>Maintain  :    &nbsp; &nbsp;
                        </strong> {modalInfo.posteriorcrossbitemaintain}</p>
                        <p className='ml-4'><strong>Improve  : &nbsp; &nbsp;&nbsp;
                        </strong> {modalInfo.posteriorcrossbiteimprove}</p>
                        <p className='ml-4'><strong>Ideal : &nbsp;   &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.posteriorcrossbiteideal}</p>
                       


                    </div>
                    </div>
                   
                    <div class='field field-wrap-elem-117'>
										<div name='elem-117'></div>
										<hr></hr>
									</div>
                    <div className='row'>
                    <div className='col-lg-6 col-md-6 '>
                        
                        <p className='ml-4'><strong>Procline :    &nbsp; &nbsp;
                        </strong> {modalInfo.procline}</p>
                        <p className='ml-4'><strong>Expand  : &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                        </strong> {modalInfo.expand}</p>
                        <p className='ml-4'><strong>Distalize : &nbsp;  &nbsp;  &nbsp;   &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.distalize}</p>
                        <p className='ml-4'><strong>Avoid Engagers : &nbsp; &nbsp;
                        </strong> {modalInfo.aeot}</p>
                       
                       
                      
                        

                    </div>
                    <div className='col-lg-6 col-md-6 ' style={{paddingLeft:`80px`}}>
                    <p className='ml-4'><strong>Extract Teeth :  &nbsp;&nbsp;&nbsp;&nbsp;
                        </strong> {modalInfo.etbt}</p>
                        <p className='ml-4'><strong>IPR :    &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </strong> {modalInfo.ipr}</p>
                        <p className='ml-4'><strong>Engagers  : &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                        </strong> {modalInfo.engagers}</p>
                        
                       


                    </div>
                    
                    </div>
                   
                </div>
            </div>
        </>
    )
}
export default RxDataView;