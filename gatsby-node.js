exports.createPages = async function({ graphql, actions }) {
  const blogs = await graphql(
  `
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {published: {eq: true}}}) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  // Create blog posts pages
  blogs.data.allMdx.edges.forEach(edge => {
    const id = edge.node.id
    const slug = edge.node.frontmatter.slug

    actions.createPage({
      path: slug,
      component: require.resolve("./src/template/single-blog.js"),
      context: { id }
    })
  });
}