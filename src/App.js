import React, { Component } from "react";
import "./App.css";
import { Navbar, navbarBrand } from "reactstrap";
import Menu from "./component/menucomponent";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <navbarBrand href="/">Ristorante Con Fusion</navbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
