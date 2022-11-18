import { Layout, Menu, Col, Row } from 'antd';
import React from 'react';
import RxTable from '../../../Rx-Form-Data/Modules/RxTable';


const { Content } = Layout;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const DashContent = () => {
    return (
        <>
            <Layout>
                <Content 
                className="site-layout-background"
                    style={{
                        padding: 10,
                        margin: 0,
                        minHeight: 500,
                    }}
                    >

                </Content>
            </Layout>
        </>
    )
}
export default DashContent;