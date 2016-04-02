// import './main.css';
//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App.jsx';
//
// ReactDOM.render(<App />, document.getElementById('app'));



import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';

const proxyStore = new Store({
  portName: 'example'
});

render(
    <Provider store={proxyStore}><App /></Provider>
  , document.getElementById('app'));
