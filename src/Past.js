import { useState, useRef, useEffect } from "react";

const Past = () => {
  const [value, setValue] = useState("")
  const pastRef = useRef("")

  useEffect(() => {
    pastRef.current = value
  }, [value])

  return (
    <>
      <div>
        <input type="text" ref={pastRef} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div>
        現在的輸入框文字：{ value }
      </div>
      <div>
        紀錄過去吧：{ pastRef.current }
      </div>
    </>
  )
}

export { Past }