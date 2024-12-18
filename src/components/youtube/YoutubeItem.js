import React from "react";

const YoutubeItem = (props) => {
  return (
    <div>
      <div className={`youtube-item ${props.className}`}>
        <div className="youtube-image">
          <img src={props.image} alt="" className="youtube-avt" />
          <div className="youtube-info">
            <h1 className="youtube-title">{props.title || "temp title"}</h1>
            <h4 className="youtube-author">{props.author || "temp author"}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeItem