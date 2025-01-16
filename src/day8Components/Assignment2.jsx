import React, { useState } from 'react';
import ColorButton from './ColorButton';

const Assignment2 = () => {
    const newColors = "pink";
    const defaultColor = "grey";
    
    const [buttonOrder, setButtonOrder] = useState([]); 
    const [buttonData, setButtonData] = useState(
        Array(9).fill({ color: defaultColor, clicked: false })
    );

    let resetTimeout; 

    const handleClick = (index) => {
        const clickedCount = buttonData.filter(button => button.clicked).length;
        
        if (clickedCount >= 4 || buttonData[index].clicked) return;

        setButtonOrder((prevOrder) => {
            const newOrder = [...prevOrder, index];
            if (newOrder.length === 4) {
                startResetTimer(newOrder);
            }
            return newOrder;
        });
        
        setButtonData((prevData) => {
            const newData = [...prevData];
            newData[index] = { color: newColors, clicked: true };

            return newData;
        });

        if (resetTimeout) clearTimeout(resetTimeout);
    };

    const startResetTimer = (order) => {
        resetTimeout = setTimeout(() => {
            revertButtonColors(order);
        }, 4000); 
    };

    const revertButtonColors = (order) => {
        order.reverse().forEach((index, i) => {
            setTimeout(() => {
            setButtonData((prevData) => {
                const newData = [...prevData];
            newData[index] = { color: defaultColor, clicked: false };
                return newData;
            });
            }, i * 1000); 
        });

        setButtonOrder([]);
    };

    const handleReset = () => {
        setButtonData(Array(9).fill({ color: defaultColor, clicked: false }));
        setButtonOrder([]);
        if (resetTimeout) clearTimeout(resetTimeout); 
    };

    const renderButtons = () => {
        return buttonData.map((button, index) => (
            <ColorButton
                key={index}
                color={button.color}
                onClick={() => handleClick(index)}
            />
        ));
    };

    return (
        <div className='Cards-div'>
            {renderButtons()}
            
            <div className='button-div'>
                <button className="Assignment2" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Assignment2;
