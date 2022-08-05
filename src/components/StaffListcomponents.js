import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import dateFormat from "dateformat";
class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onSelectedStaff: null,
      comlumnDefault: "col-12 col-md-6 col-lg-4 mt-3",
    };
  }
  onSelectedStaff(staff) {
    this.setState({ onSelectedStaff: staff });
  }
  onComlumnSelect(col) {
    this.setState({ comlumnDefault: col });
  }
  renderStaff(staff) {
    if (staff != null) {
      return (
        <div className="col-12">
          <Card>
            <CardImg width="100%" src={staff.image} alt={staff.name} />
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    const staffList = this.props.staff.map((staff) => {
      return (
        <div className={this.state.comlumnDefault}>
          <Card key={staff.id} oncLick={() => this.onSelectedStaff(staff)}>
            <CardBody>
              <CardTitle> {staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });
  }
}
export default StaffList;
