// import Header from '../Header/Header';
import {useNavigate }from 'react-router-dom'
import { useEffect } from 'react';
// import AsideMenu from './Modules/Aside/AsideMenu'
import Header from './Modules/Header/Header'
import Content from './Modules/Content/Content'
import Footer from './Modules/Footer/Footer'
import { Col, Row } from 'antd';
import { isToken } from '../../class/clsSession';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined,DashboardOutlined } from '@ant-design/icons';
import { Layout, Menu   } from 'antd';
import RxTable from '../Rx-Form-Data/Modules/RxTable';
import { Link } from 'react-router-dom';
import AsideMenu from './Modules/Aside/AsideMenu';








function Dashboard() {
  const navigate = useNavigate()
  useEffect(()=>{
if(!isToken()){
  navigate('/Login')
}
document.title = 'Aligno-Dashboard';
  
},[])

  return (

    <Layout>
   <AsideMenu/>
    <Layout>
      <Header />
      <Content/>
      <Footer/>
     </Layout>
  </Layout>


  )
}
export default Dashboard;