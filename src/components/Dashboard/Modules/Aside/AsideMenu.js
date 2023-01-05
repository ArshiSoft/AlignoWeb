import { Layout, Menu, Col, Row } from "antd";
import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FormOutlined,
  DatabaseOutlined,
  FolderViewOutlined,
} from "@ant-design/icons";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { removeToken } from "../../../../class/clsSession";
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();

const { Sider } = Layout;

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
  getItem(
    "",
    "empty",
    null,
    null,
    "group"
    // <Avatar className='ml-5' size='large' icon={<UserOutlined />} />

    // [
    // 	getItem(
    // 		'Logout',
    // 		'',
    // 		<LogoutOutlined
    // 			onClick={() => {
    // 				removeToken();
    // 				// <Link to="/Login"></Link>
    // 			}}
    // 		/>
    // 	),
    // ]
  ),
  getItem(
    "Dashboard",
    "Dash",
    <Link to="/" className="mb-1">
      <DashboardOutlined />
    </Link>
	
    // getItem('Form1', 'g1', null, [getItem('Rx View','1', [<Link to='/Rx-view'/>]), getItem('Rx Form','2', [<Link to='/Rx-form'/>],)], 'group'),
    // getItem('Item 2', 'g2', null, [getItem('NO', '3',[<Link to='/Rx-view'/>]), getItem('Option 4', '4',[<Link to='/Rx-form'/>])], 'group'),
  ),
  getItem(
    "Candidate",
    "Cand",
    <Link to="/Am-I-a-Candidate" className="mb-1">
      <UserOutlined />
    </Link>
	
    // getItem('Form1', 'g1', null, [getItem('Rx View','1', [<Link to='/Rx-view'/>]), getItem('Rx Form','2', [<Link to='/Rx-form'/>],)], 'group'),
    // getItem('Item 2', 'g2', null, [getItem('NO', '3',[<Link to='/Rx-view'/>]), getItem('Option 4', '4',[<Link to='/Rx-form'/>])], 'group'),
  ),
  getItem(
    "Rx Form",
    "RxForm",
    <Link to="/Rx-form" className="mb-1">
      <FormOutlined />
    </Link>
	
    // getItem('Form1', 'g1', null, [getItem('Rx View','1', [<Link to='/Rx-view'/>]), getItem('Rx Form','2', [<Link to='/Rx-form'/>],)], 'group'),
    // getItem('Item 2', 'g2', null, [getItem('NO', '3',[<Link to='/Rx-view'/>]), getItem('Option 4', '4',[<Link to='/Rx-form'/>])], 'group'),
  ),
  getItem(
    "Rx View",
    "RxView",
    <Link to="/Rx-view" className="mb-1">
      <FolderViewOutlined />
    </Link>
	
    // getItem('Form1', 'g1', null, [getItem('Rx View','1', [<Link to='/Rx-view'/>]), getItem('Rx Form','2', [<Link to='/Rx-form'/>],)], 'group'),
    // getItem('Item 2', 'g2', null, [getItem('NO', '3',[<Link to='/Rx-view'/>]), getItem('Option 4', '4',[<Link to='/Rx-form'/>])], 'group'),
  ),
  getItem(
    "Clinic-View",
    "ClinicView",
    <Link to="/Clinic" className="mb-1">
      <FolderViewOutlined />
    </Link>
	
    // getItem('Form1', 'g1', null, [getItem('Rx View','1', [<Link to='/Rx-view'/>]), getItem('Rx Form','2', [<Link to='/Rx-form'/>],)], 'group'),
    // getItem('Item 2', 'g2', null, [getItem('NO', '3',[<Link to='/Rx-view'/>]), getItem('Option 4', '4',[<Link to='/Rx-form'/>])], 'group'),
  ),
  getItem(
    "Clinic Form",
    "Clinic-form",
    <Link to="/Clinic-form" className="mb-1">
      <FormOutlined />
    </Link>
	
    // getItem('Form1', 'g1', null, [getItem('Rx View','1', [<Link to='/Rx-view'/>]), getItem('Rx Form','2', [<Link to='/Rx-form'/>],)], 'group'),
    // getItem('Item 2', 'g2', null, [getItem('NO', '3',[<Link to='/Rx-view'/>]), getItem('Option 4', '4',[<Link to='/Rx-form'/>])], 'group'),
  ),
//   getItem("Form", "sub2", <FormOutlined />, [
//     // getItem(
//     //   "Form1",
//     //   "g1",
//     //   null,
//     getItem("Rx Form", "2", [<Link to="/Rx-form" />]),
//     getItem("Clinic Form", "1", [<Link to="/Clinic-form" />]),

//     getItem("Candidate", "5", [<Link to="/Am-I-a-Candidate" />]),
//     // "group"
//     // ),
//     // getItem(
//     //   "Data View",
//     //   "g2",
//     //   null,
//     //   [

//     //   ],
//     //   "group"
//     // ),
//   ]),
//   getItem("Data View", "sub3", <DatabaseOutlined />, [
//     getItem("Rx-View", "3", [<Link to="/Rx-view" />]),
//     getItem("CLinic-View", "4", [<Link to="/Clinic" />]),

//     // getItem("Submenu", "sub4", null, [
//     //   getItem("Option 7", "7"),
//     //   getItem("Option 8", "8"),
//     // ]),
//   ]),
//   getItem("Navigation Three", "sub4", <SettingOutlined />, [
//     getItem("Option 9", "9"),
//     // getItem("Option 10", "10"),
//     // getItem("Option 11", "11"),
//     // getItem("Option 12", "12"),
//   ]),
];

const AsideMenu = () => {
//   const onClick = (e) => {
//     console.log("click ", e);
//   };
//   const [collapsed, setCollapsed] = useState(false);
//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

  return (
    <>
      {/* <Button
	  breakpoint="lg"
			type="primary"
            onClick={toggleCollapsed}
            style={{
              marginBottom: 5,
			  backgroundColor :`#001529`,
            }}
			>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button> */}
        <Sider
		collapsible
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {	
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
		  >
         
          <Menu
            defaultOpenKeys={["sub2"] + ["sub3"] + ["sub4"]}
            // inlineCollapsed={collapsed}
            theme="dark"
            mode="inline"
            // defaultSelectedKeys={['4']}
            items={items}></Menu>
        </Sider>
      
    </>
  );
};
export default AsideMenu;
