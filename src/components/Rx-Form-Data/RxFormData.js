import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RxTable from "../Rx-Form-Data/Modules/RxTable";
import AsideMenu from '../Dashboard/Modules/Aside/AsideMenu'
import Header from '../Dashboard/Modules/Header/Header'
// import Content from '../Dashboard/Modules/Content/Content'
import Footer from '../Dashboard/Modules/Footer/Footer'
import { Col, Layout, Row } from 'antd';
import DashContent from "../Dashboard/Modules/Content/Content";
function RxFormData() {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'Aligno-Rx-view';
    if (!localStorage.getItem('token')) {
      navigate('/Login')
    }

  }, [])




  return (
    <>
       <Layout>
<Header/>,
<Layout>
<Row gutter={[8, 8]}>
  <Col span={4} >
  <AsideMenu/>
  </Col>
  <Col span={20} >
  <DashContent>
    
    <RxTable/>
    
 
    </DashContent>
  </Col>
</Row>
</Layout>
<Footer/>,
</Layout>

    </>
  );
}
export default RxFormData;