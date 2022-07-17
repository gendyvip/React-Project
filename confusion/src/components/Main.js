import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import DishDetail from './DishDetail';
import Footer from './Footer'
import { DISHES } from '../Shared/dishes';
import { COMMENTS } from '../Shared/comments';
import { LEADERS } from '../Shared/leaders';
import { PROMOTIONS } from '../Shared/promotions';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES,
      comments:COMMENTS,
      leaders:LEADERS,
      promotions:PROMOTIONS
    }
  }
  render() {
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}  />
            );
          };
    return (
      <React.Fragment> 
      <Header />
    <Switch>
    <div className="container row-content">
      <Route path="/home" component={() => <Home dishes={this.state.dishes.filter((dish) => dish.featured)[0]}
      promotions={this.state.promotions.filter((promotion) => promotion.featured)[0]}
      leaders={this.state.leaders.filter((leader) => leader.featured)[0]} />}
      />
      <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
      <Route path='/menu/:id' component={DishWithId} />
      <Route exact path="/contact" component={() => <Contact />} />
      <Redirect to="/home" />
      </div>
    </Switch>
        <Footer />
        </React.Fragment>
    );
  }
}
export default Main;


