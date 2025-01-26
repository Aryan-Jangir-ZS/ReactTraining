import "./ToolTip.css"
import Tooltip from "./ToolTip";
const Button = ({ text, alignment, toggleSidebar }) => {
    return (
      <Tooltip text={text} alignment={alignment} toggleSidebar={toggleSidebar}>
        <button>Click Me</button>
      </Tooltip>
    );
  };

  export default Button;