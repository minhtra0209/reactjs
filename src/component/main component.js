import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./menucomponent";
import Dishdetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      onDishSelect: null,
    };
  }
  onDishSelect(dishID) {
    this.setState({ onDishSelect: dishID });
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishID) => this.onDishSelect(dishID)}
        />
        <Dishdetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.onDishSelect
            )[0]
          }
        />
      </div>
    );
  }
}

export default Main;
