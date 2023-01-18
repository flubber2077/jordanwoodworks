// import './App.css';
import Gallery from './Components/Gallery';
import Container from 'react-bootstrap/Container';
import Contact from './Components/Contact';
import header from './Resources/banner.jpg';
import headerSmall from './Resources/headerSmall.jpeg';
import About from './Components/About';
import Image from 'react-bootstrap/Image';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import './scss/custom.scss';

function App() {
  return (
    <div className="App">
      <Image id="" fluid="true" src={header} alt="Close up picture of end wood grain, with splits running through the grain"/>
      <Navbar />
      <Gallery />
      <About />
      <Footer />
    </div>
  );
}

export default App;
