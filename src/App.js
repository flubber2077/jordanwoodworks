// import './App.css';
import Gallery from './Components/Gallery';
import Container from 'react-bootstrap/Container';
import Contact from './Components/Contact';
import header from './Resources/header.jpeg';
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
      <Container>
        <Image fluid="true" rounded="true" src="https://images.squarespace-cdn.com/content/v1/57b6675ecd0f68c2b34451af/1538671696238-LU7IM3J91JJY8TV8SD0R/FJELSTEDNORD-69.jpg?format=1500w" />
      </Container>
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
