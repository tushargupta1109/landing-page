import React from "react";
import img1 from "./images/d.png";
import img2 from "./images/e.jpg";
import img3 from "./images/f.png";
import "./header/style.css";

const Box = () => {
  return (
    <div
      style={{
        marginLeft: "4em",
        marginRight: "4em",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1
        style={{ marginTop: "3em", textAlign: "center", marginBottom: "10px" }}
      >
        Ongoing projects
      </h1>
      <div
        className="box"
        style={{ display: "flex", marginLeft: "100px" }}
      >
        <img src={img2} alt="img2" height="300px" />
        <img src={img3} alt="img3" height="300px" />
        <img src={img1} alt="img1" height="300px" />
      </div>
      <div
        className="box"
      >
        <ul className="menu">
          <li>
            <a>Google Shanghai</a>
          </li>
          <li>
            <a>Biron</a>
          </li>
          <li>
            <a>Montreal Museum of Fine Arts</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Box;
