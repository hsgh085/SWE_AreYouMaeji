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
import MyPage from './Mypage/MyPageMain/MyPageMain';
import Ask from './Mypage/Ask/Ask';
import CancelledErrand from './Mypage/CancelledErrand';
import ErrandDist from './Mypage/ErrandDist';
import ProfileSetting from './Mypage/ProfileSetting/ProfileSetting';
import TermsOfService from './Mypage/TermsOfService/TermsOfService';
import Product from './Product/Product';
import Rating from './Errand/Rating/Rating';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<First />} />
        </Routes>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/main" element={[<Headersearch />, <Home />]} />
        </Routes>
        <Routes>
          <Route path="/make" element={[<Header />, <Errandmake />]} />
        </Routes>
        <Routes>
          <Route path="/Errandongoing" element={[<Header_do />, <Errandongoing />]} />
        </Routes>
        <Routes>
          <Route path="/Termsofagree" element={<Termsofagree />} />
        </Routes>
        <Routes>
          <Route path="/Category" element={[<Header />, <Category />]} />
        </Routes>
        <Routes>
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
        <Routes>
          <Route path="/Ask" element={<Ask />} />
        </Routes>
        <Routes>
          <Route path="/CancelledErrand" element={[<CancelledErrand />]} />
        </Routes>
        <Routes>
          <Route path="/ErrandDist" element={[<ErrandDist />]} />
        </Routes>
        <Routes>
          <Route path="/ProfileSetting" element={[<ProfileSetting />]} />
        </Routes>
        <Routes>
          <Route path="/TermsOfService" element={[<TermsOfService />]} />
        </Routes>
        <Routes>
          <Route path="/Rating" element={<Rating />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;