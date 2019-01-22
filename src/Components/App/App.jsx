import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter} from 'react-router-dom';

import Routes from 'Routes/Routes.jsx';
import Store from 'Redux/Store.js';
import 'antd/dist/antd.min.css';



export default class App extends Component{
  render(){
    return (
      <Provider store={Store}>
        <BrowserRouter>
            {Routes}
        </BrowserRouter>
      </Provider>
    );
  }


}