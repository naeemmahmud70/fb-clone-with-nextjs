import React from "react";
import AllPosts from "../components/Home/AllPosts";
import Stories from "../components/Home/Stories";
import UploadPost from "../components/Home/UploadPost";
import Navbar from "../components/Navbar";

const home = () => {
  return (
    <div style={{ backgroundColor: "#1c1e21" }}>
      <Navbar></Navbar>
      <div className="container">
        <Stories></Stories>
        <UploadPost></UploadPost>
        <AllPosts></AllPosts>
      </div>
    </div>
  );
};

export default home;
