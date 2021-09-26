import React from 'react';
import store from './redux/reduxStore';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import './index.css';
import {Provider} from "react-redux";


    ReactDOM.render(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>,
        document.getElementById('root')
    );


