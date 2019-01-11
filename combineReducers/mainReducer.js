import { combineReducers } from 'redux';
import TodoReducer from '../reducers/TodoReducer';
import visibilityFilter from '../reducers/visibilityFilter';

const appReducer = combineReducers({ todo: TodoReducer, visiblefilter: visibilityFilter });

const rootReducer = (state, action) => {
    
    return appReducer(state, action);

}

export default rootReducer;