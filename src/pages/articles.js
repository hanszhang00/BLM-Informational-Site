import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Article from "../components/Article";
// ...GatsbyImageSharpFluid

// const Blog = ({
//   data: {
//     allStrapiBlogs: { nodes: blogs },
//   },
// }) => {
//   return (
//     <Layout>
//       <section className='blog-page'>
//         <Blogs blogs={blogs} title='articles'></Blogs>
//       </section>
//     </Layout>
//   );
// };
const Blog = () => {
  <h1> Blog </h1>;
};

export const query = graphql`
  {
    allStrapiArticles {
      nodes {
        title
        description
        date(formatString: "MMMM, DD, YYYY")
        slug
        isRef
        url
        website
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

export default Blog;
