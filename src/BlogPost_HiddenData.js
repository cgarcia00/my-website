import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

import pdf from "./img/proj2d.pdf";
import africa from "./img/africa-toto.wav";
import africaWithData from "./img/combined_audio.mp3";

const BlogPost_ImageCompressor = ({ changeBackground }) => {
  useEffect(() => {
    changeBackground(false, "#0F0F1F");
  }, []);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Navbar />
      <p className="blog-text">
        Make sure to check out the un/modified audio at the end of the page!
      </p>
      <div>
        <iframe src={pdf} height="1000" width="100%" />
      </div>
      <p className="blog-text" style={{ marginTop: "6%" }}>
        This is the original audio for Toto's "Africa"
      </p>
      <audio
        controls
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          marginTop: "3%",
          marginBottom: "3%",
        }}
      >
        <source src={africa} type="audio/wav" />
      </audio>
      <p className="blog-text">
        This is the audio with the hidden data in it. If you listen closely,
        especially with headphones, you might hear the On/Off encoding beeps.
      </p>
      <audio
        controls
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          marginTop: "3%",
          marginBottom: "10%",
        }}
      >
        <source src={africaWithData} type="audio/mp3" />
      </audio>
    </>
  );
};

export default BlogPost_ImageCompressor;
