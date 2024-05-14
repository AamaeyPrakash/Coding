import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

function App() {
  const [count, setCount] = useState(0)
  const [bgclr, setBackground] = useState("white");
  const dark = () => {
    setBackground("black");
  }

  return (  
    <div style = {{backgroundColor:bgclr}}>
      
      <button onClick={dark} >Dark Mode</button>

      {/* <form>
        <select>
          <option>Tamil Nadu</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option></option>
        </select>
      </form> */}
       
      {/* <Button variant="custom">Button</Button> */}
        {/* <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
              <NavigationMenuTrigger>Item 2</NavigationMenuTrigger>
              <NavigationMenuTrigger>Item 3</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}

    </div>
  )

}

export default App
