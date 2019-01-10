import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    
        let listItems = this.props.items.map((item, i) => {

            let {name, completed, editing} = item;
    
            if (editing === true) {
                return (
                    <React.Fragment key={i}>
                        <input type="text" value={name} onChange={(e) => this.handleEdit(e, i)} />

                        <button
                            onClick={() => this.editItem(i)}>
                            Изменить значение
                        </button>
                    </React.Fragment>
                )
            }

            return (
            <li key={i} style={{
                textDecoration: completed === true ? 'line-through' : 'none'
            }}>
                <div className="text">{name}</div>
                <button
                    onClick={() => this.deleteItem(i)}>
                    Удалить задачу
                </button>
                <button
                    onClick={() => this.toggleItem(i)}>
                    Задача выполнена
                </button>
                <button
                    onClick={() => this.editItem(i)}>
                    Редактировать задачу
                </button>
            </li>
            );
        });
        return <ul>{listItems}</ul>;
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

  export default connect(null, mapDispatchToProps)(Items);