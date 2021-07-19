import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes/App';
import store from './Redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store}> <App /> </Provider>,  document.querySelector('#app'));
