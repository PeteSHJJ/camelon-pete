import React, { useState } from 'react'
import './MainContent.scss'
import Menu from '../Menu/Menu'
import Filter from '../Filter/Filter'
import Display from '../Display/Display'

function MainContent() {
    const [state, setState] = useState({ mode: "pin_map" });

  return (
    <div>
        <div className='menu-container'>
        <button onClick={() => setState({mode: "overview"})}>Overview</button>
        <button onClick={() => setState({mode: "pin_map"})}>Map</button>
        <button onClick={() => setState({mode: "heat_map"})}>Heat Map</button>
        </div>
        <Filter />
        <Display data={state.mode}/>
        
    </div>
  )
}

export default MainContent