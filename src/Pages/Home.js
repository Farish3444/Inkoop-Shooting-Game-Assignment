import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="titlecard">
        <h1 style={{ fontSize: "80px" }}>
          THIS IS, <br /> <span className="title">FARISH</span>, DEVELOPER
          <br />
          HERE
        </h1>
        <p>We Code World Class Softwares</p>
        <button className="button">Lets Ride</button>
      </div>
    </React.Fragment>
  );
};

export default Home;
