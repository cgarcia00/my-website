import React from "react";
import Navbar from "./Navbar";
import defaultBg from "./img/pexels-bg1.jpg";
import { useEffect } from "react";

const Contact = ({ changeBackground }) => {
  useEffect(() => {
    changeBackground(true, defaultBg);
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="page-header">Contact</h1>
      <div style={{ marginLeft: "50px", marginTop: "40px" }}>
        <h2></h2>
        <div>
          <p className="contact">Email: cgarcia0@cs.stanford.edu</p>
          <p className="contact">
            LinkedIn:
            <a
              style={{ marginLeft: "5px" }}
              href="https://www.linkedin.com/in/cgarcia0"
            >
              https://www.linkedin.com/in/cgarcia0
            </a>
          </p>
          <p className="contact">
            Github:
            <a
              style={{ marginLeft: "5px" }}
              href="https://github.com/cgarcia00"
            >
              https://github.com/cgarcia00
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
