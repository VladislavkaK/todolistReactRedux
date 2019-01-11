import { VisibilityFilters } from '../actions/VisibilityFilters';

const initState = {
    items: [
        {
            name: 'Eat',
            completed: false,
            editing: false
        },
        {
            name: 'Sleep',
            completed: false,
            editing: false
        },
        {
            name: 'Feed cat',
            completed: false,
            editing: false
        },
        {
            name: 'Play in games on computer',
            completed: false,
            editing: false
        }
    ],
    
}

const TodoReducer = (state = initState, action) => {

    switch (action.type) {   
        case "ADD_ITEM": 
            return ADD_ITEM(state, action);
        case "DELETE_ITEM": 
           return DELETE_ITEM(state, action);
        case "TOGGLE_ITEM":
            return TOGGLE_ITEM(state, action);
        case "EDIT_ITEM":
            return EDIT_ITEM(state, action);  
        case "UPDATE_ITEM":
            return UPDATE_ITEM(state, action); 
        default:
            return state;
    }

};

/* Добавляем новую задачу */

function ADD_ITEM(state, action) {

    let name = action.payload.value;
 
    return { ...state, items: [...state.items, { name, completed: false }] };  

}

/* Удаляем задачу */

function DELETE_ITEM(state, action) {

    return { ...state, items: [...state.items.filter((item, i) => i !== action.payload.id)] };  

}

/* Выполнена задача(зачеркнуть) */

function TOGGLE_ITEM(state, action) {

    let items = state.items.map((item, i) => {
        if(i !== action.payload.id) {
            return item;
        }

        return {...item, completed: !item.completed};
    });

    return { ...state, items};
}

/* Редактировать задачу */

function EDIT_ITEM(state, action) {

    let items = state.items.map((item, i) => {
        if(i !== action.payload.id) {
            return item;
        }

        return {...item, editing: !item.editing};
    });

    return { ...state, items};  
}

/* Далее сохраним измененное значение */

function UPDATE_ITEM(state, action) {
    
    let items = state.items.map((item, i) => {
        
        if(i === action.payload.id) {
            return {...item, name: action.payload.name};
        }

        return item;
    });
    
    return { ...state, items}; 
 
}

/* Фильтр */

export const getVisibleTodos = (todo, filter) => {
 
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todo;
      case VisibilityFilters.SHOW_COMPLETED:
        return todo.filter(t => {
            return t.completed;
        });
      case VisibilityFilters.SHOW_ACTIVE:
        return todo.filter(t => {
            return !t.completed;
        });
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  }

export default TodoReducer;