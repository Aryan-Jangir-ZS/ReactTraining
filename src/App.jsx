import './App.css'
import Top from './day7Components/Top'
import Bottom from './day7Components/Bottom'
import { ThemeContext, themes } from "../src/helper/ThemeContext";
import Assignment2 from './day8Components/Assignment2';
import React, { useState } from 'react'
import Assignment3 from './Day9/components/Assignment3';
import Assignment4 from './day10ReactAssignment/Assignment4';
import DiceRollassignment from './Day11/DiceRollassignment';


function App() {
    console.log("dfhadfasdfasdf");
    
  const [assignment1, setAssignment1] = useState(false);
  const [assignment2, setAssignment2] = useState(false);
  const [assignment3, setAssignment3] = useState(false);
  const [assignment4, setAssignment4] = useState(false);
  const [assignment5, setAssignment5] = useState(false);




  return (
    <>
  {!assignment1 && !assignment2 && !assignment3 && !assignment4 && !assignment5 && (
        <>
          <button className='Assignment1' onClick={() => setAssignment1(true)}>Assignment 1</button>
          <button className='Assignment1' onClick={() => setAssignment2(true)}>Assignment 2</button>
          <button className='Assignment1' onClick={() => setAssignment3(true)}>Assignment 3</button>
          <button className='Assignment1' onClick={() => setAssignment4(true)}>Assignment 4</button>
          <button className='Assignment1' onClick={() => setAssignment5(true)}>DiceRoll Assignment </button>

        </>
      )}

      {assignment2 &&     
      <div className="Assignment2-div">
        <Assignment2 />
        </div>
      }
      {assignment3 &&     
        <Assignment3 />
      }

      {assignment4 &&     
        <Assignment4/>
      }

{assignment5 &&     
        <DiceRollassignment/>
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
