import Editor from './Editor';
import Preview from './Preview';
import React from 'react';
import Buttons from './Buttons';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1>Markdown Editor</h1>
          <Buttons />
        </header>
  
        <div style={this.props.currentView === 'editor' ? {display: 'initial'} : {display: 'none'}}>
          <Editor />
        </div>
        <div style={this.props.currentView === 'preview' ? {display: 'initial'} : {display: 'none'}}>
          <Preview />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentView: state.currentView
  }
}

export default connect(mapStateToProps)(App);
