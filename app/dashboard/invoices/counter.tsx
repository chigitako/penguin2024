"use client"

import { useState } from 'react'
import {Button} from '@/app/ui/button'

export default function Counter() {
  const [count, setCount] = useState(0)

  function incrementCnt() {
    let cnt = count + 1;
    console.log(cnt, count)
    setCount(cnt);
  }

  function decrementCnt() {
    let cnt = count - 1;
    setCount(cnt);
  }

  return (
    <div>
      <div>{count}</div>
      <div>
        <Button onClick={incrementCnt}>
          increment
        </Button>
        <Button onClick={decrementCnt}>
          decrement
        </Button>
      </div>
    </div>
  )
}