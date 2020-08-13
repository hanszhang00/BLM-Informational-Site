const path = require("path");

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      articles: allStrapiArticles(filter: { isRef: { eq: false } }) {
        nodes {
          slug
        }
      }
    }
  `);

  result.data.articles.nodes.forEach((article) => {
    createPage({
      path: `/articles/${article.slug}`,
      component: path.resolve(`src/templates/article-template.js`),
      context: {
        slug: article.slug,
      },
    });
  });
};
