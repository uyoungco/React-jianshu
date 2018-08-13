import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './common/header'
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header></Header>
          <BrowserRouter>
            <div>
              <Route path="/" exact render={() => <div>Hoem</div> }></Route>
              <Route path="/detail" render={() => <div>detail</div> }></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
