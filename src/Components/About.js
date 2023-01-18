import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Cuttingboard from '../Resources/cuttingboard.jpg'

export default function About() {
    return (
        <Container fluid="sm" id="about" bg="dark">
            <div className="about">
                <h1>About</h1>
                <h4>
                Ken Jordan makes artisan, unique and custom furniture, steam punk lamps, bud vases, and spoons out of hardwoods. He collaborates with the customer one-on-one in order to deliver a product that meets excellence and top-quality craftsmanship in North Carolina and beyond.
                </h4>
                <p></p>
            </div>
            <Image fluid="true" rounded="true" src={Cuttingboard} />
        </Container>
    )
}