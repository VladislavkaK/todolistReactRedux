import React, { Component } from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux';
import store from '../store/store';
import ListContainer from '../containers/ListContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="TODOLIST">
          <h1>TODO list</h1>
          <ListContainer />
        </div>
        
      </Provider>
    );
  }
}

export default App;
