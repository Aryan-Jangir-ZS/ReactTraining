import "../App.css";
import React, { useRef, useState, useEffect, useContext, useReducer } from "react";
import { initialState, reducer } from "../helper/Reducer";
import { ThemeContext } from "../helper/ThemeContext";



const Bottom = () => {

  const themes = useContext(ThemeContext);
  const [currThemeId, setCurrThemeId] = useState(0);

  const handleChangeTheme = (event) => {
    if (event.target.tagName !== "BUTTON" && event.target.tagName !== "H1") {
      setCurrThemeId((prev) => (prev + 1) % themes.length);
    }
  };

  const targetRef = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className="bottom-div"
      style={{ backgroundColor: themes[currThemeId] }}
      onDoubleClick={handleChangeTheme}
    >
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <div className="count-div">
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <h1 ref={targetRef}>Count is: {state.count}</h1>
      </div>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default Bottom;
