import { useState } from "react";
import "./ToolTip.css";
import SideBar from "./SideBar";
import Hover from "./Hover";
import Button from "./Button";

const Tooltips = [
  { text: "text1", alignment: "top" },
  { text: "text2", alignment: "top" },
  { text: "text3", alignment: "top" },
  { text: "text4", alignment: "left" },
  { text: "text5", alignment: "sidebar" },
  { text: "text6", alignment: "right" },
  { text: "text7", alignment: "bottom" },
  { text: "text8", alignment: "bottom" },
  { text: "text9", alignment: "bottom" },
];


const ToolTipDemo = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      onClick={() => setIsSidebarOpen(false)}
      style={{
        position: "relative",
      }}
    >
      {isSidebarOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          }}
        />
      )}

      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main
        onClick={(e) => e.stopPropagation()}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div className="card" key={i}>
            {i % 2 === 0 ? (
              <Button
                text={Tooltips[i].text}
                alignment={Tooltips[i].alignment}
                toggleSidebar={setIsSidebarOpen}
                isButton={true}
              />
            ) : (
              <Hover
                text={Tooltips[i].text}
                alignment={Tooltips[i].alignment}
              />
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default ToolTipDemo;
