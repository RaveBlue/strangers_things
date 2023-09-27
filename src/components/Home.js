import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
//import Posts from "./Posts";
const Home = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "30px",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        welcome to Stranger's things
      </h2>
      <Link to="/Login" className="nav-link"></Link>
      <Login />
    </div>
  );
};
export default Home;
