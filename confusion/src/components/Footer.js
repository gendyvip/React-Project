import { Link } from "react-router-dom";
import React from "react";

function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 offset-1 col-sm-2">
                            <ul className="list-unstyled">
                                <h5>Links</h5>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/menu">Menu</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-7 col-sm-5">
                            <h5>Our Address</h5>
                            <address>
                                121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                HONG KONG<br />
                                <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                                <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                                    confusion@food.net</a>
                            </address>
                        </div>
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center">
                                <a className="m-1" target="_blank" href="http://www.facebook.com/gendyvip"><i className="fab fa-facebook"></i></a>
                                <a className="m-1" target="_blank" href="http://www.instagram.com/gendyvip"><i className="fab fa-instagram"></i></a>
                                <a className="m-1" target="_blank" href="http://www.linkedin.com/in/gendyvip"><i className="fab fa-linkedin"></i></a>
                                <a className="m-1" target="_blank" href="http://twitter.com/gendyvip"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom row justify-content-center">
                <div className="col-auto">
                    <p>© Copyright 2018 Ristorante Con Fusion</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;