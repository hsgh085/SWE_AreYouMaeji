import { useEffect } from "react";

const Auth = () => {
    const code = new URL(window.location.href).searchParams.get("code");

    const getToken = async () => {
        try {
            console.log(code);
            fetch("http://localhost:8080/api/user/kakao?code=" + code)
                .then((response) => response.json())
                .then((res) => {
                    let email = res.email;
                    if (email == null){
                        console.log("null");
                        window.location.replace("/");
                    }
                    else { //정상흐름
                        console.log("success!!!");
                        window.location.replace("/");
                    }
                });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    return null;
};

export default Auth;