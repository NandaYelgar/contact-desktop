import React from "react";
import "./TextInputsNormal5.css";

function TextInputsNormal5(props) {
  const { children } = props;

  return (
    <div className="text-inputs-normal">
      <div className="frame-1 border-1px-light-grey">
        <div className="city-i26012812671 inter-normal-sonic-silver-14px">{children}</div>
      </div>
    </div>
  );
}

export default TextInputsNormal5;
