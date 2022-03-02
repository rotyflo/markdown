import React from "react";
import { connect } from "react-redux";
import { marked } from "marked";

class Preview extends React.Component {
    render() {
        let html = marked.parse(this.props.editorText);

        return (
            <pre id="preview">{html}</pre>
        );
    }
}

function mapStateToProps(state) {
    return {
        editorText: state.editorText
    }
}

export default connect(mapStateToProps)(Preview);