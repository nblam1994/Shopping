import { combineReducers } from 'redux';
import Counter from './changeNumber';

const rootReducer = combineReducers({
    Counter
    // co nhieu reducer truyen vao day
});

export default rootReducer;