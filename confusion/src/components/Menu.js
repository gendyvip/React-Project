import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom'

function RenderMenu({ dish }) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <RenderMenu dish={dish} />
            </div>
        );
    });
    return (
    <div className="row justify-content-center">
                <div className="col-12">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            </div>
            <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
                {menu}
            </div>
    );
}

export default Menu;