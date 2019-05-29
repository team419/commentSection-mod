import React from "react";
import css from "../styles.css";
export default class HelpfulBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "Was this review ...?",
      buttonUsefull: true,
      buttonFunny: true,
      buttonCool: true,
      show: false,
      click: 1
    };
    this.handleClickUseful = this.handleClickUseful.bind(this);
    this.handleClickFunny = this.handleClickFunny.bind(this);
    this.handleClickCool = this.handleClickCool.bind(this);
  }
  handleClickUseful() {
    this.setState({
      value: "Thanks for your vote!",
      buttonUsefull: !this.state.buttonUsefull
    });
  }
  handleClickFunny() {
    this.setState({
      value: "Thanks for your vote!",
      buttonFunny: !this.state.buttonFunny
    });
  }
  handleClickCool() {
    this.setState({
      value: "Thanks for your vote!",
      buttonCool: !this.state.buttonCool,
      vote: !this.state.vote
    });
  }
  render() {
    return (
      <div>
        <div className={css["thankYou"]}>{this.state.value}</div>
        <button
          type="submit"
          className={
            this.state.buttonUsefull ? css["buttonTrue"] : css["buttonFalse"]
          }
          onClick={this.handleClickUseful}
        >
          <span className={css["stypleButton"]}>
            <svg className={css["svgIcon"]} viewBox="0 0 18 18">
              <path d="M9 17c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM9 2C5.14 2 2 5.14 2 9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm2 8.392V12H7v-1.608a3.982 3.982 0 0 1-2-3.445 4 4 0 0 1 8 0c0 1.477-.81 2.752-2 3.445zM8 5.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm1.003 9.747h-.006A1.997 1.997 0 0 1 7 13h4a1.997 1.997 0 0 1-1.997 1.997z" />
            </svg>
            Useful
          </span>
        </button>
        <button
          type="submit"
          className={
            this.state.buttonFunny ? css["buttonTrue"] : css["buttonFalse"]
          }
          onClick={this.handleClickFunny}
        >
          <span className={css["styleButton"]}>
            <svg className={css["svgIcon"]} viewBox="0 0 18 18">
              <path d="M9 17c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM9 2C5.14 2 2 5.14 2 9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12a4.87 4.87 0 0 1-4.787-4h9.574A4.87 4.87 0 0 1 9 14zm2.5-5.625a1.376 1.376 0 1 1 0-2.75 1.376 1.376 0 0 1 0 2.75zm-5 0a1.376 1.376 0 1 1 0-2.75 1.376 1.376 0 0 1 0 2.75z" />
            </svg>
            Funny
          </span>
        </button>
        <button
          type="submit"
          className={
            this.state.buttonCool ? css["buttonTrue"] : css["buttonFalse"]
          }
          onClick={this.handleClickCool}
        >
          <span className={css["styleButton"]}>
            <svg className={css["svgIcon"]} viewBox="0 0 18 18">
              <path d="M9 17c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM9 2C5.14 2 2 5.14 2 9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm6.026 5.335C14.766 8.797 13.5 10 11.986 10h-.003c-1.218 0-2.282-.764-2.767-1.813-.088-.19-.344-.242-.432-.052C8.3 9.185 7.234 10 6.016 10h-.003C4.5 10 3.195 8.83 2.973 7.35l-.093-.84c-.053-.242.192-.51.477-.51h11.286c.294 0 .508.332.477.56l-.094.775zm-2.068 4.154A4.28 4.28 0 0 1 9 14.144a4.28 4.28 0 0 1-3.958-2.657A6.81 6.81 0 0 0 9 12.753a6.81 6.81 0 0 0 3.958-1.265z" />
            </svg>
            Cool
          </span>
        </button>
      </div>
    );
  }
}
