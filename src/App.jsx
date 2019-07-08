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
import Catalog from "./Catalog"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="menu">
          <ul className="header">
            <li><NavLink activeClassName="link" to="/" exact>Главная</NavLink></li>
            <li><NavLink activeClassName="link" to="/news">Новости</NavLink></li>
            <li><NavLink activeClassName="link" to="/account">Личный кабинет</NavLink></li>
            <li><NavLink activeClassName="link" to="/catalog">Каталог</NavLink></li>
          </ul>
        </div>
        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={News}/>
          <Route path="/account" component={Account}/>
          <Route path="/catalog" component={Catalog}/>
        </div>       
      </HashRouter>
    );
  }
}

export default App;
