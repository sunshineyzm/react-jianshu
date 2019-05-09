import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/Header';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home/Home.js';
import Detail from './pages/detail/Detail.js';

class App extends Component {
  render() {
    return (
      <Provider store={store} className="App">
        <Header/>
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
