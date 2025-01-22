import { useState } from "react";
import "./accordion.css";

const ShowContent = ({ title, description }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="accordion-item">
      <div
        className="accordion-title"
        onClick={() => setShowContent((prev) => !prev)}
      >
        {title}
        <span
          className={`accordion-icon ${
            showContent ? "accordion-icon-rotated" : ""
          }`}
        ></span>
      </div>
      {showContent && <div className="accordion-content">{description}</div>}
    </div>
  );
};

export default ShowContent;
