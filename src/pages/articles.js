import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Title from "../components/Title";
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
const ArticlesPage = ({
  data: {
    allStrapiArticles: { nodes: articles },
  },
}) => {
  return (
    <Layout>
      <section className='section blog-page'>
        <Title title='articles'></Title>
        <div className='section-center blogs-center'>
          {articles.map((article) => {
            return <Article key={article.id} article={article}></Article>;
          })}
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiArticles(sort: { fields: date, order: DESC }) {
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

export default ArticlesPage;
