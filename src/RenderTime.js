import { useEffect, useState, useRef } from "react"

const RenderTime = () => {
  const [renderCount, setRenderCount] = useState(0)
  const countRef = useRef(0)
  useEffect(() => {
    countRef.current += 1 
  })
  return (

    <div>
      <button onClick={() => setRenderCount(prevCount => prevCount + 1 )}>按我</button>
      <h1>渲染次數： {countRef.current} </h1>
    </div>
  )
}

export { RenderTime }