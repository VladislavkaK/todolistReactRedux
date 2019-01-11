import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import FilterLinkContainer from '../containers/FilterLinkContainer';

class ListContainer extends Component {

    render() {
        
        return (
            
          <div className="todoList__Container">
            <FilterLinkContainer />
            <TodoList />
          </div>
        );

    }
}

export function mapStateToProps(state) {

    return {
        'state': state
    };

}

export default connect(mapStateToProps, null)(ListContainer);