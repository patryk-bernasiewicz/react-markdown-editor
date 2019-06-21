import React, { Fragment, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import EditorContext from './editor-context';
import Head from './components/Head';
import Editor from './components/Editor';
import Preview from './components/Preview';

const App = () => {
  const [text, setText] = useState('');

  const handleTextUpdate = value => setText(value);

  return (
    <Fragment>
      <Head />
      <EditorContext.Provider value={{ text, handleTextUpdate }}>
        <div className="stretch">
          <Grid className="stretch">
            <Grid.Column tablet={8} className="App__editor">
              <Editor />
            </Grid.Column>
            <Grid.Column tablet={8} className="App__preview">
              <Preview />
            </Grid.Column>
          </Grid>
        </div>
      </EditorContext.Provider>
    </Fragment>
  );
};

export default App;
