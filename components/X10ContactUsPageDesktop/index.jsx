import React from "react";
import Group89 from "../Group89";
import TextInputsNormal5 from "../TextInputsNormal5";
import TextInputsNormal6 from "../TextInputsNormal6";
import Button2 from "../Button2";
import Footer32 from "../Footer32";
import HeaderWithBackground2 from "../HeaderWithBackground2";
import "./X10ContactUsPageDesktop.css";

function X10ContactUsPageDesktop(props) {
  const {
    contactUs,
    rectangle85,
    rectangle99,
    sendAMessage,
    text72,
    group89Props,
    textInputsNormal5Props,
    textInputsNormal6Props,
    textInputsNormal62Props,
    textInputsNormal63Props,
    button2Props,
    footer3Props,
    headerWithBackground2Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x10-contact-us-page-desktop screen">
        <div className="overlap-group">
          <Group89
            line4={group89Props.line4}
            line5={group89Props.line5}
            line6={group89Props.line6}
            line7={group89Props.line7}
            line8={group89Props.line8}
          />
          <div className="frame-1571">
            <h1 className="title valign-text-middle typographyheadlineh2-extrabold-40">{contactUs}</h1>
            <img className="rectangle-85" src={rectangle85} />
            <div className="flex-row">
              <img className="rectangle-99" src={rectangle99} />
              <div className="group-206">
                <div className="send-a-message valign-text-middle typographyheadlineh2-extrabold-40">
                  {sendAMessage}
                </div>
                <p className="text-28 typographybody16-regular">{text72}</p>
                <div className="frame-205">
                  <TextInputsNormal5>{textInputsNormal5Props.children}</TextInputsNormal5>
                  <div className="frame-1651">
                    <TextInputsNormal6>{textInputsNormal6Props.children}</TextInputsNormal6>
                    <TextInputsNormal6 className={textInputsNormal62Props.className}>
                      {textInputsNormal62Props.children}
                    </TextInputsNormal6>
                  </div>
                  <TextInputsNormal6 className={textInputsNormal63Props.className}>
                    {textInputsNormal63Props.children}
                  </TextInputsNormal6>
                  <Button2>{button2Props.children}</Button2>
                </div>
              </div>
            </div>
            <Footer32 {...footer3Props} />
          </div>
          <HeaderWithBackground2 {...headerWithBackground2Props} />
        </div>
      </div>
    </div>
  );
}

export default X10ContactUsPageDesktop;
