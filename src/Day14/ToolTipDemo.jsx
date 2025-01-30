import { useState, useRef, useEffect } from "react";
import "./ToolTip.css";

const Tooltips = [
  { text: "text1", alignment: "top" },
  { text: "text2", alignment: "top" },
  { text: "text3", alignment: "top" },
  { text: "text4", alignment: "left" },
  { text: "text5", alignment: "top" },
  { text: "text6", alignment: "right" },
  { text: "text7", alignment: "bottom" },
  { text: "text8", alignment: "bottom" },
  { text: "text9", alignment: "bottom" },
];



const Tooltip = ({ text, alignment = "top", children, isButton = false }) => {
  const [showText, setShowText] = useState(false);

  const ref = useRef(null);

  

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowText(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    left: { top: "-30%", left: "-70px", transform: "translateY(-50%)" },
    right: { top: "-30%", right: "-70px", transform: "translateY(-50%)" },
  };

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

const Button = ({ text, alignment }) => {
  return (
    <Tooltip text={text} alignment={alignment} isButton={true}>
      <button>Click Me</button>
    </Tooltip>
  );
};

const Hover = ({ text, alignment }) => {
  return (
    <Tooltip text={text} alignment={alignment}>
      <span>Hover over me</span>
    </Tooltip>
  );
};

const ToolTipDemo = () => {
    return (
        <main className="main">
      {Array.from({ length: 9 }).map((_, i) => (
        <div className="card" key={i}>
          {i % 2 === 0 ? (
            <Button text={Tooltips[i].text} alignment={Tooltips[i].alignment} />
          ) : (
            <Hover text={Tooltips[i].text} alignment={Tooltips[i].alignment} />
          )}
        </div>
      ))}
    </main>
    )
}

export default ToolTipDemo;