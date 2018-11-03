import { combineReducers } from 'redux';
import fooReducer from './fooReducer';

export default combineReducers({
    foo: fooReducer
});