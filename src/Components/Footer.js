import React from "react"
import email from '../Resources/email.svg';
import phone from '../Resources/phone.svg';
import fb from '../Resources/fb.svg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    const svgFormat = { width: '3rem', height: '3rem' }

    return (
        <footer className="page-footer font-small blue pt-4">
            <Container>
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>Talk to ken about whether to obscure phone number and email or not</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Sitemap</h5>
                            <ul className="list-unstyled">
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Get In Touch</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Container fluid="true">
                                        <Row>
                                            <Col><a href="https://www.facebook.com/JordanwoodworkNC/"><img src={fb} style={svgFormat} /></a></Col>
                                            <Col><a href="tel:1-919-606-3782"><img fluid="true" src={phone} style={svgFormat} /></a></Col>
                                            <Col><a href="mailto:YOUREMAIL@EMAILADDRESS.com"><img fluid="true" src={email} style={svgFormat} /></a></Col>
                                        </Row>
                                    </Container>
                                </li>
                                <li >
                                    <a href="https://www.facebook.com/JordanwoodworkNC/"><p>facebook.com/JordanwoodworkNC/</p></a>
                                </li>
                                <li>
                                    <a href="tel:1-919-606-3782"><p>919-606-3782</p></a>
                                </li>
                                <li>
                                    <a href="mailto:YOUREMAIL@EMAILADDRESS.com"><p>ken@jordanwoodworks.com</p></a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">
                    © 2022 Copyright: Jordan Woodworks
                </div>
            </Container>
        </footer>
    )
}

export default Footer