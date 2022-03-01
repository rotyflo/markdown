import { handleEditor } from '../actions';
import { connect } from 'react-redux';
import React from 'react';

class Editor extends React.Component {
    render() {
        return (
            <textarea id="editor" onChange={event => {this.props.handleEditor(event.target.value)}} value={this.props.editorText}></textarea>
        );
    }
}

function mapStateToProps(state) {
    return {
        editorText: state.editorText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleEditor: (text) => {
            dispatch(handleEditor(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
