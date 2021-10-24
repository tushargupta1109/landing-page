import React from "react";
import img1 from "./images/a.png";
import img3 from "./images/c.png";
import './header/style.css';
import Photo from "./Photo";

const Section = () => {
  return (
    <div style={{ marginLeft: "4em", marginRight: "4em"}}>
      <Photo/>
      <h4>CONSULAT — ARTISTS & PRODUCERS</h4>
      <h3 style={{ fontWeight: "lighter" }}>
        It's all good. (Photo: Kelly Jacob)
      </h3>
      <img src={img1} alt="img1" height="525px" />
      <img src={img3} alt="img3" height="525px" style={{padding:"40px 0px 0px 40px"}}/>
      <div
        className="sec"
      >
        <ul className="menu">
          <li>
            <a>CAREERS</a> 
          </li>
          <li>
            <a>DESIGN</a>
          </li>
        </ul>
      </div>
      <div
        className="sec"
      >
        <ul className="menu">
          <li>
            <h3 style={{fontWeight:"lighter",marginLeft:"30px"}}>We're hiring. Two job openings!</h3>
          </li>
          <li>
            <h3 style={{fontWeight:"lighter"}}>The Micro Doses Branding Podcast - </h3>
            <h3 style={{fontWeight:"lighter"}}> Deux Huit Huit makes its on-air debut</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section;
