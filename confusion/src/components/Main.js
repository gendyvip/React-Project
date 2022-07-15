import React, { Component } from 'react';
import Home from './Home';
import Header from './Header'
import Menu from './Menu';
import DishDetail from './DishDetail';
import Footer from './Footer'
import { DISHES } from '../Shared/dishes';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }
  render() {
    return (
      <React.Fragment> 
      <Header />
    <Switch>
    <div className="container row-content">
      <Route path="/home" component={() => <Home />} />
      <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
      <Redirect to="/home" />
      </div>
    </Switch>
        <Footer />
        </React.Fragment>
    );
  }
}
export default Main;


/*   
 onDishSelect(dishID) {
    this.setState({ selectedDish: dishID })
  }

          <Menu dishes={this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)} />
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      
        */