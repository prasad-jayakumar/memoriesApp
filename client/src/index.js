import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "react-thunk";
import App from './App';

// import reducers from './reducers';
// const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    // <Provider store={store}>
    //         <App />
    // </Provider>,
    <App />,
    document.getElementById('root')
);