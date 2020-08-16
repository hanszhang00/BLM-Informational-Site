import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Video from "../components/Video.js";
import Title from "../components/Title.js";

const Videos = ({
  data: {
    allStrapiVideos: { nodes: videos },
  },
}) => {
  return (
    <Layout>
      <section className='section blog-page'>
        <Title title='videos'></Title>
        <div className='section-center video-center'>
          {videos.map((video) => {
            console.log("video is", video.video.replace("watch?v=", "embed/"));
            // jenky way to retrive the id
            const id = video.id.split("_")[1];
            return <Video key={id} video={video} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiVideos(sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        description
        creator
        video
        date(formatString: "MMMM, DD, YYYY")
      }
    }
  }
`;

export default Videos;
