import { useEffect } from "react";

const Auth = () => {
    const code = new URL(window.location.href).searchParams.get("code");

    const getLoginOrReg = async () => {
        try {
            console.log(code);
            fetch("/api/member/kakao?code=" + code)
                .then((response) => response.json())
                .then((res) => {
                    console.log(res);
                    let email = res.email;
                    if (email == null){
                      window.alert("카카오 로그인 실패");
                      window.location.replace("/");
                    }
                    else { //정상흐름
                      window.alert("카카오 로그인 성공");
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