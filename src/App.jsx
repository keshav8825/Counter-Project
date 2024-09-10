import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)
  // let counter = 5;

  const addValue = () =>{
    if(counter <30){
      console.log("clicked", counter);
      setCounter(counter + 1)
  }
    else{
      console.log("Counter value cannot exceed 30");
    }

  }

  const removeValue =() =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
    else{
      console.log("Counter Value cannot be extend to 0")
    }
  }

return(
    <>
    <h1>Counter Project</h1>
    <br/>
    <h2>Counter Vlaue:{counter}</h2>
     <button onClick={addValue}>Add Value{counter}</button>
     <br/>
     <button onClick={removeValue}>Remove value{counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
