import React from "react";
import "./TextInputsNormal6.css";

function TextInputsNormal6(props) {
  const { children, className } = props;

  return (
    <div className={`text-inputs-normal-1 ${className || ""}`}>
      <div className="frame-1-1 border-1px-light-grey">
        <div className="city-i26012810671 inter-normal-sonic-silver-14px">{children}</div>
      </div>
    </div>
  );
}

export default TextInputsNormal6;
