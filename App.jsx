import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X10ContactUsPageDesktop from "./components/X10ContactUsPageDesktop";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|10-contact-us-page-desktop)">
          <X10ContactUsPageDesktop {...x10ContactUsPageDesktopData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const group89Data = {
    line4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-4@1x.svg",
    line5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-4@1x.svg",
    line6: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-4@1x.svg",
    line7: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-4@1x.svg",
    line8: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-4-4@1x.svg",
};

const textInputsNormal5Data = {
    children: "Comment",
};

const textInputsNormal6Data = {
    children: "Name (Required)",
};

const textInputsNormal62Data = {
    children: "Email (Required)",
    className: "text-inputs-normal-2",
};

const textInputsNormal63Data = {
    children: "Phone Number  (Required)",
    className: "text-inputs-normal-3",
};

const button2Data = {
    children: "SEND MESSAGE",
};

const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-88@2x.svg",
};

const group86222Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85@2x.svg",
    whiteProps: whiteData,
};

const facebookAppSymbol3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1@2x.svg",
};

const twitter3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-97@2x.svg",
};

const frame4Data = {
    text41: "About Us",
    text42: "Projects",
    text43: "Videos",
    text44: "Packages",
    text45: "Insights",
    text46: "Blogs",
    text47: "FAQ’s",
};

const frame53Data = {
    text40: "Quick Links",
    frame4Props: frame4Data,
};

const frame42Data = {
    text49: "Construction",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
};

const frame422Data = {
    text49: "Interior",
    text50: "Basic",
    place: "Standard",
    text51: "Premium",
    text52: "Luxury",
    className: "frame-5-1",
};

const frame6Data = {
    text48: "Packages",
    frame42Props: frame42Data,
    frame422Props: frame422Data,
};

const frame43Data = {
    text41: "BBEMP",
    text42: "BWSSB",
    text43: "BESCOM",
    text44: "Procedure",
    text45: "Vaastu",
    text46: "Bye Laws",
    text47: "Tips & Ideas",
};

const frame7Data = {
    text56: "Insights",
    frame4Props: frame43Data,
};

const footer32Data = {
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-94@2x.svg",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-95@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-96@2x.svg",
    group862Props: group86222Data,
    facebookAppSymbolProps: facebookAppSymbol3Data,
    twitterProps: twitter3Data,
    frame5Props: frame53Data,
    frame6Props: frame6Data,
    frame7Props: frame7Data,
};

const white2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-1@2x.svg",
    whiteProps: white2Data,
};

const getAQuoteButton22Data = {
    children: "GET A QUOTE",
};

const headerWithBackground2Data = {
    unselectedI2601281: "HOME",
    unselectedI26012812: "ABOUT US",
    unselectedI26012813: "PROJECTS",
    unselectedI26012814: "VIDEOS",
    unselectedI26012815: "INSIGHTS",
    unselectedI26012816: "BLOGS",
    unselectedI26012817: "FAQ’S",
    selectedI26012819: "CONTACT US",
    group86Props: group86Data,
    getAQuoteButton22Props: getAQuoteButton22Data,
};

const x10ContactUsPageDesktopData = {
    contactUs: "Contact Us",
    rectangle85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-85-3@1x.png",
    rectangle99: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-99@1x.png",
    sendAMessage: "Send a message",
    text72: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing.",
    group89Props: group89Data,
    textInputsNormal5Props: textInputsNormal5Data,
    textInputsNormal6Props: textInputsNormal6Data,
    textInputsNormal62Props: textInputsNormal62Data,
    textInputsNormal63Props: textInputsNormal63Data,
    button2Props: button2Data,
    footer3Props: footer32Data,
    headerWithBackground2Props: headerWithBackground2Data,
};

