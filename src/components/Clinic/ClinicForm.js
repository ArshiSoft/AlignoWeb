import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "@fontsource/league-spartan"; // Defaults to weight 400.
import "@fontsource/source-sans-pro"; // Defaults to weight 400.
import { Layout } from "antd";
import AsideMenu from "../Dashboard/Modules/Aside/AsideMenu";
import Header from "../Dashboard/Modules/Header/Header";
// import Content from "../Dashboard/Modules/Content/Content";
import Footer from "../Dashboard/Modules/Footer/Footer"
const { Content } = Layout;
function ClinicForm() {
  const navigate = useNavigate();
  const [clinicName, setClinicName] = useState('');
  const [country, setCountry] = useState('');
  const [city , setCity] = useState('');

  useEffect(() => {
    // if (localStorage.getItem("token")) {
    //   navigate("/");
    // }
    document.title = "Aligno-Clinic";
  }, []);
  async function clinicData(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/clinicform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clinicName,
        country,
        city,
      }),
    });
    const data = await response.json();
		if (data.status === 'ok') {
			navigate("/");
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
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
              <div className=" container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div
                    className="col-12 col-sm-6 col-md-9 col-lg-7 col-sm-6 col-xl-6 formwidth"
                    style={{ width: `900px`, height: `1500px` }}>
                    <div
                      style={{
                        // margin: `10px`,
                        backgroundColor: `white`,
                        borderRadius: `10px`,
                        padding: `50px`,
                      }}>
                      <h2 class="text-uppercase text-center mb-5">Clinic Form</h2>
                      <form onSubmit={clinicData}>
                        <div class="row align-items-start">
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <label
                                className="form-label"
                                for="validationCustom01">
                                Clinic Name<span className="required">*</span>
                              </label>

                              <input
                                id="userNameInput"
                                type="text"
                                onChange={(e) => setClinicName(e.target.value)}
                                value={clinicName}
                                placeholder="Clinic Name"
                                className="form-control form-control-lg"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <label
                                className="form-label"
                                for="form3Example1cg">
                                Country <span className="required">*</span>
                              </label>
                              <select
                                onChange={(e) => setCountry(e.target.value)}
                                class="form-select form-select-lg"
                                required
                                aria-label="Default select example"
                                placeholder="Country">
                                <option value="" disabled selected>
                                  Country
                                </option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Iran">Iran</option>
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
                                City <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                onChange={(e) => setCity(e.target.value)}
                                name="City"
                                placeholder="City"
                                id="form3Example1cg"
                                className="form-control form-control-lg"
                                required
                              />
                            </div>
                          </div>
                          {/* <div class="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-outline mb-4">
                              <label
                                className="form-label"
                                for="form3Example3cg">
                                ZIP/Postal code
                              </label>
                              <input
                                type="text"
                                onChange={(e) => setZip(e.target.value)}
                                name="nameofpatient"
                                placeholder="ZIP/Postal code"
                                id="form3Example3cg"
                                className="form-control form-control-lg"
                              />
                            </div>
                          </div> */}
                        </div>

                        {/*  */}
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
                            value="Submit"
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                            Register
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
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
}

export default ClinicForm;
