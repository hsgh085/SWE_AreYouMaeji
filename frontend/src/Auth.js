import { useEffect } from "react";
import AuthenticationService from "./AuthenticationService";

const getLoginOrReg = () => {
    const code = new URL(window.location.href).searchParams.get("code");

    const getToken = async () => {
        try {
            console.log(code);
            fetch("http://localhost:8080/api/user/kakao?code=" + code)
                .then((response) => response.json())
                .then((res) => {
                    console.log(res);
                    let email = res.email;
                    if (email == null){
                        console.log("null");
                        //회원가입으로 이동
                    }
                    else { //정상흐름
                        console.log("success!!!");
                        AuthenticationService.registerSuccessfulLoginForJwt(email, res.jwt);
                        //메인페이지로 이동
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