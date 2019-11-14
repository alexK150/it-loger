import {combineReducers} from "redux";
import logReducer from './log-reducer';

export default combineReducers({
    log: logReducer
})