import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EvenOddApp from './sample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <EvenOddApp/>
     
    </>
  )
}

export default App
