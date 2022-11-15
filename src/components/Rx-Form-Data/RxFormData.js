import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import RxTable from "./Modules/RxTable";

function RxFormData() {
  const navigate = useNavigate()
  useEffect(()=>{
if(!localStorage.getItem('token')){
  navigate('/Login')
}
  
},[])

 
  useEffect(()=>{
if(!localStorage.getItem('token')){
  navigate('/Login')
}
  
},[])


  useEffect(() => {
		document.title = 'Aligno-Rx-view';
	}, []);

  return (
    <>
    <Navbar/>
    <div className="d-flex flex-column align-item-center">
      <h1>Rx Form Data</h1>
    </div>
   <RxTable/>
   </>
  );
}
export default RxFormData;