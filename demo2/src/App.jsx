import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import CardLayout from './components/CardLayout'
import PasswordGenerator from './components/PasswordGenerator'

function App() {
  // const [count, setCount] = useState(0)
  // const [bgclr, setBackground] = useState("white");
  // const dark = () => {
  //   setBackground("black");
  // }

  return (  
    // <div style = {{backgroundColor:bgclr}}>

      
    //   {/* <button onClick={dark} >Dark Mode</button> */}



    // </div>

    <div>
      {/* <CardLayout /> */}
      
      <PasswordGenerator />
    </div>
  )

}

export default App
