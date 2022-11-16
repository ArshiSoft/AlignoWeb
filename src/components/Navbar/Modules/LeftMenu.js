import React from "react";
import { Menu } from 'antd';
import { Link } from "react-router-dom";


const LeftMenu = ({ mode }) => {

  return (
    <Menu mode={mode}>
      <Menu.Item key="Dashbaord">Dashboard<Link to='/'> </Link></Menu.Item>
      <Menu.Item key="Rx-Form">Rx Form<Link to='/Rx-form'> </Link></Menu.Item>
      <Menu.Item key="Rx-View">Rx View<Link to='/Rx-view'> </Link></Menu.Item>
      <Menu.Item key="Am I a Candidate">Am I a Candidate<Link to='/am-I-a-Candidate'> </Link></Menu.Item>
      <Menu.Item key="about">About Us</Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
      
    </Menu>
  );
};

export default LeftMenu;