import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";

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

function RenderComments({ comments }) {
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
        <div>
            <h4>Comments</h4>
            {com}
        </div>
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
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </React.Fragment>
        );
    else
        return (<div ></div>);
}
export default DishDetail;