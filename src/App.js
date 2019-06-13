import React, { Component, Fragment } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import EditorContext from './editor-context';
import Head from './components/Head';
import Editor from './components/Editor';
import Preview from './components/Preview';

class App extends Component {
  state = {
    text: '',
    html: ''
  };

  handleTextUpdate = value => {
    this.setState({ text: value });
  };

  render() {
    return (
      <Fragment>
        <Head />
        <EditorContext.Provider
          value={{
            text: this.state.text,
            html: this.state.html,
            handleTextUpdate: this.handleTextUpdate
          }}
        >
          <Grid style={{ width: '100%' }}>
            <Grid.Column
              mobile={16}
              tablet={8}
              stretched={true}
              className='App__editor'
            >
              <Editor />
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={8}
              stretched={true}
              className='App__preview'
            >
              <Preview />
            </Grid.Column>
          </Grid>
        </EditorContext.Provider>
      </Fragment>
    );
  }
}

export default App;
