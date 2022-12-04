/*각종 페이지 주소 */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import First from "./First/First";
import Signup from "./Signup/Signup";
import S_agree from "./S_agree/S_agree";
import Home from "./Home/Home";
import H_category from "./H_category/H_category";
import E_make from "./E_make/E_make";
import E_start from "./E_start/E_start";
import E_first from "./E_first/E_first";
import E_second from "./E_second/E_second";
import E_end from "./E_end/E_end";
import H_mypage from "./H_mypage/H_mypage";
import M_ask from "./M_ask/M_ask";
import M_cancel from "./M_cancel/M_cancel";
import M_list from "./M_list/M_list";
import M_profile from "./M_profile/M_profile";
import M_service from "./M_service/M_service";
import Auth from "./Auth";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/S_agree" element={<S_agree />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/H_category" element={<H_category />} />
          <Route path="/E_make" element={<E_make />} />
          <Route path="/E_start/:id" element={<E_start />} />
          <Route path="/E_first/:id" element={<E_first />} />
          <Route path="/E_second/:id" element={<E_second />} />
          <Route path="/E_end/:id" element={<E_end />} />
          <Route path="/H_mypage" element={<H_mypage />} />
          <Route path="/M_ask" element={<M_ask />} />
          <Route path="/M_cancel" element={<M_cancel />} />
          <Route path="/M_list" element={<M_list />} />
          <Route path="/M_profile" element={<M_profile />} />
          <Route path="/M_service" element={<M_service />} />
          <Route path="/oauth/callback/kakao" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
