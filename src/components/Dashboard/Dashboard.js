// import Header from '../Header/Header';
import {useNavigate }from 'react-router-dom'
import { useEffect } from 'react';
import AsideMenu from './Modules/Aside/AsideMenu'
import Header from './Modules/Header/Header'
import Content from './Modules/Content/Content'
import Footer from './Modules/Footer/Footer'
import { Col, Layout, Row } from 'antd';





function Dashboard() {
  const navigate = useNavigate()
  useEffect(()=>{
if(!localStorage.getItem('token')){
  navigate('/Login')
}
  
},[])

  return (
    <Layout>
<Header/>,
<Layout>
<Row gutter={[8, 8]}>
  <Col span={2} >
  <AsideMenu/>
  </Col>
  <Col span={22} >
  <Content/>
  </Col>
</Row>
</Layout>
<Footer/>,
</Layout>
  )
}
export default Dashboard;