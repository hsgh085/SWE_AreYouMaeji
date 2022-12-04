import {useEffect} from "react";

const Auth = () => {
  const code = new URL(window.location.href).searchParams.get("code");

  const getLoginOrReg = async () => {
    try {
      fetch("/api/member/kakao?code=" + code)
        .then((response) => response.json())
        .then((res) => {
          let email = res.email;
          if (res.member_id == null) {
            window.alert("회원가입이 필요합니다.");
            localStorage.setItem("email", email);
            window.location.replace("/Signup");
          } else { //정상흐름
            window.alert("로그인 성공!");
            localStorage.setItem("email", email);
            window.location.replace("/main");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLoginOrReg();
  }, []);

  return null;
};

export default Auth;