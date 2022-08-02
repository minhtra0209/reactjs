import React, { Component } from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { STAFFS } from "./list/staffs";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand>Ứng dụng quản lý nhân sự</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
