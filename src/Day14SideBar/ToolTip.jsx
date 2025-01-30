import {useEffect, useRef, useState} from "react"

  const Tooltip = ({ text, alignment = "top", children, toggleSidebar, isButton=false }) => {
    const [showText, setShowText] = useState(false);
    const ref = useRef(null);



    

    const generalStyle = {
        position: "absolute",
        backgroundColor: "black",
        color: "white",
        padding: "5px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        zIndex: 5,
        whiteSpace: "nowrap",
      };
    
      const alignmentClass = {
        top: { top: "-50px", left: "35%", transform: "translateX(-50%)" },
        bottom: { bottom: "-50px", left: "35%", transform: "translateX(-50%)" },
        left: { top: "-50%", left: "-70px", transform: "translateY(-50%)" },
        right: { top: "-20%", right: "-70px", transform: "translateY(-50%)" },
      };
    
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          if (alignment == "sidebar") 
            {
                toggleSidebar(false);
            }
        }
      };

      const clickButton = (event) =>{
        if (ref.current && !ref.current.contains(event.target)) {
            setShowText(false);
        }
      }


      let clickFunction;
      if((isButton && alignment=="sidebar" )){
           clickFunction = handleClickOutside ;
    
      }
      else if(isButton){
        clickFunction= clickButton;
      }
      document.addEventListener("mousedown", clickFunction);
        
    return () => {
        document.removeEventListener("mousedown", clickFunction);


    };
    
    }, [alignment, toggleSidebar]);
  
    if (alignment === "sidebar") {
      return (
        <div
          ref={ref}
          style={{
            position: "relative",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            toggleSidebar((prev) => !prev); 
          }}
        >
          {children}
        </div>
      );
    }
  
    return (
        <div
        ref={ref}
        style={{
          position: "relative",
          cursor: "pointer",
        }}
        {...(isButton
          ? {
              onClick: () => setShowText(!showText),
            }
          : {   
                
              onMouseEnter: () => setShowText(true),
              onMouseLeave: () => setShowText(false),
            })}
      >
        {showText && (
          <div style={{ ...generalStyle, ...alignmentClass[alignment] }}>
            {text}
          </div>
        )}
        {children}
      </div>
  
    );


  };

  export default Tooltip;