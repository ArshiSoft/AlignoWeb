import { Layout, Menu ,Col ,Row } from 'antd';
import React from 'react';


const { Footer } = Layout;



const DashFooter = ()=>{
    return(
        <>
        <Layout>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </>
    )
}
export default DashFooter;