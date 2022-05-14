import './App.css';
import 'antd/dist/antd.css';
import Home from './pages/home';
import { Row, Col, Button, Modal } from 'antd';
import { logo } from "./assets";
import { useState } from 'react';
import { HashRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleCancel(){
    setIsModalVisible(false);
  }

  return (
    <div className="App" style={{color: 'black'}}>
      <Router>
      <Row className='nav-bar'>
        <Col xs={{span: 12}} md={{span: 12}} align="left">
          <img src={logo} style={{width: '120px', marginTop: '-40px', transform: 'translate(0px, 23px)'}} alt="Alice Banting" />
        </Col>
        <Col xs={{span: 0}} md={{span: 12}} align="right">
          <NavLink to="/"><Button type="text">Home</Button></NavLink>
          <Button type="text" onClick={()=>{
            setIsModalVisible(true);
          }}>Yoga</Button>
          <NavLink to="/about"><Button type="text">About</Button></NavLink>
          <NavLink to="/contact"><Button type="text">Contact</Button></NavLink>
        </Col>
        <Col xs={{span: 12}} md={{span: 0}} align="right">
          Ham
        </Col>
      </Row>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Row style={{backgroundColor: '#E5F7FA', margin: '0px -110px', padding: '50px 110px', fontFamily: 'raleway', fontSize: '16px'}} className="onlyDesktop">
        <Col span={12} align="left">alicebanting.com</Col>
        <Col span={12} align="right">Instagram | Facebook</Col>
      </Row>
      {/* xs */}
      <Row style={{backgroundColor: '#E5F7FA', margin: '0px -30px', padding: '0px 20px', fontFamily: 'raleway', fontSize: '15px'}}>
        <Col style={{padding: '50px 0px'}} xs={{span: 12}} md={{span: 0}} align="left"> alicebanting.com </Col>
        <Col style={{padding: '50px 0px'}} xs={{span: 12}} md={{span: 0}} align="right">Instagram | Facebook</Col>
      </Row>

      <Modal
        width="100vw" 
        bodyStyle={{backgroundImage: 'linear-gradient(#EFF2EF, white)', margin: '0px 0px'}}
        title="" visible={isModalVisible} onCancel={handleCancel}
        footer={[]}
      >
       <div style={{height: '60vh', padding: '20vh 50px', fontFamily: 'playfair display'}}>
          <h1 style={{display: 'inline-block'}} 
          onMouseOver={(e)=>{
            e.target.style.color = "#AAA3A3";
          }} 
          onMouseOut={(e)=>{
            e.target.style.color = "black";
          }} 
          className="buttonLink">Classes</h1>
          <hr style={{borderTop: '1px solid #D0D0D0'}} />
          <h1
          onMouseOver={(e)=>{
            e.target.style.color = "#AAA3A3";
          }} 
          onMouseOut={(e)=>{
            e.target.style.color = "black";
          }} 
          style={{display: 'inline-block'}} className="buttonLink">Retreat</h1>
       </div>
      </Modal> 
    </div>
  );
}

export default App;
