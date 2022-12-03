import React, { useEffect, useState } from "react";
export default function useUser() {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`data/user.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("사용자 데이터 받아옴");
        setUser(data);
      });
    return () => {
      console.log("사용자 데이터 청소");
    };
  }, []);

  return user;
}
