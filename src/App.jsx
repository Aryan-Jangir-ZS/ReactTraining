import React from "react";
import Top from "../src/components/Top";
import Bottom from "../src/components/Bottom";
import { ThemeContext , themes } from "./helper/ThemeContext";


function App() {

  return (
    <div>
      <Top/>
      <ThemeContext.Provider value={themes}> 
      <Bottom/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
