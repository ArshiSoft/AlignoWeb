import React from 'react'
import {Layout} from 'antd'
import AsideMenu from '../Dashboard/Modules/Aside/AsideMenu'
import Header from '../Dashboard/Modules/Header/Header'
// import Content from '../Dashboard/Modules/Content/Content'
import Footer from '../Dashboard/Modules/Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { isToken } from '../../class/clsSession';
import ClinicTable from './module/ClinicTable'
const { Content } = Layout;

function ClinicData() {
const navigate = useNavigate()
    useEffect(()=>{
  if(!isToken()){
    navigate('/Login')
  }
  document.title = 'Aligno-Clinic';
    
  },[])
  return (
   <>
   <Layout>
   <AsideMenu/>
    <Layout>
      <Header />
      <Content>
        <ClinicTable/>
      </Content>
      <Footer/>
     </Layout>
  </Layout>
   </>
  )
}

export default ClinicData;