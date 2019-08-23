import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout'
import Article from '../components/Article/Article';

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        {
          contentfulPerson {
            avatar {
              file {
                url
              }
            }
            fullName
          }
          allContentfulArticle {
            edges {
              node {
                title
                text {
                  json
                }
                publishedAt
                id
              }
            }
          }
        }
      `}
      render={({
        allContentfulArticle: {
          edges
        }
      }) => (
        edges.map(({ node }) => (
          <Article key={node.id} content={node} />
        ))
      )}
    />
  </Layout>
)

export default IndexPage
