import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RxTable from "../Rx-Form-Data/Modules/RxTable";
import AsideMenu from '../Dashboard/Modules/Aside/AsideMenu'
import Header from '../Dashboard/Modules/Header/Header'
// import Content from '../Dashboard/Modules/Content/Content'
import Footer from '../Dashboard/Modules/Footer/Footer'
import { Col, Layout, Row } from 'antd';
// import Content from "../Dashboard/Modules/Content/Content";
const { Content } = Layout;
function RxFormData() {
  const navigate = useNavigate()
  useEffect(() => {
    
    if (!localStorage.getItem('token')) {
      navigate('/Login')
      document.title = 'Aligno-Rx-view';
    }
    document.title = 'Aligno-Rx-view';

  }, [])




  return (
    <>


<Layout>
   <AsideMenu/>
    <Layout>
      <Header />
      <Content style={{marginBottom:`500px`}}>
        <RxTable/>
      </Content>
      <Footer/>
     </Layout>
  </Layout>
       {/* <Layout>
<Header/>,
<Layout>
<Row gutter={[8, 8]}>
  <Col  style={{flex:` 0 0 0`}}  span={4} >
  <AsideMenu/>
  </Col>
  <Col span={20} >
  <Content>
    <RxTable/>
    </Content>
  </Col>
</Row>
</Layout>
<Footer/>,
</Layout> */}

    </>
  );
}
export default RxFormData;