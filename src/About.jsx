import React from "react";
import Common from "./Common";
import aboutweb from "../src/Images/aboutdev.png";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={aboutweb}
        visit="/contact"
        btnname="Contact Now"
      />
    </>
  );
};

export default About;
