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
import CancelledErrand from './Mypage/CancelledErrand';
import ErrandDist from './Mypage/ErrandDist';
import Auth from "./Auth";
import React from "react";
import Rate from "./component/Rate/Rate";
import MyPageMain from "./Mypage/MyPageMain/MyPageMain";
import ProfileSetting from "./Mypage/ProfileSetting/ProfileSetting";
import TermsOfService from "./Mypage/TermsOfService/TermsOfService";
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
          <Route path="/Ask" element={[<Header />, <Ask />]} />
          <Route path="/CancelledErrand" element={[<Header />, <CancelledErrand />]} />
          <Route path="/ErrandDist" element={[<Header />, <ErrandDist />]} />
          <Route path="/ProfileSetting" element={[<Header />, <ProfileSetting />]} />
          <Route path="/TermsOfService" element={[<Header />, <TermsOfService />]} />
          <Route path="/oauth/callback/kakao" element = {<Auth />} />
          <Route path="/test" element = {<Rate />} />
          <Route path="/test1" element = {<MyPageMain />} />
          <Route path="/test2" element = {<ProfileSetting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;