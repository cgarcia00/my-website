import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

import pdf from "./img/project-1d.pdf";

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
      <div>
        <iframe src={pdf} height="1000" width="100%" />
      </div>
    </>
  );
};

export default BlogPost_ImageCompressor;
