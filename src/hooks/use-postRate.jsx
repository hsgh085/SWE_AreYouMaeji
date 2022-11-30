// post함수는 커스텀 훅으로 빼면 안되나..?
// 쓰지 않는 훅임. 삭제해도 됨.
import React, { useEffect, useState } from "react";
export default function usePostRate(rate) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    fetch("", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("별점 평가 완료");
      })
      .catch((e) => setError("Error"))
      .finally(() => setLoading(false));
    return () => {
      console.log("데이터 청소");
    };
  }, [rate]);

  return [loading, error];
}
