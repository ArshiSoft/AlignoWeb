import '../Dashboard/Dashboard.css';
import Header2 from '../Header/Header2';
import {useNavigate }from 'react-router-dom'
import { useEffect } from 'react';



function Dashboard2() {
  const navigate = useNavigate()
  useEffect(()=>{
if(!localStorage.getItem('token')){
  navigate('/Login')
}
  
},[])

  return (
   <Header2/>
  )
}
export default Dashboard2;