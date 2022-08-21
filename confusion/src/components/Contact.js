import React, { useState, Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Label, Input, Col, Form, FormGroup, Row, Button, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { LocalForm, Control, Errors } from 'react-redux-form';

const Required = (val) => val && val.length ;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(val);
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            countrycode:" "
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.ChangeCountryCode = this.ChangeCountryCode.bind(this);
    }
    ChangeCountryCode() {
        this.setState({ 
            countrycode:this.state.countrycode
        });
    }
    handleSubmit(values) {
        alert("Current State is: " + JSON.stringify(values));
    }
    render() {
        return (
            
            <React.Fragment>
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/home">Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                                Contact
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>Location Information</h3>
                        </div>
                        <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                                121, Clear Water Bay Road<br />
                                Clear Water Bay, Kowloon<br />
                                HONG KONG<br />
                                <i className="fa fa-phone"></i>: +852 1234 5678<br />
                                <i className="fa fa-fax"></i>: +852 8765 4321<br />
                                <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                        </div>
                        <div className="col-12 col-sm-6 offset-sm-1">
                            <h5>Map of our Location</h5>
                        </div>
                        <div className="col-12 col-sm-11 offset-sm-1">
                            <div className="btn-group" role="group">
                                <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                                <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                                <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                            </div>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-12">
                            <h3>
                                Contact Us
                            </h3>
                        </div>
                        <div className="col-12 col-md-9">
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="firstname" md={2}>First Name</Label>
                                    <Col md={8}>
                                        <Control.text model=".firstname" className="form-control"  type="text" id="firstname" name="firstname"
                                            placeholder="First Name" validators={{Required}} 
                                        />
                                        <Errors className="text-danger" model=".firstname" show="touched"
                                        messages={{
                                            Required:'* First Name Field Should Not be Empty',
                                        }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastname" md={2}>Last Name</Label>
                                    <Col md={8}>
                                        <Control.text  model=".lastname" className="form-control"  type="text" id="lastname" name="lastname"
                                            placeholder="Last Name" validators={{Required}}
                                        />
                                        <Errors className="text-danger" model=".lastname" show="touched"
                                        messages={{
                                            Required:"* Last Name Field Should Not be Empty"
                                        }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={8}>
                                        <Control.text  model=".email" className="form-control" type="email" id="email" name="email"
                                            placeholder="Email" validators={{Required,validEmail}} />
                                             <Errors className="text-danger" model=".email" show="touched"
                                        messages={{
                                            Required:"* ",
                                            validEmail:"Email Field Should be in the form **@**.**"
                                        }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="phone" md={2}>Phone</Label>
                                    <PhoneInput className="col-1"
                                        country={'us'}
                                        value={this.state.countrycode}
                                        onChange={this.ChangeCountryCode}
                                    />
                                    <br></br>
                                    <Col md={7} sm="7">
                                        <Control.text  model=".phone" className="form-control" id="phone" name="phone"
                                            placeholder="Phone" validators={{Required,isNumber}} />
                                             <Errors className="text-danger" model=".phone" show="touched"
                                        messages={{
                                            Required:"* ",
                                            isNumber:"Phone Field Should Contain Numbers Only"
                                        }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{ size: 4, offset: 2 }}>
                                        <div className="form-check">
                                            <Label check>
                                                <Control.checkbox model=".agree"
                                                    name="agree"
                                                    className="form-check-input"/>
                                                <p>May we contact you?</p>
                                            </Label>
                                        </div>
                                    </Col>
                                    <Col md={{ size: 3, offset: 1 }}>
                                        <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                            <option>Phone</option>
                                            <option>Email</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                        <Label htmlFor="message" md={2}>Message</Label>
                                        <Col md={8}>
                                            <Control.textarea  model=".message" className="form-control" id="message" name="message" validators={{Required}} />
                                            <Errors className="text-danger" model=".message" show="touched"
                                        messages={{
                                            Required:"* Message Field Should Not be Empty"
                                        }}
                                        />
                                        </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col md={{ size: 4, offset: 2 }}>
                                        <Button type="submit" color="primary">Submit</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;
/*
                                    */