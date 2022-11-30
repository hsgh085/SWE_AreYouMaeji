import React, { useEffect, useState } from "react";
export default function useUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [rate, setRate] = useState(); //별점 db는 객체형태인지? 그냥 값 하나만 저장하는지?

  //get할 때, fetch함수 변경사항이 url밖에 없다면, 매개인자로 url받아서 use-User 커스텀 훅 재사용하기
  //굳이 useRate 커스텀 훅 만들 필요 없음.
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터 받아옴");
        setRate(data);
      })
      .catch((e) => setError("Error"))
      .finally(() => setLoading(false));
    return () => {
      console.log("데이터 청소");
    };
  }, []);

  return [loading, error, rate];
}
