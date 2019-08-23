import React from 'react';

const Article = ({
  content: {
    title,
    text: {
      text
    },
    publishedAt
  }
}) => (
  <div>
    <h2>{title}</h2>
    <div>{text}</div>
    <h5>{publishedAt}</h5>
  </div>
)

export default Article