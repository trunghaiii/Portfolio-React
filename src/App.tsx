import { useState } from 'react'
import Portfolio from './Screens/Portfolio'
import "./styles/plugins.scss"
import "./styles/style.scss"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Portfolio />

  )
}

export default App
