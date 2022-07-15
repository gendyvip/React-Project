import { Navbar, NavbarBrand,Nav,NavbarToggler,NavItem, Jumbotron, Collapse } from 'reactstrap';
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import fa from 'fontawesome';

class Header extends Component {
    constructor(props){
        super(props)
        this.state={isNavOpen:false}
        this.toggleNav  = this.toggleNav.bind(this);
    }
    toggleNav(){
        this.setState({isNavOpen:!this.state.isNavOpen});
    }
    render() {
        return (
            <React.Fragment> 
            <Navbar dark className="nav-dark" expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                    <NavbarBrand href="/">
                        <img src="assets/images/logo.png" height="30" width="41"  alt="Ristorante Con Fusion" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar> 
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                            <i class="fa-solid fa-house fa-lg"></i> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className="nav-link" to="/about">
                        <i class="fa-solid fa-circle-info fa-lg"></i> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className="nav-link" to="/menu">
                        <i class="fa-solid fa-clipboard-list fa-lg"></i> Menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink className="nav-link" to="/contact">
                        <i class="fa-solid fa-address-card fa-lg"></i> Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron className="Jumbotron">
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Ristorante Con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                    </div>
                </div>
        
            </div>
        </Jumbotron>
        </React.Fragment>
        );
    }
}
export default Header;

