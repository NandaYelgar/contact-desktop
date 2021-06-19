import React from "react";
import Group86 from "../Group86";
import GetAQuoteButton22 from "../GetAQuoteButton22";
import "./HeaderWithBackground2.css";

function HeaderWithBackground2(props) {
  const {
    unselectedI2601281,
    unselectedI26012812,
    unselectedI26012813,
    unselectedI26012814,
    unselectedI26012815,
    unselectedI26012816,
    unselectedI26012817,
    selectedI26012819,
    group86Props,
    getAQuoteButton22Props,
  } = props;

  return (
    <div className="header-with-background">
      <Group86 group85={group86Props.group85} whiteProps={group86Props.whiteProps} />
      <div className="frame-34">
        <div className="frame-27">
          <div className="unselected-i2601281 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI2601281}
          </div>
          <div className="unselected-i2601281-1 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012812}
          </div>
          <div className="unselected-i2601281-2 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012813}
          </div>
          <div className="unselected-i2601281-3 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012814}
          </div>
          <div className="unselected-i2601281-4 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012815}
          </div>
          <div className="unselected-i2601281-5 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012816}
          </div>
          <div className="unselected-i2601281-6 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI26012817}
          </div>
          <div className="group-119">
            <div className="overlap-group1-3">
              <div className="rectangle-61"></div>
              <div className="selected-i26012819 valign-text-middle">{selectedI26012819}</div>
            </div>
          </div>
        </div>
        <GetAQuoteButton22>{getAQuoteButton22Props.children}</GetAQuoteButton22>
      </div>
    </div>
  );
}

export default HeaderWithBackground2;
