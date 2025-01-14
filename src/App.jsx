import './App.css'
import Top from './components/Top'
import Bottom from './components/Bottom'
import { ThemeContext, themes } from "../src/helper/ThemeContext";

function App() {


  return (
    <>
      <Top/>
      <ThemeContext.Provider value={themes}>
      <Bottom/>
      </ThemeContext.Provider>
    </>
  )
}

export default App
