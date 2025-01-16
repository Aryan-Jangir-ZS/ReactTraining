import './App.css'
import Top from './day7Components/Top'
import Bottom from './day7Components/Bottom'
import { ThemeContext, themes } from "../src/helper/ThemeContext";
import Assignment2 from '../src/day8Components/Assignment2';
import React, { useState } from 'react'

function App() {
    console.log("dfhadfasdfasdf");
    
  const [assignment1, setAssignment1] = useState(false);
  const [assignment2, setAssignment2] = useState(false);



  return (
    <>
  {!assignment1 && !assignment2 && (
        <>
          <button className='Assignment2' onClick={() => setAssignment2(true)}>Assignment 2</button>
          <button className='Assignment1' onClick={() => setAssignment1(true)}>Assignment 1</button>
        </>
      )}

      {assignment2 &&     
      <div className="Assignment2-div">
        <Assignment2 />
        </div>
      }
        

      {assignment1 && (
        <>
          <Top />
          <ThemeContext.Provider value={themes}>
            <Bottom />
          </ThemeContext.Provider>
        </>
      )}
    </>
  )
}

export default App
