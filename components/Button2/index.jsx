import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button2.css";

function Button2(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x26012817TimelineData);
  }, []);

  return (
    <div className="x26012817 component component-wrapper not-ready">
      <div className="master-button-24ulab">
        <div className="button-i2601281751-SgFFGf valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x26012817TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x26012817",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button2;
