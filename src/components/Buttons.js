import React from "react";
import { connect } from "react-redux";
import { handleButtons } from "../actions";

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={() => this.props.handleButtons()}
                    className='btn'
                >
                    Change View
                </button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleButtons: () => {
            dispatch(handleButtons());
        }
    }
}

export default connect(null, mapDispatchToProps)(Buttons);