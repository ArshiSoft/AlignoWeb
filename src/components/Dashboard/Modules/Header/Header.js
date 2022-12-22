import { Layout, Menu, Col, Row, Space, Button } from "antd";
import React from "react";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import { MenuProps } from "antd";
import { removeToken } from "../../../../class/clsSession";
import { Link } from "react-router-dom";

const { Header } = Layout;
const items = [
  {
    label: "Profile",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "Logout",
    key: "3",
    icon: <LogoutOutlined />,
    onClick: () => removeToken(),
	
 },
];
const DashHeader = () => {
  return (
    <Layout>
      <Header
        className="site-layout-sub-header-background header"
        style={{
          padding: 0,
        }}>
        <Row gutter={[8, 16]}>
          <Col span={8} />
          <Col span={8}>
            <h3 className="title mt-3">Aligno</h3>
          </Col>
          <Col span={8} style={{ textAlign: `right` }}>
            {/* <Avatar
              size="large"
              style={{ backgroundColor: `#87d068`, marginRight: `10px` }}
              icon={<UserOutlined />}></Avatar> */}
            <Space direction="vertical">
              <Space wrap>
                <Dropdown
                  style={{ justifyContent: `center` }}
                  menu={{
                    items,
                  }}
                  placement="bottom">
                  <Avatar
                    size="large"
                    style={{ backgroundColor: `#87d068`, marginRight: `50px` }}
                    icon={<UserOutlined />}></Avatar>
                </Dropdown>
              </Space>
            </Space>
          </Col>

          {/* <Col span={8} />
						<Col span={8} />
						<Col span={8} /> */}
        </Row>
        <div className="profile"></div>
      </Header>
    </Layout>
  );
};
export default DashHeader;
