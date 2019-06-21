import React, { useEffect } from 'react';
import EditorContext from '../editor-context';
import marked from 'marked';

const Preview = () => {
  useEffect(() => {
    console.log('one time?');
  }, []);

  return (
    <EditorContext.Consumer>
      {context => (
        <div
          className="preview"
          dangerouslySetInnerHTML={{
            __html: context.text ? marked(context.text) : ''
          }}
        />
      )}
    </EditorContext.Consumer>
  );
};

export default Preview;
