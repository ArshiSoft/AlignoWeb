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
import { AppstoreOutlined, MailOutlined, SettingOutlined,DashboardOutlined} from '@ant-design/icons';
import { Layout, Menu   } from 'antd';
import RxTable from '../Rx-Form-Data/Modules/RxTable';
import { Link } from 'react-router-dom';
import AsideMenu from './Modules/Aside/AsideMenu';




function getItem(label, key, icon, children, type) {
	return {
		key,
		icon,
		children,
		label,
		type,
	};
}

const items = [
  getItem('','empty',
  // getItem('Form1', 'g1', null, [getItem('Rx View','1', [<Link to='/Rx-view'/>]), getItem('Rx Form','2', [<Link to='/Rx-form'/>],)], 'group'),
  // getItem('Item 2', 'g2', null, [getItem('NO', '3',[<Link to='/Rx-view'/>]), getItem('Option 4', '4',[<Link to='/Rx-form'/>])], 'group'),
),
	getItem('Dashboard','Dash',<Link to='/' className='mb-1' ><DashboardOutlined/></Link>,
		// getItem('Form1', 'g1', null, [getItem('Rx View','1', [<Link to='/Rx-view'/>]), getItem('Rx Form','2', [<Link to='/Rx-form'/>],)], 'group'),
		// getItem('Item 2', 'g2', null, [getItem('NO', '3',[<Link to='/Rx-view'/>]), getItem('Option 4', '4',[<Link to='/Rx-form'/>])], 'group'),
	),
	getItem('Form', 'sub2', <MailOutlined />, [
		getItem('Form1', 'g1', null, [getItem('Rx View','1', [<Link to='/Rx-view'/>]), getItem('Rx Form','2', [<Link to='/Rx-form'/>],)], 'group'),
		getItem('Item 2', 'g2', null, [getItem('NO', '3',[<Link to='/Rx-view'/>]), getItem('Option 4', '4',[<Link to='/Rx-form'/>])], 'group'),
	]),
	getItem('Navigation Two', 'sub3', <AppstoreOutlined />, [
		getItem('Option 5', '5'),
		getItem('Option 6', '6'),
		getItem('Submenu', 'sub4', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
	]),
	getItem('Navigation Three', 'sub5', <SettingOutlined />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
		getItem('Option 11', '11'),
		getItem('Option 12', '12'),
	]),

];

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