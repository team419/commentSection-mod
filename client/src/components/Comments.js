import React from 'react';
import axios from 'axios';
import User from './User';
import CommentsUser from './CommentsUser';
import HelpfulBtn from './HelpfulBtn';
import css from '../styles.css';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsData: [], 
    };
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    const rest_id = Math.floor(Math.random() * 100);
    axios
      .get(`http://localhost:3001/api/restaurants/${rest_id}/reviews`)
      .then((data) => {
        this.setState({ reviewsData: data.data[0].reviews });
      })
      .catch((err) => {
        console.log('err: ' + err);
      });
  }

  render() {
    const { reviewsData } = this.state;
    let items = [];
    reviewsData.map(review => (
      items.push(
        <div className={css['container']}>
          <div className={css['profileSection']}>
            <User userData={review} />
          </div>
          <div className={css['commentsSection']}>
            <CommentsUser userData={review} />
          </div>
          <div className={css['helpfulButtonSection']}>
            <HelpfulBtn />
          </div>
        </div>
      )
    ));
    return <div>{items}</div>;
  }
}
