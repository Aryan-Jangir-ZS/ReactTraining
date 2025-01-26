import Tooltip from "./ToolTip";

const Hover = ({ text, alignment }) => {
  return (
    <Tooltip text={text} alignment={alignment}>
      <span>Hover over me</span>
    </Tooltip>
  );
};


export default Hover;