import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from './Items';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { task: '' };
    }

    addItem = ((item) => {

        this.props.addItem(item)

    });

    updateText = (e => {
        this.setState({ task: e.target.value });
    });

    submitForm = (e => {
        e.preventDefault();
        let item = e.target[0].value;

        if (item) {
            this.addItem(item);

            //после каждого добавления задачи обнулять поле
            this.setState({ task: '' });
        }
    });

    render() {

        let items = this.props.items;

        return (
            <div className="todo-list" style={{paddingTop:20}}>
                {/* <nav className="navbar navbar-light bg-light text-center" style={{width:"340px"}}> */}
                    <form
                        onSubmit={this.submitForm}
                        className="form-inline justify-content-center" >
                        <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Введите задачу"
                            onChange={this.updateText}
                            value={this.state.task} />

                        <input className="btn btn-outline-success my-2 my-sm-0" type="submit" value="Добавить" />
                    </form>
                {/* </nav>  */}
                <Items items={items} />
            </div>
        );

    }
}

export function mapDispatchToProps(dispatch) {

    return {
        addItem(item) {

            dispatch({ type: 'ADD_ITEM', payload: { value: item } });

        }
    }
}

export function mapStateToProps(state) {
    // console.log(state.todo)
    return {
        'items': state.todo.items, // передаем в props данные которые находятся в state по умолчанию
        // 'completed': state.todo.completed 
    };

}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);