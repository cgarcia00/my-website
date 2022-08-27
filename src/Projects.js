import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Minipost from "./Minipost";
import { projects } from "./data";

const Projects = ({ changeBackground }) => {
  useEffect(() => {
    changeBackground(false, "#EEEEEE");
  }, []);

  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  const resolution_width = size * window.devicePixelRatio;
  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="page-header">Projects</h1>
      {projects.map((project) => {
        const { id, name, text, img } = project;

        return (
          <Minipost
            key={id}
            id={id}
            postName={name}
            postImg={img}
            text={text}
            resolution={resolution_width}
          />
        );
      })}
    </>
  );
};

export default Projects;
