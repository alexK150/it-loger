import {combineReducers} from "redux";
import logReducer from './log-reducer';
import techReducer from './tech-reducer';

export default combineReducers({
    log: logReducer,
    tech: techReducer
})