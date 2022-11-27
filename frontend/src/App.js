/*각종 페이지 주소 */
import './App.css';
import Home from "./Main/Home";
import Header_do from "./Header/Header_do";
import Headersearch from "./Header/Headersearch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from './category/Category';
import Errandmake from './Errand/Errandmake';
import Errandongoing from './Errand/Errandongoing';
import Header from './component/Header/Header';
import Signup from './Sign/Signup';
import Termsofagree from './Sign/Termsofagree';
import First from './Main/First';
import MyPage from './Mypage/MyPage';
import Ask from './Mypage/Ask';
import CancelledErrand from './Mypage/CancelledErrand';
import ErrandDist from './Mypage/ErrandDist';
import ProfileSetting from './Mypage/ProfileSetting';
import TermsOfService from './Mypage/TermsOfService';
import Auth from "./Auth";
import React from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/main" element={[<Headersearch />, <Home />]} />
          <Route path="/make" element={[<Header />, <Errandmake />]} />
          <Route path="/Errandongoing/:id" element={[<Header_do />, <Errandongoing />]} />
          <Route path="/Termsofagree" element={<Termsofagree />} />
          <Route path="/Category" element={[<Header />, <Category />]} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Ask" element={[<Header />, <Ask />]} />
          <Route path="/CancelledErrand" element={[<Header />, <CancelledErrand />]} />
          <Route path="/ErrandDist" element={[<Header />, <ErrandDist />]} />
          <Route path="/ProfileSetting" element={[<Header />, <ProfileSetting />]} />
          <Route path="/TermsOfService" element={[<Header />, <TermsOfService />]} />
          <Route path="/oauth/callback/kakao" element = {<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;