import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

export default function Gallery() {
    return (
        <Container fluid="md">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1266344041/photo/3d-rendering-of-rough-edge-plank-dining-table.jpg?s=1024x1024&w=is&k=20&c=JJy_PH5i89aB1hmlcAIte_KbvJOeY7YXLkgvbx3IFxc="
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1308740147/photo/wood-tv-cabinet-interior-wall-mockup-in-modern-empty-room-minimal-design.jpg?s=1024x1024&w=is&k=20&c=_WgpEvXYwuPLk7dbEovZ8HiuFEhaAjKYhccWKsUAtIc="
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1142107638/photo/pink-and-white-peonies-in-vases-on-wooden-side-table.jpg?s=1024x1024&w=is&k=20&c=d3dpKSVRljV6vOoVbHkJRC_aquDoUiW_nyabblmfZus="
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}