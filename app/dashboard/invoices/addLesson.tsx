'use client';
import { useState } from 'react';

const AddLesson = () => {
  const [count, setCount] = useState<number>(0);
  const [firstcount, setFirstCount] = useState<number>(0);

  function kessekiCount() {
    if (Math.round(firstcount / 3) < count + 1) {
      return;
    }
    setCount((prev) => prev + 1);
  }

  return (
    <div>
      授業名:
      <input type="text" />
      授業回数:
      <input type="number" onChange={(e) => setFirstCount(e.target.value)} />回
      <button type="submit">add</button>
    </div>
  );
};

export default AddLesson;
