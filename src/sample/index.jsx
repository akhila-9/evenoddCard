import React, { useState } from 'react'
import "./index.css"
const EvenOddApp = () => {
  const [randomnumber,setrandomnumber]=useState(0)

  const clickingFunc=()=>{
    const number = Math.floor(Math.random() * 101);
    console.log(number);
    setrandomnumber(number)
    
  }
  
  return (
    <div className='container'>
      <div className='countnumber'>{`count ${randomnumber}`}</div>
      <div className='section'>
      <div className='stateOfNumber'>{`count ${randomnumber%2===0 ?"even":"odd"}`}</div>
      <div>
        <button onClick={clickingFunc} style={{
    fontSize: "15px",
    fontWeight:"bold",
    color: "#0f172a",
    fontFamily: "Roboto"
}}>Increment</button>
      </div>
      <div style={{fontSize:"10px",fontFamily:"Roboto"}}>*Increase by random number between 0 to 100*</div>
    </div>
    </div>
  )
}

export default EvenOddApp
