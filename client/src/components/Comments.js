import React from "react";
import axios from "axios";
import User from "./User";
import CommentsUser from "./CommentsUser";
import HelpfulBtn from "./HelpfulBtn";
import user from "../../../exampleData.js";
import css from "../styles.css";

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
      .then(data => {
        this.setState({ repos: data["data"] });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let items = this.state.repos.map(i => (
      <div className={css["container"]}>
        <div className={css["profileSection"]}>
          <User data={i} />
        </div>
        <div className={css["commentsSection"]}>
          <CommentsUser data={i} />
        </div>
        <div className={css["helpfulButtonSection"]}>
          <HelpfulBtn data={i} />
        </div>
      </div>
    ));
    return <div>{items}</div>;
  }
}
