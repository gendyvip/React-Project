import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalBody, ModalHeader, Row, Col, Label, Button,Form,FormGroup,Input } from "reactstrap";
import { LocalForm, Control,Errors } from 'react-redux-form';
const minLength = (val) => val && (val.length >= 3);
const maxLength = (val) => val && (val.length <= 15);
class CommentForm extends Component {
    constructor() {
        super();
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleComments = this.handleComments.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleComments(values){
        this.toggleModal(); 
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    render() {
        return (
            <>
            <Button onClick={this.toggleModal} outline><i class="fa-solid fa-pen-to-square"></i> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}><strong>Submit Comment</strong></ModalHeader>
            <ModalBody>
                <div className="container">
                <LocalForm onSubmit={(values) => this.handleComments(values)}>
                    <Row className="form-group">
                        <Label md={3} htmlFor="rating">
                            Rating
                        </Label>
                        <Col md={9}>
                            <Control.select className="form-control" model=".rating" id="rating" name="rating">
                                <option>Rating</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label md={3} htmlFor="author">Full Name</Label>
                        <Col md={9}>
                            <Control.text validators={{minLength,maxLength}}  className="form-control" model=".author" name="author" id="author" placeholder="Full Name" />
                            <Errors className="text-danger" show="touched" model=".author"
                            messages={{
                                minLength:"* Name Should be More than 3 Chars.\n",
                                maxLength:"* Name Should be Less than 15 Chars."
                            }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label md={3} htmlFor="comment">Comment</Label>
                        <Col md={9}>
                            <Control.textarea rows={6} className="form-control" model=".comment" name="comment" id="comment" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{ size: 3, offset: 3 }}>
                       <Button color='primary'>Submit</Button>
                       </Col>
                    </Row>
                </LocalForm>
                </div>
            </ModalBody>
        </Modal>
         </>
        );
    } 
}
function RenderDish({ dish }) {
    return (

        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );

}
function RenderComments({comments, addComment, dishId}) {
    const formatter = new Intl.DateTimeFormat("en", { year: "numeric", month: "short", day: "numeric" });
    const com = comments.map((comment) => {
        const date = new Date(comment.date)
        return (
            <ul className="list-unstyled">
                <li>{comment.comment}</li>
                <li>-- {comment.author} , {formatter.format(date)}</li>
            </ul>
            
        );
    }
    );
    return (
        <React.Fragment>
            <div>
                <h4>Comments</h4>
                {com}
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
        </React.Fragment>
    );
}
const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
                    </div>
                </div>
            </React.Fragment>
        );
    else
        return (<div ></div>);
}
export default DishDetail;
