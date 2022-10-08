import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./component/menucomponent";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
