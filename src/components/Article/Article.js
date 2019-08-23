import React from 'react';

import ArticleBody from './ArticleBody';

const Article = ({
  content: {
    title,
    text: {
      json
    },
    publishedAt
  }
}) => (
  <div>
    <h2>{title}</h2>
    <ArticleBody content={json} />
    <h5>{publishedAt}</h5>
  </div>
)

export default Article