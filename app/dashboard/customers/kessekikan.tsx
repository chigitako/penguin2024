'use client';

import { useState } from 'react';

const kessekikan = () => {
  const [count, setCount] = useState<number>(0);
  const [firstcount, setFirstCount] = useState<number>(0);

  function kessekiCount() {
    if (Math.round(firstcount / 3) < count + 1) {
      return;
    }
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>
        授業名
        <input type="text" />： 授業回数
        <input type="number" onChange={(e) => setFirstCount(e.target.value)} />
        回<button onClick={kessekiCount}>欠席</button>： 欠席回数{count}： 残り:
        {Math.round((firstcount * 1) / 3) - count}
      </div>
    </>
  );
};

export default kessekikan;
