import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import MyPage from './Pages/MyPage'; 
import About from './Pages/About'; 

import './App.css';

const App = (props) => {
  return (
    <BrowserRouter> {/* BrowserRouter 주석 해제 */}
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Routes> {/* Routes 컴포넌트 추가 */}
              <Route path="/" element={<Tweets />} /> {/* "/" 경로에 Tweets 컴포넌트 연결 */}
              <Route path="/about" element={<About />} /> {/* "/about" 경로에 About 컴포넌트 연결 */}
              <Route path="/mypage" element={<MyPage />} /> {/* "/mypage" 경로에 MyPage 컴포넌트 연결 */}
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export default App;