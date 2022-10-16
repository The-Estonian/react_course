import React, { useState } from 'react'
import Output from "./Output"

const Greeting = () => {
    const [ text, setText] = useState("Insanity")
    const textChanger = () => {
        if (text === "Insanity") {
            setText("Logic")            
        } else {
            setText("Insanity")
        }
    }
  return (
    <div>
        <h2>Hello World!</h2>
        <Output>It's good to see you!</Output>
        <h1 onClick={textChanger}>{text}</h1>
    </div>
  )
}

export default Greeting