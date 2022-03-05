import React from "react";
import "./index.css";
import Common from "./Common";
import web from "../src/Images/mern.png";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with "
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
};

export default Home;
