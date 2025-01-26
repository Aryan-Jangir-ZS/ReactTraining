import {useEffect, useRef, useState} from "react"

  const Tooltip = ({ text, alignment = "top", children, toggleSidebar }) => {
    const [showText, setShowText] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowText(false);
          if (alignment === "sidebar") toggleSidebar(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
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
  
    return (
      <div
        ref={ref}
        style={{
          position: "relative",
          cursor: "pointer",
        }}
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
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