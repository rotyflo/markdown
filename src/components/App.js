import Editor from './Editor';
import Preview from './Preview';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App terminal container">
        <header className="App-header">
          <h1>Markdown Editor</h1>
        </header>
  
        <Editor></Editor>
        <Preview></Preview>
      </div>
    );
  }
}

export default App;
