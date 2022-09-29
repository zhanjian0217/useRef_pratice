import { useState, useRef } from "react";
import "./index.css"

const Text = () => {
  const [text, setText] = useState("");
  const textRef = useRef("")

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
    </>

  )
}

export { Text }