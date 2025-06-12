import React, { useState, useEffect } from 'react';
import Tweet from '../Components/Tweet';
import Footer from '../Footer';
import dummyTweets from '../static/dummyData'; 

const Tweets = () => {
  
  const [tweets, setTweets] = useState(() => {
    const savedTweets = localStorage.getItem('tweets');
    return savedTweets ? JSON.parse(savedTweets) : dummyTweets;
  });
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('tweets', JSON.stringify(tweets));
  }, [tweets]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !message.trim()) return;

    const newTweet = {
      id: Date.now().toString(),
      username,
      content: message,
      createdAt: new Date().toISOString(),
      picture: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png', 
    };

    setTweets([newTweet, ...tweets]);
    setUsername('');
    setMessage('');
  };

  return (
    <section>
      <form className="tweetForm" onSubmit={handleSubmit}>
        <input
          className="tweetForm__input--username"
          type="text"
          placeholder="유저 이름"
          value={username}
          onChange={handleUsernameChange}
        />
        <textarea
          className="tweetForm__input--message"
          placeholder="트윗을 입력하세요"
          value={message}
          onChange={handleMessageChange}
        />
        <button
          className="tweetForm__submitButton"
          type="submit"
          onClick={handleSubmit}
        >
          Tweet
        </button>
      </form>

      <ul className="tweetList">
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </ul>

      <Footer />
    </section>
  );
};

export default Tweets;