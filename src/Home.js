import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Minipost from "./Minipost";
import blog_img from "./img/pixabay-blog1.jpg";
import chip_img from "./img/pixabay-chip1.jpg";
import defaultBg from "./img/pexels-bg1.jpg";
import my_img from "./img/CristobalGarcia.png";

import { projects, blogPosts } from "./data";

const Home = ({ changeBackground }) => {
  useEffect(() => {
    changeBackground(true, defaultBg);
  }, []);
  //for checking window resolution and zoom
  const [size, setSize] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [zoom, setZoom] = useState(
    ((window.outerWidth - 10) / window.innerWidth) * 100
  );
  const checkSize = () => {
    setSize(window.innerWidth);
    setHeight(window.innerHeight);
    setZoom(((window.outerWidth - 10) / window.innerWidth) * 100);
  };
  const resolution_width = size * window.devicePixelRatio;
  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  const sizeOfFont = resolution_width === 1680 ? "25" : "22";

  const proj1 = projects[projects.length - 1];
  const proj2 = projects[projects.length - 2];
  const post1 = blogPosts[blogPosts.length - 1];
  const post2 = blogPosts[blogPosts.length - 2];
  return (
    <>
      <Navbar />
      {zoom > 80 && zoom < 110 && resolution_width > 1250 && height > 600 ? (
        <>
          <div className="word-box">
            <p
              className="text-1"
              style={{
                fontSize: `${sizeOfFont}px`,
                fontWeight: "bold",
                width: "58%",
                float: "right",
              }}
            >
              Hello! My name is Cristobal Garcia and I am a Computer Science
              student at Stanford University. This website is both a record of
              projects and other endeavors I have undertaken and a journal of
              sorts for myself. I appreciate you taking the time to surf to this
              corner of the web. Have spendid day!
            </p>
            <img
              className="my-img"
              style={{ width: "36%" }}
              src={my_img}
              alt={"Photo of Cristobal Garcia"}
            />
          </div>
          <div
            className="image-box"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${chip_img})`,
            }}
          >
            <h3 className="title">Check Out some of my latest Projects</h3>
            <Minipost
              id={proj1.id}
              postName={proj1.name}
              postImg={proj1.img}
              text={proj1.text}
              resolution={0}
            />
            {resolution_width === 1680 ? (
              <Minipost
                id={proj2.id}
                postName={proj2.name}
                postImg={proj2.img}
                text={proj2.text}
                resolution={0}
              />
            ) : (
              ""
            )}
          </div>
          <div
            className="image-box"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${blog_img})`,
            }}
          >
            <h3 className="title">Take a Look at My Blog</h3>
            <Minipost
              postName={post1.name}
              postImg={post1.img}
              text={post1.text}
              resolution={0}
              isBlogPost={true}
              url={post1.url}
            />
            {/* UNCOMMENT WHEN 2ND BLOG POST IS ADDED
            {resolution_width === 1680 ? (
              <Minipost
                postName={post2.name}
                postImg={post2.img}
                text={post2.text}
                resolution={0}
                isBlogPost={true}
                url={post1.url}
              />
            ) : (
              ""
            )} */}
          </div>
        </>
      ) : (
        <div
          className="word-box"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            float: "none",
          }}
        >
          <p className="text-1" style={{ fontSize: "32px" }}>
            Hello! My name is Cristobal Garcia and I am a Computer Science
            student at Stanford University. This website is both a record of
            projects and other endeavors I have undertaken and a journal of
            sorts for myself. I appreciate you taking the time to surf to this
            corner of the web. Have spendid day!
          </p>
        </div>
      )}
    </>
  );
};

export default Home;
