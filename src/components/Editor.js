import React, { useState, useEffect } from 'react';
import ContentEditable from 'react-sane-contenteditable';

const Editor = ({ handleTextUpdate }) => {
  const [text, setText] = useState('');
  const editorRef = React.createRef();

  useEffect(() => {
    handleTextUpdate(text);
  }, [handleTextUpdate, text]);

  return (
    <ContentEditable
      ref={editorRef}
      content={text}
      onChange={(e, value) => setText(value)}
      tagName="div"
      multiLine={true}
      focus={true}
      style={{ height: '100%' }}
    />
  );
};

export default Editor;
