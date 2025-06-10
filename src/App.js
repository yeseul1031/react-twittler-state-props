import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import MyPage from './Pages/MyPage';
import About from './Pages/About';

import './App.css';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Routes>
              {[
                <Route path="/" element={<Tweets />} key="/" />,
                <Route path="/about" element={<About />} key="/about" />,
                <Route path="/mypage" element={<MyPage />} key="/mypage" />
              ]}
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
