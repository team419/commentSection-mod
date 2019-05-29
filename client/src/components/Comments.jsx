import React from "react";
import axios from "axios";
import User from "./User.jsx";
import CommentsUser from "./CommentsUser.jsx";
import HelpfulBtn from "./HelpfulBtn.jsx";
import user from "../../../exampleData.js";

export default class Comments extends React.Component {
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
      .then(
        data => {
          console.log("here is the data", data["data"]);
          this.setState({ repos: data["data"] });
        },
        data => {
          console.log("data", data["data"]);
        }
      )
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    var items = this.state.repos.map(i => (
      <div className="container">
        <div className="profileSection">
          <User data={i} />
        </div>
        <div className="commentsSection">
          <CommentsUser data={i} />
        </div>
        <div className="helpfulButtonSection">
          <HelpfulBtn data={i} />
        </div>
      </div>
    ));
    return <div>{items}</div>;
  }
}
