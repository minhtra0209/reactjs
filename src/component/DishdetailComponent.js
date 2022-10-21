import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
function RenderComment({ comments }) {
  if (comments != null) {
    return (
      <div className="col-12 col-md-5 m-2">
        <h4>comments</h4>
        <ul className="list-unstyled">
          {comments.comments.map((comment) => {
            return (
              <div key={comment._id}>
                <li>
                  <p>comment : {comment.comment}</p>
                  <p>{comment.rating} stars</p>
                  <p>{comment.author}</p>
                  <p>
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
const Dishdetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComment comments={props.dish} />
        </div>
      </div>
    );
  } else
    return (
      <div>
        <p></p>
      </div>
    );
};

export default Dishdetail;
