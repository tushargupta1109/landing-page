import React from "react";

const Scroll = () => {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button onClick={scroll} style={{ display: "inline" ,marginLeft:"75em"}}>
        Back to top
      </button>
    </div>
  );
};

export default Scroll;