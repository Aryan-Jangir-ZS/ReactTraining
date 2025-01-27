import React, { useContext } from 'react';
import { ThemeContext } from '../ContextProvider';
import "../theme.css"


const ChildD = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`${theme}`} style={{ padding:"10px"}}>
            <p>Current theme: {theme}</p>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default ChildD;