import { Layout, Menu ,Col ,Row } from 'antd';
import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined,DashboardOutlined } from '@ant-design/icons';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const {  Sider,Content } = Layout;

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


const AsideMenu = ()=>{
    const onClick = (e) => {
		console.log('click ', e);
	};
    return (
        <>
        <Layout>
					<Sider className="sider" >
						<Menu
							onClick={onClick}
							style={{
								width: 200,
							}}
							// defaultSelectedKeys={['Dash']}
							// defaultOpenKeys={['Dash']}
							mode="inline"
							items={items}
						/>
					</Sider>
				
				</Layout>
        </>
    )
}
export default AsideMenu;