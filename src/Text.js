import { useState, useRef } from "react";

const Text = () => {
  const [text, setText] = useState("");
  const textRef = useRef("")

  const textHandler = () => {
    console.log(textRef.current);
    setText(textRef.current.value)
  }

  const inputFocus = () => {
    textRef.current.focus()
  }
  
  return (
    <div>
      <input type="text" ref={textRef} />
      <div>
        目前文字: {text}
      </div>
      <button onClick={inputFocus}>按此可以進行輸入</button>
      <button onClick={textHandler}>送出文字</button>
    </div>
  )
}

export { Text }


// const previousName = useRef('');

// useEffect(() => {
//   previousName.current = text
// }, [text])