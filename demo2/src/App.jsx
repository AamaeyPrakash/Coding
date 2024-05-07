import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <form>
        <select>
          <option>Tamil Nadu</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option></option>
        </select>
      </form> */}
       
       <Button variant="custom">Button</Button>
    </>
  )
}

export default App
