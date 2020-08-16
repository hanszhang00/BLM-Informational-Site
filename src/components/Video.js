import React from "react";
import Iframe from "react-iframe";

const Video = ({ video: { title, description, date, creator, video } }) => {
  // need this for the embedded video to work
  // although probably better to do it in helper method
  // and apply extra check
  return (
    <div className='blog'>
      <article>
        <Iframe
          url={video.replace("watch?v=", "embed/")}
          className='video'
          allowFullScreen
          loading='true'
        />
        <div className='blog-card'>
          <a href={video}>
            <h4>{title}</h4>
          </a>
          <p>{description}</p>
          <div className='blog-footer'>
            <p>{creator}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Video;
