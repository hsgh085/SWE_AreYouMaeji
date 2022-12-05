import React, { useEffect, useState } from "react";
export default function useUser(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [user, setUser] = useState({});

    useEffect(() => {
        let model = {
            method: 'GET',
            headers: {
                Authorization: localStorage.getItem("email")
            }
        };
        fetch(`/api/member`, model)
            .then((res) => res.json())
            .then((res) => setUser(res))
        .catch((e) => setError("Error"))
        .finally(() => setLoading(false));
        return () => {
          console.log("데이터 청소");
        };
      }, []);

      return [loading, error, user];
}