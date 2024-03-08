'use client';
import style from './aisatsu.module.css';
import { useState } from 'react';
import Changeface from './changeface';
import { number } from 'zod';

const Aisatsu = () => {
  const [count, setCount] = useState<number>(0);
  const [firstcount, setFirstCount] = useState<string>('');
  const restDays = Math.floor((Number(firstcount) * 1) / 3) - count;
  const [lessonname, setlessomname] = useState<string>('');

  function kessekiCount() {
    if (Math.floor(Number(firstcount) / 3) < count + 1) {
      return;
    }
    setCount((prev) => prev + 1);
  }
  function resetCount() {
    setCount(0);
    setFirstCount('');
    setlessomname('');
  }

  return (
    <>
      <div className={style.yoko}>
        授業名{' '}
        <input
          type="text"
          value={lessonname}
          onChange={(e) => setlessomname(e.target.value)}
        />
        ： 授業回数
        <input
          type="number"
          value={firstcount}
          onChange={(e) => setFirstCount(e.target.value)}
        />
        回
        <button className={style.aisatsu} onClick={kessekiCount}>
          欠席
        </button>
        ： 欠席回数{count}： 残り: {restDays} <Changeface restDays={restDays} />
        <button className={style.aisatsu} onClick={resetCount}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Aisatsu;
