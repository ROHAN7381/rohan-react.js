import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Allroute from './Allroute'
import Navbar from './Componts/Navbar'

function App() {

  return (
    <>
      <div className='main'>
      <Navbar/>
        <Allroute/>
       
       </div>
    </>
  )
}

export default App
