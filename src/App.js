import React, { Fragment, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import Head from './components/Head';
import Editor from './components/Editor';
import Preview from './components/Preview';

const App = () => {
  const [text, setText] = useState('');

  const handleTextUpdate = value => setText(value);

  return (
    <Fragment>
      <Head />
      <Grid className="stretch">
        <Grid.Column tablet={8} className="App__editor">
          <Editor handleTextUpdate={handleTextUpdate} />
        </Grid.Column>
        <Grid.Column tablet={8} className="App__preview">
          <Preview source={text} />
        </Grid.Column>
      </Grid>
    </Fragment>
  );
};

export default App;
