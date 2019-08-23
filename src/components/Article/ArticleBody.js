import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const ArticleBody = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(node);
        const obj = node.data.target;
        return (
          <img
            src={obj.fields.file['en-US'].url}
            alt={obj.fields.description['en-US']}
          />
        );
      },
    },
  };
  const articleBody = documentToReactComponents(props.content, options);
  return <div>{articleBody}</div>;
};

export default ArticleBody;
