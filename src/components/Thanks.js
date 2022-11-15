import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Thanks() {
  const navigate = useNavigate()
  useEffect(()=>{
if(!localStorage.getItem('token')){
  navigate('/Login')
}
  
},[])
  // Tab Title
  useEffect(() => {
    document.title = "Aligno-Thanks";
  }, []);

  return (
    <>
      <div class="jumbotron text-center">
        <h1 class="display-3">Thank You!</h1>
        {/* <p class="lead"><strong>Please check your email</strong> for further instructions on how to complete your account setup.</p> */}
        <hr />
        {/* <p>
    Having trouble? <a href="https://bootstrapcreative.com/">Contact us</a>
  </p> */}
        <p class="lead">
          <a
            className="btn  btn-sm"
            style={{ backgroundColor: `#01aba9` }}
            href="https://portal.aligno.co/rx-form/"
            role="button"
          >
            Back to RX-Form
          </a>
        </p>
      </div>
    </>
  );
}
export default Thanks;
