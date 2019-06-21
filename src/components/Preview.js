import React, { useState, useEffect } from 'react';
import marked from 'marked';

const Preview = ({ source }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    setMarkdown(source ? marked(source) : '');
  }, [source]);

  return (
    <div className="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
  );
};

export default Preview;
