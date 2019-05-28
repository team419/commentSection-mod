import React from "react";
export default class CommentsUser extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="reviewSection">
        <span>
          <img
            className="starsIcon"
            src="https://dealercarsearch.com/DealerImages/9828/Yelp%205%20stars.png"
          />
        </span>
        <span className="dateWritten">{this.props.data.date}</span>
        {/* comments */}
        <p className="userText">{this.props.data.comments}</p>
      </div>
    );
  }
}
export default CommentsUser;
