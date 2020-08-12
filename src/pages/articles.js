import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Blogs from "../components/Blogs";
// ...GatsbyImageSharpFluid

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className='blog-page'>
        <Blogs blogs={blogs} title='articles'></Blogs>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        id
        title
        slug
        category
        description
        date(formatString: "MMMM, DD, YYYY")
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
