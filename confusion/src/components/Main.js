import React, { Component } from 'react';
import Header from './Header'
import Menu from './Menu';
import DishDetail from './DishDetail';
import Footer from './Footer'
import { DISHES } from '../Shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }
  onDishSelect(dishID) {
    this.setState({ selectedDish: dishID })
  }
  render() {
    return (
      <React.Fragment> 
      <Header />
        <div className="container">
          <Menu dishes={this.state.dishes} onClick={(dishID) => this.onDishSelect(dishID)} />
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
        <Footer />
        </React.Fragment>
    );
  }
}
export default Main;