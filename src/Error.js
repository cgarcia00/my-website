import React from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";

const Error = ({ changeBackground }) => {
  useEffect(() => {
    changeBackground(false, "#AAAAAA");
  }, []);
  return (
    <>
      <Navbar />
      <h1>Page not found</h1>
    </>
  );
};

export default Error;
