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
            <Layout style={{marginBottom:`500px`}}>
                <Content 
                // className="site-layout-background"
                //     style={{
                //         padding: 10,
                //         // margin: 0,
                //         minHeight: 500,
                //         margin: '24px 16px 0',
                //     }}
                style={{
                    // margin: `24px 16px 0`,
                    // padding : 100,      
                  
                  }}
                >
                  <div
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      minHeight: 360,
                    }}
                    >
  </div>
                </Content>
            </Layout>
        </>
    )
}
export default DashContent;