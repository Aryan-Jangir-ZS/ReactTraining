import React from "react";


const Debouncing = () => {

    const debounce = () => {
        let  timeout;
        return (value) => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                console.log(value)
            }, 1000);
        };
    };
      
    const x = debounce();


    return (
        <div style={{ position: "absolute", top: "20%", left: "50%" }}>
            <input 
                type="text"
                onChange = {(e)=>{x(e.target.value)}}
                placeholder="Enter aryab"
            />
        </div>
    );
};

export default Debouncing;
