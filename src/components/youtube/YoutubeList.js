import React from "react";
import YoutubeItem from './YoutubeItem'
import {YoutubeData} from '../../Data'


const YoutubeList = () => {
  return (
    <div>
      <div className="youtube-list">
        {YoutubeData.map((item, index) => (
          <YoutubeItem
            key = {index}
            className={index === 1 ? "abc" : ""}
            image={item.image}
            title={item.title}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
};

export default YoutubeList;
