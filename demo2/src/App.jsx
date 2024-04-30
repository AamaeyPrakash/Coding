import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form>
        <select>
          <option>Tamil Nadu</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option></option>
        </select>
      </form>
       
    </>
  )
}

export default App
