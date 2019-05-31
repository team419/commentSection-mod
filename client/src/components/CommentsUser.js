import React from 'react';
import css from '../styles.css';

const CommentsUser = (props) => {
  const starClassMap = {
    1: 'oneStar',
    2: 'twoStar',
    3: 'threeStar',
    4: 'fourStar',
    5: 'fiveStar',
  };
  const { userData } = props;

  return (
    <div className={css['reviewSection']}>
      <div className={css['starandtime']}>
        <div className={css[starClassMap[userData.stars]]} />
        <div className={css['dateWriteen']}>{userData.date}</div>
      </div>
      <p className={css['userText']}>{userData.comments}</p>
    </div>
  );
};
export default CommentsUser;
