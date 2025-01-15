import React from "react";
import ReactDOM from "react-dom/client";
import Top from "../src/components/Top";
import Bottom from "../src/components/Bottom";

let globalState = [];
let stateIndex = 0;

function useNewState(initialValue) {
  const currentIndex = stateIndex;

  if (globalState[currentIndex] === undefined) {
    globalState[currentIndex] = initialValue;
  }

  const setState = (newValue) => {
    globalState[currentIndex] = typeof newValue === 'function'
      ? newValue(globalState[currentIndex])
      : newValue;
    render(); 
  };

  stateIndex++; 
  return [globalState[currentIndex], setState];
}

function render() {
  stateIndex = 0; 
  root.render(<App />);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [count, setCount] = useNewState(0);

  return (
    <div>
      <h1>Count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Top/>
      <Bottom/>
    </div>

  );
}

export default App;
