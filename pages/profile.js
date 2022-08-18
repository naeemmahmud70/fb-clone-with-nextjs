import React from "react";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileIntro from "../components/Profile/ProfileIntro";
import ProfilePosts from "../components/Profile/ProfilePosts";

const Profile = () => {
  return (
    <>
      <Navbar></Navbar>
      <Meta title="Profile"></Meta>
      <ProfileHeader></ProfileHeader>
      <div style={{ backgroundColor: "#1c1e21", marginTop: "-50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <ProfileIntro></ProfileIntro>
            </div>
            <div className="col-md-7">
              <ProfilePosts></ProfilePosts>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
