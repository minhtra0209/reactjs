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
            <CardBody>
              <CardTitle>Họ và tên: {staff.name}</CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yy")}
              </CardText>
              <CardText>
                Ngày vao Cong ty: {dateFormat(staff.startDate, "dd/mm/yy")}
              </CardText>
              <CardText>Phòng ban: {staff.department.name}</CardText>
              <CardText>So ngay nghi con lai: {staff.annualLeave}</CardText>
              <CardText>So ngay lam them: {staff.overTime}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  render() {
    //console.log(this.props.staffs);
    const staffList = this.props.staffs.map((staff) => {
      return (
        <div className={this.state.comlumnDefault}>
          <Card key={staff.id} onClick={() => this.onSelectedStaff(staff)}>
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row m-3">
          <button
            onClick={() => this.onComlumnSelect("col-md-2 mt-1")}
            className="btn btn-success mr-3"
          >
            6 cot
          </button>
          <button
            onClick={() => this.onComlumnSelect("col-md-3 mt-1")}
            className="btn btn-success mr-3"
          >
            4 cot
          </button>
          <button
            onClick={() => this.onComlumnSelect("col-md-4 mt-1")}
            className="btn btn-success mr-3"
          >
            3 cot
          </button>
          <button
            onClick={() => this.onComlumnSelect("col-md-6 mt-1")}
            className="btn btn-success mr-3"
          >
            2 cot
          </button>
          <button
            onClick={() => this.onComlumnSelect("col-md-12 mt-1")}
            className="btn btn-success mr-3"
          >
            1 cot
          </button>
        </div>
        <div className="row">{staffList}</div>
        <div className="row mt-5">
          {this.renderStaff(this.state.onSelectedStaff)}
        </div>
      </div>
    );
  }
}
export default StaffList;
