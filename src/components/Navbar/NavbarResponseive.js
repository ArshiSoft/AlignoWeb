import React, { useState } from "react";
import { Layout, Button, Drawer, Dropdown } from "antd";
import LeftMenu from "./Modules/LeftMenu";
import { useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import './Navbar2.css'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import {  Space } from 'antd';




const items = [
	
	{
		key: '1',
		label: (
			<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
				1st menu item
			</a>
		),
	},
	{
		key: '2',
		label: (
			<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
				2nd menu item 
				{/* (disabled) */}
			</a>
		),
		icon: <SmileOutlined />,
		disabled: true,
	},
	{
		key: '3',
		label: (
			<a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
				3rd menu item
				 {/* (disabled) */}
			</a>
		),
		disabled: true,
	},
	{
		key: '4',
		danger: true,
		label: 'Logout',
		
		
	}
		
];

const Navbar2 = () => {
	
	const [visible, setVisible] = useState(false);
	const showDrawer = () => {
		setVisible(!visible);
	};

	// If you do not want to auto-close the mobile drawer when a path is selected
	// Delete or comment out the code block below
	// From here
	let { pathname: location } = useLocation();
	useEffect(() => {
		setVisible(false);
	}, [location]);
	// Upto here

	return (
		<nav className="navbar">
			<Layout>
				<Layout.Header   className="nav-header">
					<div className="navbar-menu">
						<div className="leftMenu " >
							<LeftMenu mode={"horizontal"} />
						</div>
						<Button className="menuButton" type="text" onClick={showDrawer}>
							<MenuOutlined />
						</Button>

						{/* <div className="rightMenu">
              <RightMenu mode={"horizontal"} />
            </div> */}
						<Drawer
							title={"Brand Here"}
							placement="left"
							closable={true}
							onClose={showDrawer}
							visible={visible}
							style={{ zIndex: 99999 }}
						>
							<LeftMenu mode={"inline"} />
							{/* <RightMenu mode={"inline"} /> */}
						</Drawer>
						{/* <div className="logo" >
						<h3 className="brand-font">Brand Here</h3>
					</div> */}
					</div>
					{/* <div className="logo" >
						<h3 className="brand-font">Brand Here</h3>
					</div> */}
					<div className="profile">
						<Dropdown
							menu={{
								items,
							}}
							trigger={['click']}
						>
							<Avatar size="large" onClick={(e) => e.preventDefault()} icon={<UserOutlined />} > 
							<Space>
								<DownOutlined />
							</Space></Avatar>
						</Dropdown>
					</div>
				</Layout.Header>
			</Layout>
		</nav>
	);
};

export default Navbar2;