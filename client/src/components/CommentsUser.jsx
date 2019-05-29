import React from "react";
import css from "../style.css";
export default class CommentsUser extends React.Component {
  constructor() {
    super();
  }
  render() {
    let userStars;
    if (this.props.data.stars === 1) {
      userStars = "oneStar";
    } else if (this.props.data.stars === 2) {
      userStars = "twoStar";
    } else if (this.props.data.stars === 3) {
      userStars = "threeStar";
    } else if (this.props.data.stars === 4) {
      userStars = "fourStar";
    } else {
      userStars = "fiveStar ";
    }
    return (
      <div className={css["reviewSection"]}>
        <div className={css["starandtime"]}>
          <div className={css[userStars]} />
          <div className={css["dateWriteen"]}>{this.props.data.date}</div>
        </div>
        <p className={css["userText"]}>{this.props.data.comments}</p>
      </div>
    );
  }
}
