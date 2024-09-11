import { combineReducers } from 'redux';
import resumeReducer from './resumeReducer.js';
import EmailSenderReducer from './EmailSenderReducer.js';

const CombinedReducer = combineReducers({
    resumeRegestration: resumeReducer,
    emailSend:EmailSenderReducer,
});

export default CombinedReducer;