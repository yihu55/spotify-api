import React from 'react';
import { useState } from 'react';
import './App.css';

function PlayButton({index}) {
    const [active,setActive]=useState(null)
  return (
   
    <button style={{color: active == index ? "pink" : "grey"}}
      onMouseEnter={() => setActive({index})}
      onMouseLeave={() => setActive(null)}> PLAY 
    </button>
  )
}

export default PlayButton;