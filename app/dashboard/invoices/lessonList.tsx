'use client';
import { useState } from 'react';

import Changeface from './changeface';

const LessonList = () => {
  const [count, setCount] = useState<number>(0);
  const [firstcount, setFirstCount] = useState<number>(0);
  const restDays = Math.round((firstcount * 1) / 3) - count;

  function kessekiCount() {
    if (Math.round(firstcount / 3) < count + 1) {
      return;
    }
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>
        授業名： 授業回数：回
        <button onClick={kessekiCount}>欠席</button>
        欠席回数：{count}
        残り:{restDays}
        {/* <Changeface restDays={restDays} /> */}
        <Changeface restDays={1} />
      </div>
    </>
  );
};

export default LessonList;
