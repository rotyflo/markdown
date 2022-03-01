import React from "react";
import { connect } from "react-redux";

class Preview extends React.Component {
    render() {
        return (
            <div id="preview">{this.props.editorText}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        editorText: state.editorText
    }
}

export default connect(mapStateToProps)(Preview);