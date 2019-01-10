import { combineReducers } from 'redux';
import TodoReducer from '../reducers/TodoReducer';

const appReducer = combineReducers({ todo: TodoReducer });

const rootReducer = (state, action) => {
    
    return appReducer(state, action);

}

export default rootReducer;