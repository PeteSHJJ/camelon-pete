
import React, { useState } from 'react';
import Filterbar from "./components/Filterbar"
import MenuController from "./components/MenuController"
import Display from './components/Display';

function App() {
  
  const [state, setstate] = useState("Hello") 
  
  return (
    
    <main className="text-black-400 bg-white-100 body-font">
      <Filterbar />
      <MenuController />
    </main>

  )
}

export default App
