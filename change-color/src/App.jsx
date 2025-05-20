import './App.css'
import { useState, useEffect } from 'react'

export default function App() {
  const [color, setColor] = useState('red');

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <h1>Change Background Color</h1>
      <div className="controls">
        <button onClick={() => setColor('red')}>Red</button>
        <button onClick={() => setColor('green')}>Green</button>
        <button onClick={() => setColor('blue')}>Blue</button>
      </div>
    </>
  )
}