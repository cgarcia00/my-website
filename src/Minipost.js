import React from "react";
import { Link } from "react-router-dom";

const Minipost = ({
  id,
  postName,
  postImg,
  text,
  resolution = 1680,
  isBlogPost = false,
  url,
}) => {
  let imgSize;
  if (resolution === 1680) {
    imgSize = "mini-post-img-large";
  } else {
    imgSize = "mini-post-img";
  }
  return (
    <div className="mini-post">
      <div>
        <Link to={isBlogPost ? url : `/projects/${id}`} className="text-3">
          {postName}
        </Link>
      </div>
      <Link to={isBlogPost ? url : `/projects/${id}`}>
        <img className={imgSize} src={postImg} alt={postName} />
      </Link>
      <p className="mini-post-text text-2">{text}</p>
    </div>
  );
};

export default Minipost;
