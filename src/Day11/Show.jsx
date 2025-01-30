import { useState, useEffect } from "react";

const Show = ({ onClickValue }) => {
    const [showArr, setShowArr] = useState([]);

    useEffect(() => {
        if (onClickValue && onClickValue >= 1 && onClickValue <= 6) {
            const numbers = Array.from({ length: onClickValue }, (_, i) => i + 1);
            setShowArr(numbers);
        } else {
            setShowArr([]);
        }
    }, [onClickValue]);

    return (
        <div className="dice-display">
            {
                showArr.map((i, index) => (
                    <div key={index} className="dice-face">
                        <img src={`dice${i}.png`} alt={`Dice ${i}`} />
                    </div>
                ))
            }
        </div>
    );
};

export default Show;
