import { Layout, Menu, Col, Row } from "antd";
import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
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
    <Avatar className="ml-5" size="large" icon={<UserOutlined />} />,
    [ getItem("Logout",  "", <LogoutOutlined  onClick={() => { 
		removeToken();
		// <Link to="/Login"></Link>
          }}
        />
      ),
    ]
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
  getItem("Form", "sub2", <MailOutlined />, [
    getItem(
      "Form1",
      "g1",
      null,
      [
        getItem("Clinic Form", "1", [<Link to="/Clinic-form" />]),
        getItem("Rx Form", "2", [<Link to="/Rx-form" />]),
      ],
      "group"
    ),
    getItem(
      "Data View",
      "g2",
      null,
      [
        getItem("Rx-View", "3", [<Link to="/Rx-view" />]),
        getItem("CLinic-View", "4", [<Link to="/Clinic" />]),
      ],
      "group"
    ),
  ]),
  getItem("Candidate", "sub3", <AppstoreOutlined />, [
    getItem("Candidate", "5", [<Link to="/Am-I-a-Candidate" />]),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub4", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Navigation Three", "sub5", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

const AsideMenu = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          // defaultSelectedKeys={['4']}
          items={items}></Menu>
      </Sider>
    </>
  );
};
export default AsideMenu;
