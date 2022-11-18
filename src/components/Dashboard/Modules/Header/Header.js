import { Layout, Menu ,Col ,Row } from 'antd';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';



const { Header } = Layout;



const DashHeader = ()=>{
    return(
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
                </Layout>
    )
}
export default DashHeader;