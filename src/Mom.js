import React from "react";
import "./Mom.css";

const Mom = () => {
  return (
    <div className="Mom">
      <h2>HAPPY MOTHER'S DAY</h2>
      <iframe
        width="360"
        height="480"
        src="https://www.youtube.com/embed/cdaD7rpsAr4?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <h2>Sorry for the choppy video!</h2>
      <div>
        <a href="https://youtu.be/QM9Yvlr_klE" target="_blank">
          <h1>You can check out the original song here</h1>
        </a>
      </div>
      <div>
        <p>
          Love,
          <br />
          Brendan
        </p>
      </div>
    </div>
  );
};

export default Mom;
