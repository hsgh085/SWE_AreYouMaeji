import React, { useEffect, useState } from "react";
export default function useUser(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`data/user.json`)
          .then((res) => res.json())
          .then((data) => {
            console.log("데이터 받아옴");
            setUser(data);
          })
        .catch((e) => setError("Error"))
        .finally(() => setLoading(false));
        return () => {
          console.log("데이터 청소");
        };
      }, []);

      return [loading, error, user];
}