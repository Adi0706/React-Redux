import React, { useEffect } from 'react'
import ColorChange from './ColorCange';
import { useState } from 'react';


function App() {
  const [bgColor, setBgColor] = useState({
    colors1:'red'
  });




  const changeBgColor=()=>{
    return(
    
        setBgColor({
          colors1: 'blue',
          
          
        })
      
    )
  }

  return (
    <div className='main-body' style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
      <h1>APP COMPONENT</h1>
     <ColorChange bgcolor={bgColor} />
     <button onClick={changeBgColor}>CHANGE THE COLOR</button>
     


    </div>
  );
}

export default App