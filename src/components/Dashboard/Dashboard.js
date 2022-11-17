import Header from '../Header/Header';
import {useNavigate }from 'react-router-dom'
import { useEffect } from 'react';



function Dashboard() {
  const navigate = useNavigate()
  useEffect(()=>{
if(!localStorage.getItem('token')){
  navigate('/Login')
}
  
},[])

  return (
   <Header/>
  )
}
export default Dashboard;