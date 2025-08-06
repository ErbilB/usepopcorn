import { useState } from "react";

const textContainerStyle = {
  margin: "5px",
  padding: "5px",
  width: "100%",
  backgroundColor: "#e7e7e7",
};

export default function TextExpander({
  children,
  collapsChar = 50,
  color = "#00f",
  displayButtonUnder = true,
  buttonCollapseText = "Close Text",
  buttonExpandText = "Show Text",
}) {
  const [isOpen, setIsOpen] = useState(true);

  const display = displayButtonUnder ? "block" : "inline-block";

  const textStyle = {
    margin: "0",
  };

  const contentStyle = {
    display,
  };

  const buttonStyle = {
    background: "none",
    border: "none",
    color,
  };

  return (
    <div style={textContainerStyle}>
      <p style={textStyle}>
        {isOpen && <span style={contentStyle}>{children}</span>}
        <button style={buttonStyle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? buttonCollapseText : buttonExpandText}
        </button>
      </p>
    </div>
  );
}
