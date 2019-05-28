import React from "react";
import OnHover from "./OnHover.jsx";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <img
            className="userPic"
            src={this.props.data.userPicture}
            alt="Logo"
          />
        </div>
        <div className="userPro">
          <div className="userName">
            <span>{this.props.data.name}</span>
          </div>
          <div className="location">{this.props.data.location}</div>
          <ul className="userInfo">
            <li className="friendsIcon">
              <svg
                id="18x18_friends"
                height="20ps"
                viewBox="0 0 18 18"
                width="20px"
              >
                <g>
                  <path d="M7.904 9.43l-2.098 4.697a.9.9 0 0 1-1.612 0L2.096 9.43a.902.902 0 0 1 .806-1.305h4.196c.67 0 1.105.705.806 1.305zM5 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  <path
                    d="M15.904 9.43l-2.098 4.697a.89.89 0 0 1-.806.498.89.89 0 0 1-.806-.498L10.096 9.43a.902.902 0 0 1 .806-1.305h4.195c.67 0 1.106.705.807 1.305zM13 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    opacity=".502"
                  />
                </g>
              </svg>
              <text>{this.props.data.numFriends}</text>
              {"  "} friends
            </li>
            <li className="reviewIcon">
              <svg
                id="18x18_review"
                height="20px"
                viewBox="0 0 18 18"
                width="20px"
              >
                <path d="M13 3H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.505 9.643l-2.526-1.55L6.526 12.7 7 9.934 5 7.977l2.766-.404L8.97 4.7l1.264 2.873L13 7.977l-2 1.957.495 2.71z" />
              </svg>
              <text>{this.props.data.numReviews}</text>
              {"  "}reviews
            </li>
            <li className="photoIcon">
              <svg
                id="18x18_camera"
                height="20px"
                viewBox="0 0 18 18"
                width="20px"
              >
                <path d="M15 15H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zM9 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
              <text>{this.props.data.numPhotos}</text>
              {"  "}photos
            </li>
          </ul>
          <div className="elite">
            {this.props.data.elite ? "Elite '19" : ""}
          </div>
        </div>
        <OnHover data={this.props.data} />
      </div>
    );
  }
}

export default User;
