import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="userPic">
          <img
            src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/999/UP0151-CUSA09971_00-AV00000000000001/1553247430000/image?w=480&h=480&bg_color=000000&opacity=100&_version=00_09_000"
            alt="Logo"
          />
        </div>
        <div className="userPro">
          <div className="userName">
            <span>Daniel L.</span>
          </div>
          <div className="location">San Francisco, Ca</div>
          <ul className="userInfo">
            <li>52 friends</li>
            <li>4 reviews</li>
            <li>500 photos</li>
          </ul>
          <div className="elite">Elite '19</div>
        </div>
      </div>
    );
  }
}

export default User;
