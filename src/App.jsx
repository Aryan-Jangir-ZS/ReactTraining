import './App.css';
import React, { useState } from 'react';
import { ThemeContext, themes } from './helper/ThemeContext';
import Top from './day7Components/Top';
import Bottom from './day7Components/Bottom';
import Assignment2 from './day8Components/Assignment2';
import Assignment3 from './Day9/components/Assignment3';
import Assignment4 from './day10ReactAssignment/Assignment4';
import DiceRollassignment from './Day11/DiceRollassignment';
import Accordion from './Day12/Accordion';
import Modal from './Day13Test1/Modal';
import Debouncing from './Day13Test2/Debouncing';

function App() {
  const [activeAssignment, setActiveAssignment] = useState(null);

  const assignments = [
    {
      id: 'assignment1',
      label: 'Assignment 1',
      component: (
        <>
          <Top />
          <ThemeContext.Provider value={themes}>
            <Bottom />
          </ThemeContext.Provider>
        </>
      ),
    },
    {
      id: 'assignment2',
      label: 'Assignment 2',
      component: (
          <Assignment2 />
        
      ),
    },
    {
      id: 'assignment3',
      label: 'Assignment 3',
      component: <Assignment3 />,
    },
    {
      id: 'assignment4',
      label: 'Assignment 4',
      component: <Assignment4 />,
    },
    {
      id: 'assignment5',
      label: 'DiceRoll Assignment',
      component: <DiceRollassignment />,
    },
    {
      id: 'assignment6',
      label: 'Anirudh (make accordion assignment)',
      component: (
          <Accordion/>
      ),
    },
    {
      id: 'assignment7',
      label: 'Anirudh (Modal assignment)',
      component: (
          <Modal/>
      ),
    },
    {
      id: 'assignment8',
      label: 'Debouncing assignment',
      component: (
          <Debouncing/>
      ),
    },
  ];

  return (
    <>
      {!activeAssignment && (
        <div className="assignment-buttons">
          {assignments.map(({ id, label }) => (
            <button
              key={id}
              className="Assignment1"
              onClick={() => setActiveAssignment(id)}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {activeAssignment &&
        assignments.find(({ id }) => id === activeAssignment)?.component}

    </>
  );
}

export default App;
