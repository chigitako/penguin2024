'use client';
import style from './aisatsu.module.css';
import { useState } from 'react';
import Changeface from './changeface';

const Aisatsu = () => {
  const [count, setCount] = useState<number>(0);
  const [firstcount, setFirstCount] = useState<number>(0);
  const restDays = Math.floor((firstcount * 1) / 3) - count;

  function kessekiCount() {
    if (Math.floor(firstcount / 3) < count + 1) {
      return;
    }
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div className={style.yoko}>
        授業名 <input type="text" />： 授業回数
        <input type="number" onChange={(e) => setFirstCount(e.target.value)} />
        回
        <button className={style.aisatsu} onClick={kessekiCount}>
          欠席
        </button>
        ： 欠席回数{count}： 残り: {restDays} <Changeface restDays={restDays} />
      </div>
    </>
  );
};

export default Aisatsu;
