import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Gameboard from '../Resources/Gameboard.jpg'
import Chair from '../Resources/chair.jpg'
import Lamp from '../Resources/lamp.jpg'
import CoffeeTable from '../Resources/coffeetable.jpg'
import Table from '../Resources/table.jpg'
import Tabletop from '../Resources/tabletop.jpg'
import Spoons from '../Resources/spoons.jpg'
import Budvases from '../Resources/budvases.jpg'

export default function Gallery() {
    return (
        <Container id="gallery">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Gameboard}
                        alt="Handcrafted Wooden Gameboard"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Chair}
                        alt="Handcrafted wooden lawnchair outside"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Table}
                        alt="Handcrafted live-edge table in workshop"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Lamp}
                        alt="Steampunk style lamp"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={CoffeeTable}
                        alt="Live edge small coffee table in the sunlight"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Tabletop}
                        alt="Detail of coffee table top"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Spoons}
                        alt="Handmade Wooden Spoons"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Budvases}
                        alt="Small decorative wood and glass vases for a single flower"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}