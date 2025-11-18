import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import User from './User';
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Hello React 19</h1>
      <h1>Counter Value: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase counter</button>
      <User />
    </>
  )
}

export default App
