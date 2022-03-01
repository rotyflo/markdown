let HANDLE_EDITOR = 'HANDLE_EDITOR';

export function handleEditor(text) {
    return {
        type: HANDLE_EDITOR,
        text
    };
}

export default HANDLE_EDITOR;