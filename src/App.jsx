import React, { Component } from 'react';
import './App.scss';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import News from "./News";
import Account from "./Account";

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
          <h1>Dashboard</h1>
          <ul className="header">
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/news">Новости</NavLink></li>
            <li><NavLink to="/account">Личный кабинет</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/news" component={News}/>
            <Route path="/account" component={Account}/>
          </div>
      </div>
      </HashRouter>
    );
  }
}

export default App;
