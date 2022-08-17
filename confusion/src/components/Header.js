import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Jumbotron, Collapse, Form, FormGroup, Label, Input, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }
    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    render() {
        return (
            <React.Fragment>
                <Navbar dark className="nav-dark" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}></NavbarToggler>
                        <NavbarBrand href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion" />
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
                             <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                      <Form onSubmit={this.handleLogin}> 
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input placeholder="Username" type="text" name="username" id="username" 
                            innerRef={(input) => this.username= input}
                            />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="password">Username</Label>
                            <Input placeholder="Password" type="text" name="password" id="password" 
                            innerRef={(input) => this.password= input}
                            />
                        </FormGroup>
                        <FormGroup check>
                        <Label check> 
                        <Input type="checkbox" name="remember" 
                            innerRef={(input) => this.password= input}
                            /> Remember Me
                            </Label>
                        </FormGroup>
                      </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}
export default Header;