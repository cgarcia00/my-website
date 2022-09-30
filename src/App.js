import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Blog from "./Blog";
import Error from "./Error";
import defaultBg from "./img/pexels-bg1.jpg";
import Project from "./Project";
import BlogPost1 from "./BlogPost1";
import BlogPost_ImageCompressor from "./BlogPost_ImageCompressor";
import BlogPost_HiddenData from "./BlogPost_HiddenData";

function App() {
  // These three states are so the routes can control
  // their background
  const [bgColor, setBgColor] = useState("white");
  const [bgIsImage, setBgIsImage] = useState(true);
  const [bgImg, setBgImg] = useState(defaultBg);

  const changeBackground = (isImg, val) => {
    setBgIsImage(isImg);
    if (isImg) {
      setBgImg(val);
    } else {
      setBgColor(val);
    }
  };

  if (bgIsImage) {
    document.body.style.backgroundImage = `url(${bgImg})`;
    document.body.style.backgroundColor = `white`;
  } else {
    document.body.style.backgroundImage = ``;
    document.body.style.backgroundColor = `${bgColor}`;
  }

  return (
    <Router basename="/my-website">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home changeBackground={changeBackground} />}
        />
        <Route
          exact
          path="/my-website"
          element={<Home changeBackground={changeBackground} />}
        />
        <Route
          path="/projects"
          element={<Projects changeBackground={changeBackground} />}
        />
        <Route
          path="/blog"
          element={<Blog changeBackground={changeBackground} />}
        />
        <Route
          path="/contact"
          element={<Contact changeBackground={changeBackground} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/projects/:id"
          element={<Project changeBackground={changeBackground} />}
        />
        <Route
          path="/blog/audio-lightswitch"
          element={<BlogPost1 changeBackground={changeBackground} />}
        />
        <Route
          path="/blog/image-compressor"
          element={
            <BlogPost_ImageCompressor changeBackground={changeBackground} />
          }
        />
        <Route
          path="/blog/hidden-data"
          element={<BlogPost_HiddenData changeBackground={changeBackground} />}
        />
        <Route
          path="*"
          element={<Error changeBackground={changeBackground} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
