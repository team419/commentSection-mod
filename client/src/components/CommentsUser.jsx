import React from "react";
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
      <div className="reviewSection">
        <div className="starandtime">
          <div className={userStars} />
          <div className="dateWritten">{this.props.data.date}</div>
        </div>
        <p className="userText">{this.props.data.comments}</p>
      </div>
    );
  }
}
export default CommentsUser;
