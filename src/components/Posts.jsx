import React from "react";
import Cards from "./Cards";
import SideBar from "./SideBar";

function Posts() {
  return (
    <section id="posts">
      <div className="posts-container">
        <Cards />
        <SideBar />
      </div>
    </section>
  );
}

export default Posts;
