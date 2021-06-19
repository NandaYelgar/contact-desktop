import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./GetAQuoteButton22.css";

function GetAQuoteButton22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(i2601281964120TimelineData);
  }, []);

  return (
    <div className="i26012819-64120 component component-wrapper not-ready">
      <div className="master-button-48ZiPc">
        <div className="button-i2601281964-OIcoLs valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const i2601281964120TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".i26012819-64120",
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

export default GetAQuoteButton22;
