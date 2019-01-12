import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVisibleTodos } from '../reducers/TodoReducer';
import style from '../styles/App.css';

/* Компонент для списка задач */

class Items extends React.Component {

    deleteItem = (idx => {

        this.props.delItem(idx)

    });

    editItem = (idx) => {

        this.props.edItem(idx)

    };

    toggleItem = (idx, item) => {

        this.props.toggItem(idx, item);

    };

    handleEdit = (event, idx) => {

        let newName = event.target.value;

        this.props.updateItem(idx, newName)

    };
    
    render() {

        let { todos, filter } = this.props;

        let todosItems = todos.map((item, i) => {
            let {name, completed} = item;

            return (
                <ul class="list-group" style={{paddingTop:20}}>
                    <li className="list-group-item" key={i} style={{
                        textDecoration: completed === true ? 'line-through' : 'none',
                    }}>
                        <div className="text">{name}</div>
                    </li>
                </ul>
            );
        });
        
        let listItems = this.props.items.map((item, i) => {

            let {name, completed, editing} = item;
    
            if (editing === true) {
                return (
                    <React.Fragment key={i} >
                        <input type="text" className="form-control mr-sm-2" value={name}  onChange={(e) => this.handleEdit(e, i)} />

                        <button
                            className="btn btn-primary"
                            onClick={() => this.editItem(i)}
                            >
                            Обновить значение
                        </button>
                    </React.Fragment>
                )
            }

            return (
                <React.Fragment key={i} className="menu">

                <ul className="list-group" style={{paddingTop:20}}>
                    <li className="list-group-item new-list-2" >
               
                    <div className="frame" style={{width:"50px"}}> 
                        <input type="checkbox" checked={completed === true ? true : false}
                            onChange={() => this.toggleItem(i)} />
                    </div>
                    <div className="text frame" style={{
                        textDecoration: completed === true ? 'line-through' : 'none',  
                        }}>{name}
                    </div>
                    </li>
                    
                    <button
                        className="btn btn-danger"
                        onClick={() => this.deleteItem(i)}>
                        Удалить задачу
                    </button>
                    <button
                        className="btn btn-success"
                        onClick={() => this.toggleItem(i)}>
                        Задача выполнена
                    </button>
                    <button
                        className="btn btn-dark"
                        onClick={() => this.editItem(i)}>
                        Редактировать задачу
                    </button>
                </ul>

                    
                    
                </React.Fragment>
            );
        });
        if (filter === "SHOW_ALL") {
            return <ul>{listItems}</ul>;
        } else if (filter === "SHOW_ACTIVE") {
            return todosItems;
        } else if (filter === "SHOW_COMPLETED") {
            return todosItems;
        }
    }
    
}

export function mapDispatchToProps(dispatch) {

    return {
      delItem(id) {

          dispatch({type: 'DELETE_ITEM', payload: { id } });
        
      },
      toggItem(id, item) {

          dispatch({type: 'TOGGLE_ITEM', payload: { value: item, id } });

      },
      edItem(id) {

          dispatch({type: 'EDIT_ITEM', payload: { id } });

      },
      updateItem(id, name) {

        dispatch({type: 'UPDATE_ITEM', payload: { id, name } });

      }
    }
  }

  export function mapStateToProps(state) {
    return {
        "todos": getVisibleTodos(state.todo.items, state.visiblefilter),
        "filter": state.visiblefilter
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Items);