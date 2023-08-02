import React from 'react';
import { useLocation } from 'react-router-dom';

const Result=() => {
  const location = useLocation();
  const data = location.state;
  console.log("data",data)
  const pain = data.pain;
  const kind=data.kind;
  return (
    <div>
      개발자 도구 눌러서 컨솔창 보면 선택한 객체 볼 수 있음!
      <p>pain:{pain}</p>
      <p>kind:{kind}</p>

    </div>
  );
};

export default Result;