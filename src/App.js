// import './App.css';
import Gallery from './Components/Gallery';
import header from './Resources/banner.jpg';
import About from './Components/About';
import Image from 'react-bootstrap/Image';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './scss/custom.scss';

function App() {
  return (
    <div className="App">
      <Image d="header" fluid="true" src={header} alt="Close up picture of end wood grain, with splits running through the grain"/>
      <Navbar />
      <p></p>
      <Row className="justify-content-md-center"><Col md={6}><Gallery /></Col>
      </Row>
        <About />
        <p></p>
        <Footer />
      
    </div>
  );
}

export default App;
