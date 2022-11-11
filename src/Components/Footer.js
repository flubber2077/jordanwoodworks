import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Talk to ken about whether to obscure phone number and email or not</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Sitemap</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Gallery</a></li>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">Contact</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">External Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Facebook</a></li>
                    <li><a href="#!">Whatever else he uses</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">
        © 2020 Copyright: Jordan Woodworks
    </div>

</footer>

export default Footer