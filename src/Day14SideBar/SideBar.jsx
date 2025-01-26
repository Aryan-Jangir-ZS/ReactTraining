import { useRef, useEffect } from "react";

const SideBar = ({ isOpen, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={ref}
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "grey",
        position: "fixed",
        top: 0,
        left: isOpen ? 0 : "-250px",
        transition: "left 0.3s ease-in-out",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1001,
        padding: "16px",
      }}
    >
      <h2
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "16px",
          color: "white",
        }}
      >
        Menu
      </h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <li
          style={{
            padding: "8px 0",
            borderBottom: "1px solid #ddd",
            color: "white",
          }}
        >
          Text 1
        </li>
        <li
          style={{
            padding: "8px 0",
            borderBottom: "1px solid #ddd",
            color: "white",
          }}
        >
          Text 2
        </li>
        <li
          style={{
            padding: "8px 0",
            borderBottom: "1px solid #ddd",
            color: "white",
          }}
        >
          Text 3
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
