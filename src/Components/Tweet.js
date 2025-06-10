import React from 'react';
import './Tweet.css';

const Tweet = ({ tweet }) => {
  const parsedDate = new Date(tweet.createdAt).toLocaleDateString('ko-kr', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return (
    <li className="tweet" id={tweet.id}>
      <div className="tweet__profile">
        <img src={tweet.picture} alt={`${tweet.username}'s profile`} />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            <span className="tweet__username">{tweet.username}</span> {/* 유저 이름 */}
            <span className="tweet__createdAt">{parsedDate}</span> {/* 트윗 생성 일자 */}
          </div>
        </div>
        <div className="tweet__message">
          {tweet.content} {/* 트윗 메시지 */}
        </div>
      </div>
    </li>
  );
};

export default Tweet;