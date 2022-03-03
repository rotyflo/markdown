import React from "react";
import { connect } from "react-redux";
import { marked } from "marked";

class Preview extends React.Component {
    render() {
        marked.setOptions({
            breaks: true
          });
        let html = marked.parse(this.props.editorText);

        return (
            <pre id="preview" dangerouslySetInnerHTML={{__html: html}} />
        );
    }
}

function mapStateToProps(state) {
    return {
        editorText: state.editorText
    }
}

export default connect(mapStateToProps)(Preview);