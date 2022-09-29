import { useState } from "react";

const Try = () => {
  const [count, setCount] = useState(0)
  
  const checkCount = () =>{
    setCount(pervCount => pervCount + 1 )
    console.log(count);
  }

  return (
    <div>
      <button onClick={checkCount}>點我</button>
      <h1>{count}</h1>
    </div>
  )
}

export { Try }