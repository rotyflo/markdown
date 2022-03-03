import * as types from './types';

export function handleEditor(text) {
    return {
        type: types.HANDLE_EDITOR,
        text
    };
}

export function handleButtons() {
    return {
        type: types.HANDLE_BUTTONS
    };
}