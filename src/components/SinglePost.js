import React from "react";
import { Link } from "react-router-dom";
//import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div>
      <h1>Single Post Details</h1>

      <button>
        <Link className="post-button" to="/Posts">
          back to post list
        </Link>
      </button>
    </div>
  );
};

export default SinglePost;
