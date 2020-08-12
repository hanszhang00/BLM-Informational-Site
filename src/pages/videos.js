import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Blogs from "../components/Blogs";
// ...GatsbyImageSharpFluid

const Video = () => {
  return (
    <Layout>
      <section className='blog-page'>
        {/* <Blogs title='videos'></Blogs> */}
      </section>
    </Layout>
  );
};

// export const query = graphql`
//   {
//     allStrapiBlogs {
//       nodes {
//         id
//         title
//         slug
//         category
//         description
//         date(formatString: "MMMM, DD, YYYY")
//         image {
//           childImageSharp {
//             fluid {
//               src
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default Video;
