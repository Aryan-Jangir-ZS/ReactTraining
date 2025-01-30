
import { useEffect, useState } from "react";

const Show = ({ onClickValue }) => {
    const [validPairs, setValidPairs] = useState([]);

    useEffect(() => {
        if (onClickValue >= 2 && onClickValue <= 6) {
            const pairs = [];
            for (let i = 1; i <= 6; i++) {
                for (let j = 1; j <= 6; j++) {
                    if (i + j === onClickValue) {
                        pairs.push([i, j]);
                    }
                }
            }
            setValidPairs(pairs);
        } else {
            setValidPairs([]);
        }
    }, [onClickValue]);

    return (
        <>
            {validPairs.map((pair, index) => (
                <div key={index} className="dice-row">
                    <div className="dice-face">
                        <img src={`dice${pair[0]}.png`} alt={`Dice ${pair[0]}`} />
                    </div>
                    <div className="dice-face">
                        <img src={`dice${pair[1]}.png`} alt={`Dice ${pair[1]}`} />
                    </div>
                </div>
            ))}
        </>
    );
};

export default Show;

