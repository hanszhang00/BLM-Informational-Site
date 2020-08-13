import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";

const ComponentName = ({ data }) => {
  const { content, title } = data.article;

  return (
    <Layout>
      <section className='blog-template'>
        <h2 style={{ marginBottom: `5rem` }}> {title} </h2>
        <div className='section-center'>
          <article className='blog-content'>
            <ReactMarkdown source={content} />
          </article>
          <Link to='/articles/' className='btn center-btn'>
            back
          </Link>
        </div>
      </section>
    </Layout>
  );
};

// Right now, we are only querying the content as well as the content
// But in the future, we can certainly query more information (author, date, etc)
export const query = graphql`
  query GetSingleArticle($slug: String) {
    article: strapiArticles(slug: { eq: $slug }) {
      content
      title
    }
  }
`;

export default ComponentName;
