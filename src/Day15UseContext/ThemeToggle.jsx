import React, { useContext } from 'react';
import { ThemeContext } from './ContextProvider';
import ChildA from './Components/ChildA';
import ChildB from './Components/ChildB';
import ChildC from './Components/ChildC';
import ChildD from './Components/ChildD';
import "./Theme.css"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div  className={`${theme}`} style={{ padding: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <button onClick={toggleTheme}>
                    Toggle Theme
                </button>
            </div>
            <div className={`theme-${theme}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <ChildA />
                <ChildB />
                <ChildC />
                <ChildD />
            </div>
        </div>
    );
};

export default ThemeToggle;