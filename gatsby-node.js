const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.tsx`);

  const pathTourlResolver = path =>
    `/blog${path.split("src/md")[1]}`.replace(".md", "");

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fileAbsolutePath
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log(node);
      createPage({
        path: pathTourlResolver(node.fileAbsolutePath),
        // path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          id: node.id
        } // additional data can be passed via context
      });
    });
  });
};
