import React from "react";
import axios from "axios";
import User from "./User.jsx";
import OnHover from "./OnHover.jsx";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
    this.getReviews = this.getReviews.bind(this);
  }
  componentDidMount() {
    this.getReviews();
  }
  getReviews() {
    axios
      .get("/review_id")
      .then(data => {
        this.setState({ repos: data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div id="container">
        <User />
        <OnHover />
      </div>
    );

    // userpf section
    //onHoover section
    // comments/reviews
    // pictures url

    // userfull funny cool
  }
}

export default Comments;
