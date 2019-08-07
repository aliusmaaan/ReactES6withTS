import React from "react";
import { BrowserRouter as BrowserRouter, Switch, Route, Link } from "react-router-dom";
import FormContainer from "./js/components/home.jsx";
import ERR404 from "./ts/components/err404.tsx";
import ERR505 from "./ts/components/err505.tsx";
import './app.scss';
import logo from './i/logo.svg';
import ES6TS from './i/es6ts.png';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <div className='col-md-2 fl'>
          <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/404/">404</Link>
            </li>
            <li>
              <Link to="/505/">505</Link>
            </li>
          </ul>
        </nav>
        <img src={ES6TS}  alt="ES6TSlogo" className='h150' />
      </div>
      <Switch>
        <Route path="/" exact component={FormContainer} />
        {/* <Route path="/home/" component={Home} /> */}
        {/* <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} /> */}
        <Route path='/404/' component={ERR404} />
        <Route path='/505/' component={ERR505} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
