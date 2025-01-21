import { useState, useEffect } from "react";

const Show = ({ onClickValue }) => {
    const [showArr, setShowArr] = useState([]); 
    const [showImg, setShowImg] = useState([]); 

    useEffect(() => {
        if (onClickValue && onClickValue >= 1 && onClickValue <= 6) {
            const numbers = Array.from({ length: onClickValue }, (_, i) => i + 1);
            setShowArr(numbers);

            setShowImg([]);

            numbers.forEach((_, index) => {
                setTimeout(() => {
                    setShowImg((prev) => [...prev, index]); 
                }, index * 1000); 
            });
        } 
        else {
            setShowArr([]);
            setShowImg([]);
        }
    }, [onClickValue]);

    return (
        <>
            {showArr.map((i, index) => (
                showImg.includes(index) && ( 
                    <div key={index} className="dice-face">
                        <img src={`dice${i}.png`} alt={`Dice ${i}`} />
                    </div>
                )
            ))}
        </>
    );
};

export default Show;
