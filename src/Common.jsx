import React from "react";
import "./index.css";

import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h3>
                    {props.name}{" "}
                    <strong className="brand-name">Full Stack </strong>
                  </h3>
                  <h5 className="my-3">
                    We are the team of Talented developer making websites
                  </h5>
                  <div className="mt-3"></div>
                  <NavLink to={props.visit} className="btn-get-started">
                    {props.btnname}
                  </NavLink>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Commonimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
