import React from "react";
import img1 from "./images/g.png";
import img2 from "./images/h.png";
import img3 from "./images/i.jpg";
import "./header/style.css";
import Scroll from './Scroll.js';
import Photo2 from './Photo2.js';
const Items = () => {
  return (
    <div style={{ marginLeft: "4em", marginRight: "4em" }}>
      <img src={img1} alt="img1" height="500px" />
      <img
        src={img2}
        alt="img2"
        height="500px"
        style={{ padding: "40px 0px 0px 40px" }}
      />
      <img
        src={img3}
        alt="img3"
        height="500px"
        style={{ padding: "40px 0px 0px 40px" }}
      />

      <div className="item">
        <ul className="menu">
          <li>
            <a>E-COMM</a>
          </li>
          <li>
            <a>PROMOTIONAL WEBSITE</a>
          </li>
          <li>
            <a>WEBSITE</a>
          </li>
        </ul>
      </div>

      <div className="item">
        <ul className="menu">
          <li>
            <h3 style={{ fontWeight: "lighter", marginLeft: "2em" }}>
              Maguire Shoes
            </h3>
          </li>
          <li>
            <h3 style={{ fontWeight: "lighter", marginLeft: "4em" }}>
              Bravo Musique
            </h3>
          </li>
          <li>
            <h3 style={{ fontWeight: "lighter", marginLeft: "6em" }}>
              Sago Mini
            </h3>
          </li>
        </ul>
      </div>
      <Photo2/>
      <div className="navbar">
        <ul class="menu">
          <li>
            <a>MICRO DOSES (FRENCH)</a>
          </li>
          <li style={{ marginLeft: "40em" }}>
            <a>Listen on Spotify</a>
          </li>
        </ul>
      </div>
      <footer style={{marginTop:"5em"}}>
        <a style={{ marginLeft: "10em" }}>© Deux Huit Huit. MMXXI v3.6.8</a>
        <a style={{ marginLeft: "20px" }}>Terms of service</a>
        <a style={{ marginLeft: "20px" }}>Found a bug?</a>
        <Scroll/>
      </footer>
    </div>
  );
};

export default Items;
