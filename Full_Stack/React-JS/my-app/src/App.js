import React, { useState } from 'react'
import './App.css'
import HookRules from './Components/HookRules';
import UseStateArray from './Components/UseStateArray';

function App() {

  // theory part for hooks IMPORTANT POINTS
  // 1:Always write it inside the component or function
  // 2:Component name must be PascalCase (First letter should be Uppercase)
  // 3:we can directly import or we can directly write it using React.hookName
  // 4:Dont call hooks inside loops, conditions, or nested functions.
  

  const [myName, setMyName] = useState("Rushikesh");

  const chnageContent = () =>{
    let val = myName;

    // if(val === 'Rushikesh'){
    //   setMyName('Rushikesh Bhawar')
    // }else{
    //   setMyName('Rushikesh')
    // }
                // OR
    (val === "Rushikesh") ?
      setMyName('Rushikesh Bhawar') : setMyName('Rushikesh')  
  }
  return (
    <div className='App'>
      <h1>{ myName }</h1>
      <button className="btn" onClick={chnageContent}>Click</button>
      <UseStateArray />
      <HookRules />
    </div>
  )
}

export default App;
