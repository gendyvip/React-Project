import React, { useState, Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Label, Input, Col, Form, FormGroup, Row, Button, FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { tire } from 'fontawesome';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            phone: "",
            countrycode:"",
            email: "",
            agree: false,
            contactType: "",
            message: "",
            touched: {
                firstname: false,
                lastname: false,
                phone: false,
                email: false,
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handeInputChange = this.handeInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, phone, email) {
        const errors = {
            firstname: "",
            lastname: "",
            phone: "",
            email: ""
        }
        if (this.state.touched.firstname && firstname == '')
            errors.firstname = "First Name Box Should not be Blank";
        if (this.state.touched.lastname && lastname == '')
            errors.lastname = "Last Name Box Should not be Blank";
        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = "Email Box Should Contain '@'"
            const reg = /^\d+$/;   
        if (this.state.touched.phone &&!reg.test(phone))
            errors.phone = "Phone Box Should Contain Only Numbers"
        return errors;
    }
    handeInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        alert("Current State is: " + JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.phone, this.state.email);
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
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstname" md={2}>First Name</Label>
                                    <Col md={8}>
                                        <Input onBlur={this.handleBlur('firstname')} onChange={this.handeInputChange} type="text" id="firstname" name="firstname"
                                            placeholder="First Name"
                                            valid={this.state.firstname !== ''}
                                            invalid={errors.firstname !== ''}
                                            value={this.state.firstname}
                                        />
                                        <FormFeedback>
                                            {errors.firstname}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastname" md={2}>Last Name</Label>
                                    <Col md={8}>
                                        <Input onBlur={this.handleBlur('lastname')} onChange={this.handeInputChange} type="text" id="lastname" name="lastname"
                                            placeholder="Last Name"
                                            valid={this.state.lastname !== ''}
                                            invalid={errors.lastname !== ''}
                                            value={this.state.lastname}
                                        />
                                        <FormFeedback>
                                            {errors.lastname}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={8}>
                                        <Input onBlur={this.handleBlur('email')} onChange={this.handeInputChange} type="email" id="email" name="email"
                                            placeholder="Email"
                                            valid={this.state.email !== ''}
                                            invalid={errors.email !== ''}
                                            value={this.state.email} />
                                        <FormFeedback>
                                            {errors.email}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="phone" md={2}>Phone</Label>
                                    <PhoneInput className="col-1"
                                            country={'us'}
                                            value={this.state.countrycode}
                                            onChange={countrycode => this.setState({ countrycode })}
                                        />
                                        <br></br>
                                        <Col md={7} sm="7">
                                        <Input onBlur={this.handleBlur('phone')} onChange={this.handeInputChange} type="tel" id="phone" name="phone"
                                            placeholder="Phone"
                                            valid={this.state.phone !== ''}
                                            invalid={errors.phone !== ''}
                                            value={this.state.phone} />
                                        <FormFeedback>
                                            {errors.phone}
                                        </FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{ size: 4, offset: 2 }}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input onChange={this.handeInputChange} type="checkbox"
                                                    name="agree"
                                                    checked={this.state.agree}
                                                /> {' '}
                                                <p>May we contact you?</p>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={{ size: 3, offset: 1 }}>
                                        <Input onChange={this.handeInputChange} type="select" name="contactType"
                                            value={this.state.contactType}
                                        >
                                            <option>Phone</option>
                                            <option>Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Label htmlFor="message" md={2}>Message</Label>
                                        <Col md={8}>
                                            <Input onChange={this.handeInputChange} type="textarea" id="message" name="message" value={this.state.message} />
                                        </Col>
                                    </Row>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{ size: 4, offset: 2 }}>
                                        <Button type="submit" color="primary">Submit</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;