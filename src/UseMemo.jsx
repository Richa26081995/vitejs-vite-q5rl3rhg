import React, { useEffect, useMemo, useState } from 'react'

const UseMemo = () => {
    const[count,setCount] = useState(0)
    const[toggle,setToggle] = useState(false)

    useEffect(()=>{})
    const handleCount = ()=>{
        setCount(count+1)
        console.log("Count clicked")
    }
    const handleToggle = ()=>{
        setToggle(!toggle)
        console.log("Toggle Clicked")
    }

   const expensiveCal = (num)=>{
    let result = 0;
    for(let i =0;i<100000000;i++){
        result+=num
    }
    return result
   }

   const memoval = useMemo(()=>{
    return expensiveCal(count)
   },[count])

  
  return (
    <div>
        <p>Use Memo</p>
        <p>Calculated Value: {memoval}</p>
        <button onClick={handleCount}>Count Now:{count}</button>
        <br />
        <button onClick={handleToggle}>{!toggle?"Off": "On"}</button>
    </div>
  )
}

export default UseMemo