import HANDLE_EDITOR from '../actions';

const defaultState = {
    editorText: 'test',
    previewText: ''
}

export default function markdownReducer(state = defaultState, action) {
    switch (action.type) {
        case HANDLE_EDITOR:
            return Object.assign({}, state, {
                editorText: action.text,
                previewText: state.editorText
            });
        
        default:
            return state;
    }
}