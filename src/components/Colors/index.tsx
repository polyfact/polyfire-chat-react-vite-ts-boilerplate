import React, { CSSProperties, ReactNode, useState } from "react";

type ColorPickerWrapperProps = {
  children: (props: { colors: Record<string, string> }) => ReactNode;
  initialColors: Record<string, string>;
};

const ColorPickerWrapper = ({
  children,
  initialColors,
}: ColorPickerWrapperProps) => {
  const [colors, setColors] = useState<Record<string, string>>(initialColors);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 10, y: 100 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const startDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setStartPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const onDrag = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - startPosition.x;
      const newY = e.clientY - startPosition.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", stopDrag);
    } else {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
    }

    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  const handleColorChange = (propName: string, color: string) => {
    setColors({ ...colors, [propName]: color });
  };

  const formatLabel = (label: string) => {
    return label
      .replace(/([A-Z])/g, " $1")
      .split(" ")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const closeButtonStyle: CSSProperties = {
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "bold",
    color: "#333",
    padding: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
  };

  const clipboardButtonStyle: CSSProperties = {
    padding: "8px 15px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4A90E2",
    color: "white",
    fontWeight: "bold",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.3s",
  };

  const colorPickerContainerStyle: CSSProperties = {
    position: "absolute",
    left: `${position.x}px`,
    top: `${position.y}px`,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
    paddingTop: "30px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
  };

  const colorPickerStyle = {
    colorBox: {
      display: "flex",
      alignItems: "center",
      padding: "5px",
      borderRadius: "5px",
      boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#fff",
      justifyContent: "space-between",
    },
    label: {
      marginRight: "10px",
      fontWeight: "bold",
      color: "#000",
      fontSize: "14px",
    },
    input: {
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  const renderColorPicker = (label: string, propName: string) => (
    <div style={colorPickerStyle.colorBox}>
      <label style={colorPickerStyle.label}>{formatLabel(label)}</label>
      <input
        type="color"
        value={colors[propName]}
        onChange={(e) => handleColorChange(propName, e.target.value)}
        style={colorPickerStyle.input}
      />
    </div>
  );

  const copyToClipboard = () => {
    const colorString = JSON.stringify(colors, null, 2);
    navigator.clipboard
      .writeText(colorString)
      .then(() =>
        alert(
          "Colors copied to clipboard!\n\nNow, replace defaultColors in ColorPickerWrapper.tsx with the copied colors"
        )
      )
      .catch((err) => console.error("Could not copy text: ", err));
  };

  return (
    <>
      {isVisible && (
        <div style={colorPickerContainerStyle} onMouseDown={startDrag}>
          <button style={closeButtonStyle} onClick={handleClose}>
            x
          </button>
          {Object.keys(colors).map((key) => {
            console.log("key", key);
            return renderColorPicker(key.replace(/([A-Z])/g, " $1"), key);
          })}
          <button
            onClick={copyToClipboard}
            style={clipboardButtonStyle}
            className="clipboard-btn"
          >
            Copy Config Colors
          </button>{" "}
        </div>
      )}
      {children({ colors })}
    </>
  );
};

export default ColorPickerWrapper;
