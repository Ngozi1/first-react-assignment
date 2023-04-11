import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Main1 from './main1'

function App() {
   const [count, setCount] = useState(0)

  return (
    <div>

      <Header />
      <Main1 />
    </div>
    
  )
}

export default App
