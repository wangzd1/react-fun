import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Bundle from './Bundle';

//BrowserRouter HashRouter看情况使用
// import Home from 'Pages/Home/Home.jsx';
// import Page1 from 'Pages/Page1/Page1.jsx';
// import Counter from 'Pages/Counter/Counter.jsx';
// import UserInfo from 'Pages/UserInfo/UserInfo.jsx';


import Home from 'bundle-loader?lazy&name=Home!Pages/Home/Home.jsx';
import Page1 from 'bundle-loader?lazy&name=Page1!Pages/Page1/Page1.jsx';
import Counter from 'bundle-loader?lazy&name=Counter!Pages/Counter/Counter.jsx';
import UserInfo from 'bundle-loader?lazy&name=UserInfo!Pages/UserInfo/UserInfo.jsx';
import Page404 from 'bundle-loader?lazy&name=Page404!Pages/Page404/Page404.jsx';
import Test from 'bundle-loader?lazy&name=Test!Pages/Test/Test.jsx';
import NormalLoginForm from 'bundle-loader?lazy&name=Login!Pages/Login/Login.jsx';
import Navbar from 'bundle-loader?lazy&name=Login!Pages/menu/Navbar.jsx';

const Loading = function () {
  return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading />
    }
  </Bundle>
);

const Routes = (
  <Switch>
    <Route exact path="/" component={createComponent(NormalLoginForm)} />
    <Route path="/Navbar" component={createComponent(Navbar)} />
    <Route path="/Counter" component={createComponent(Counter)} />
    <Route path="/UserInfo" component={createComponent(UserInfo)} />
    <Route path="/Test" component={createComponent(Test)} />
    <Route path="/Login" component={createComponent(NormalLoginForm)} />
    <Route component={createComponent(Page404)} />
  </Switch>
);

export default Routes;