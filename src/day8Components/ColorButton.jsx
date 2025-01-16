import React from 'react';

const ColorButton = ({ color, onClick }) => {
    return (
        <button
            style={{
                width: '80px',
                height: '80px',
                backgroundColor: color || 'grey',
                margin: '10px',
                border: 'none',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onClick={onClick}
            onMouseEnter={(e) => !color && (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => !color && (e.currentTarget.style.transform = 'scale(1)')}
        />
    );
};

export default ColorButton;
