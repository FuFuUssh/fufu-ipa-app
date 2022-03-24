import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import allReducers from './redux/reducers/allReducers';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(allReducers, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
