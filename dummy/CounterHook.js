//useEffect, useState

import React, { useState, useEffect } from "react";

const CounterHook = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("기본이름");
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  /* 적용안됨 이유모르겠음
  useEffect = () => {
    console.log("렌더링 완료");
    console.log({
      name,
      value,
    });
  };
   */
  /*
  useEffect(() => {
    console.log("렌더링완료");
    console.log({
      name,
      value,
    });
  });
  */

  //마운트될때만, 두번째 파라미터 공백배열로
  /*
  useEffect(() => {
    console.log("마운트될때만");
  }, []);
*/
  //특정값 업데이트시에만
  /*
  useEffect(() => {
    console.log(name, "<=업데이트시에만");
  }, [name]);
  */

  /*
useEffect는 기본적으로 렌더링되고 난 직후마다 실행, 두번째 파라미터 배열에
무엇을 넣는지에따라 실행되는 조건이 달라짐
컴포넌트가 언마운트 되기전이나 업데이트되기 직전에 어떤 작업을
수행하고싶다면 useEffect에서 뒷정리(cleanup)함수를 반환해주어야한다
*/
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("클린업");
      console.log(name);
    };
  }, [name]);
  return (
    <div>
      <div>
        <p>현재 카운터 값은 {value}</p>
        <p>이름 값 : {name}</p>
      </div>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
      <p>
        <input
          type="text"
          placeholder="플레이스홀더"
          onChange={onChangeName}
        ></input>
      </p>
    </div>
  );
};

export default CounterHook;
