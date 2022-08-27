import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { blogPosts } from "./data";
import { Link } from "react-router-dom";

const Blog = ({ changeBackground }) => {
  useEffect(() => {
    changeBackground(false, "#0F0F1F");
  }, []);
  return (
    <>
      <Navbar />
      <h1
        className="page-header"
        style={{ color: "white", fontFamily: "Couier" }}
      >
        Blog
      </h1>
      {blogPosts.map((post) => {
        const { name, text, img, url } = post;
        return (
          <>
            <div>
              <Link to={`${url}`} className="blog-name">
                {name}
              </Link>
            </div>
            <img className="blog-image" src={img} alt={name} />
            <p className="blog-text">{text}</p>
            <Link to={`${url}`}>
              <p className="blog-text link">read more...</p>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default Blog;
