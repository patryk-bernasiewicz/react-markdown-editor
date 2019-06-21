import React from 'react';
import ContentEditable from 'react-sane-contenteditable';
import EditorContext from '../editor-context';

const Editor = () => {
  const editorRef = React.createRef();

  return (
    <EditorContext.Consumer>
      {context => (
        <ContentEditable
          ref={editorRef}
          content={context.text}
          onChange={(e, value) => context.handleTextUpdate(value)}
          tagName="div"
          multiLine={true}
          focus={true}
          style={{ height: '100%' }}
        />
      )}
    </EditorContext.Consumer>
  );
};

export default Editor;
