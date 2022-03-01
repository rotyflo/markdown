import { createStore } from 'redux';
import markdownReducer from '../reducers';

export default createStore(markdownReducer);