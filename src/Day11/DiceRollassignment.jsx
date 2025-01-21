import Show from "./Show";
import { useState } from "react";
import "../App.css";

const DiceRollassignment = () => {
    const [diceValue, setDiceValue] = useState('');
    const [onClickValue, setOnClickValue] = useState(null);
    const [isValid, setIsValid] = useState(true);

    const handleRollDice = () => {
        const value = parseInt(diceValue, 10);
        console.log(value);
        
        if(value > 6 || value < 1){
            setIsValid(false);
        } else {
            setIsValid(true);
        }

        if (!isNaN(value) && value >= 1 && value <= 6) {
            setOnClickValue(value);
        } else {
            setOnClickValue(null); 
        }
    };

    return (
        <div className="dice-roll-container">
            <input
                style={{ padding: "10px", margin: "10px" }}
                type="number"
                placeholder="Dice value"
                value={diceValue}
                onChange={(e) => setDiceValue(e.target.value)}
            />
            {!isValid && <span style={{color:"red"}}>invalid input</span>}
            <button className="roll-button" onClick={handleRollDice}>Roll Dice</button>
            <Show onClickValue={onClickValue} />
        </div>
    );
};

export default DiceRollassignment;
