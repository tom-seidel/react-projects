import { useState } from 'react'
import './App.css'

export default function App() {
const [text, setText] = useState('off');

const toggleText = () => {
  setText(text === 'off' ? 'on' : 'off');
}

  return (
    <>
      {/* Toggle Button */}
      <button onClick={toggleText}>Toggle Text</button>
      <p>{text}</p>
    </>
  )
}