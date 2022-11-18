import { Layout, Menu ,Col ,Row } from 'antd';
import React from 'react';
import './Navbar.css'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import { SmileOutlined } from '@ant-design/icons';



const { Header, Footer, Sider, Content } = Layout;
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
	getItem('Navigation One', 'sub1', <MailOutlined />, [
		getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
		getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
	]),
	getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
		getItem('Option 5', '5'),
		getItem('Option 6', '6'),
		getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
	]),
	getItem('Navigation Three', 'sub4', <SettingOutlined />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),
		getItem('Option 11', '11'),
		getItem('Option 12', '12'),
	]),

];
const items2 = [
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



const Navbar = () => {
	const onClick = (e) => {
		console.log('click ', e);
	};
	return (
		<>
			<Layout>
				<Header className="header">
					<Row gutter={[8, 16]}>
						<Col span={8} />
						<Col span={8} >
							<h3 className='title mt-3'>Aligno</h3>
						</Col>
						<Col span={8} >
						<Avatar size="large" style={{ backgroundColor: `#87d068` }} icon={<UserOutlined />} />
						</Col>

						{/* <Col span={8} />
						<Col span={8} />
						<Col span={8} /> */}
					</Row>
					<div className="profile">

						

					</div>
				</Header>
				<Layout>
					<Sider className="sider" >
						<Menu
							onClick={onClick}
							style={{
								width: 256,
							}}
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							mode="inline"
							items={items}
						/>
					</Sider>
					<Content>Content</Content>
				</Layout>
				<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		</>
	)
}
export default Navbar;