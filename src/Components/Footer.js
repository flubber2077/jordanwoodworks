import React from "react"
import email from '../Resources/svg/email.svg';
import phone from '../Resources/svg/phone.svg';
import fb from '../Resources/svg/fb.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    const svgFormat = { width: '3rem', height: '3rem' }

    return (
        <Container fluid='sm'>
            <Row>
                <Col>
                <h1>Contact</h1>
                <h4>Get in touch or request a quote for a custom piece at:</h4>
                </Col>

                <Col>
                    <h5 className="text-uppercase">Get In Touch</h5>
                    <ul className="list-unstyled text-start">
                        <li>
                            <Container fluid="true">
                                <Row>
                                    <Col><a href="https://www.facebook.com/JordanwoodworkNC/"><img src={fb} style={svgFormat} alt="icon of Facebook logo" /></a></Col>
                                    <Col><a href="tel:1-919-606-3782"><img fluid="true" src={phone} style={svgFormat} alt="icon of telephone" /></a></Col>
                                    <Col><a href="mailto:YOUREMAIL@EMAILADDRESS.com"><img fluid="true" src={email} style={svgFormat} alt="icon of mail for email" /></a></Col>
                                </Row>
                            </Container>
                        </li>
                        <li >
                            <a href="https://www.facebook.com/JordanwoodworkNC/"><p>facebook.com/JordanwoodworkNC/</p></a>
                        </li>
                        <li>
                            <a href="tel:1-919-606-3783"><p>919-606-3783</p></a>
                        </li>
                        <li>
                            <a href="mailto:YOUREMAIL@EMAILADDRESS.com"><p>ken@jordanwoodworks.com</p></a>
                        </li>

                    </ul>
                </Col>
                <Col>
                    <h5 className="text-uppercase">Sitemap</h5>
                    <ul className="list-unstyled">
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </Col>
            </Row>

            <div className="footer-copyright text-center py-3">
                © 2022 Copyright: Jordan Woodworks
            </div>
        </Container>
    )
}

export default Footer