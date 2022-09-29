import { useState, useRef, useEffect } from "react";
import "./index.css"

const Text = () => {
  const [text, setText] = useState("");
  const textRef = useRef("123213")
  
  
  // useEffect(() => {
  //   textRef.current = text
  // }, [text])
  
  const textHandler = () => {
    setText(textRef.current.value)
  }

  const inputFocus = () => {
    textRef.current.focus()
  }

  
  return (
    <>
      <div>
        <input type="text" ref={textRef} />
        <div>
          目前文字: {text}
        </div>
        <button className="button" onClick={inputFocus}>按此可以進行輸入</button>
      </div>
      <div className="button">
        <button onClick={textHandler}>送出文字</button>
      </div>
      <div>
        {/* 上次的送出紀錄：{ textRef.current } */}
      </div>
    </>

  )
}

export { Text }