import { useState } from 'react'
import './App.css'

function App() {
const [counter, setcounter] =useState(1); 

const increase=()=>{

  if(counter<20)  setcounter(counter+1)
}
const decrease=()=>{
  if(counter>0) setcounter(counter-1)
}
  return (
    <>
      <h1>Counting the number :--  {counter}</h1>

      <button onClick={increase}>Increase</button>
      <br />
      <br />
      <br />
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
