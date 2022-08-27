import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link, useParams } from "react-router-dom";
import { projects } from "./data";
import bg from "./img/pexels-pixabay-459277.jpg";

const Project = ({ changeBackground }) => {
  const [name, setName] = useState("default name");
  const [media, setMedia] = useState([]);
  const [videos, setVideo] = useState([]);
  const [curVideo, setCurVideo] = useState(0);
  const [img, setImg] = useState("");
  const [postText, setPostText] = useState([]);
  const [mediaType, setMediaType] = useState([]);
  const [isVideo, setIsVideo] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    changeBackground(false, "#EEEEEE");
  }, []);
  useEffect(() => {
    const newProject = projects.find((project) => project.id === parseInt(id));
    const { name, img, media, mediaType, videos, projectPost } = newProject;
    setName(name);
    setImg(img);
    setMediaType(mediaType);
    setVideo(videos);
    setMedia(media !== undefined ? media : []);
    setPostText(projectPost !== undefined ? projectPost : []);
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

  const [expandImage, setExpandImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const expand = (content, type, index) => {
    // if you want to make the page scroll to top after clicked use this.
    // window.scroll(0, 0);
    type === "video" ? setIsVideo(true) : setIsVideo(false);
    setCurVideo(index);
    setSelectedImage(content);
    setExpandImage(true);
  };
  return (
    <>
      <Navbar />
      {85 < zoom && zoom < 105 && resolution_width > 1250 && height > 600 ? (
        expandImage ? (
          <>
            <button className="btn" onClick={() => setExpandImage(false)}>
              <p style={{ fontSize: "50px" }}>x</p>
            </button>
            {isVideo ? (
              <video
                className="project-video"
                style={
                  resolution_width === 1680
                    ? { width: "50rem", height: "48rem" }
                    : {}
                }
                controls
              >
                <source src={videos[curVideo]} type="video/mp4" />
              </video>
            ) : (
              <img className="project-expanded-content" src={selectedImage} />
            )}
          </>
        ) : (
          <>
            <h1 className="page-header">{name}</h1>
            <img className="project-img" src={img} alt={name} />
            {/* Use 35% for 1680 res */}
            <div
              style={
                resolution_width === 1680
                  ? { marginTop: "3%", marginLeft: "40%", marginRight: "3%" }
                  : { marginTop: "3%", marginLeft: "47%", marginRight: "3%" }
              }
            >
              <h3>Project Overview</h3>
              <p>{postText[0]}</p>
              <h3>Implementation</h3>
              {postText[1] !== undefined
                ? postText[1].map((paragraph) => {
                    return (
                      <>
                        <p>{paragraph}</p>
                      </>
                    );
                  })
                : ""}
              <h3>Thoughts</h3>
              <p>{postText[2]}</p>
            </div>
            {/* top is 80% for 1680 res */}
            <div
              className="project-media"
              style={
                resolution_width === 1680 ? { top: "70%" } : { top: "95%" }
              }
            >
              {media.slice(0, 2).map((content, index) => {
                return (
                  <img
                    style={
                      index === 0
                        ? { borderTopLeftRadius: "5%" }
                        : { borderTopRightRadius: "5%" }
                    }
                    key={content.id}
                    src={content}
                    alt="missing img"
                    className="project-media-content"
                    onClick={() => expand(content, mediaType[index], index)}
                  />
                );
              })}
              <br />
              {media.slice(2).map((content, index) => {
                return (
                  <img
                    style={
                      index === 0
                        ? { borderBottomLeftRadius: "5%" }
                        : { borderBottomRightRadius: "5%" }
                    }
                    key={content.id}
                    src={content}
                    alt="missing img"
                    className="project-media-content"
                    onClick={() =>
                      expand(content, mediaType[index + 2], index + 2)
                    }
                  />
                );
              })}
            </div>
          </>
        )
      ) : (
        <>
          <h1 className="page-header">{name}</h1>
          {/* Use 35% for 1680 res */}
          <div style={{ marginTop: "3%", marginLeft: "4%" }}>
            <h3>Project Overview</h3>
            <p>{postText[0]}</p>
            <h3>Implementation</h3>
            <p>{postText[1]}</p>
            <h3>Thoughts</h3>
            <p>{postText[2]}</p>
          </div>
        </>
      )}
    </>
  );
};

export default Project;
