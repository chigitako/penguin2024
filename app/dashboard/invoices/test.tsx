"use client"
import { useState } from "react"

export const Test = ()=>{
    const [count,setCount] = useState(0)
    let count1 = 0
    const handlekesseki =()=>{
        // setCount(count+1)
        // setCount((prev)=>prev+1)
        count1++
    }
    return <div>
        <button onClick={handlekesseki}>+</button>
        <p>count:{count1}</p>
        <p>double count:{count1*2}</p>
    </div>
}