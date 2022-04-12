//리액트훅,유즈스테이트,유즈이펙트

import React, { useState, useEffect } from "react";

const CounterHook = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("기본이름");
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  /*
  useEffect = () => {
    console.log("렌더링 완료");
    console.log({
      name,
      value,
    });
  };
   */

  useEffect(() => {
    console.log("렌더링완료");
    console.log({
      name,
      value,
    });
  });

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
