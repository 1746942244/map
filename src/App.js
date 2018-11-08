import React, { Component } from 'react';
//import logo from './logo.svg';
import './assets/css/App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Index from './views/Index'
import Read from './views/Read'
import Weather from './views/Weather'
import Set from './views/Set'
class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
          <ul className="nav">
            <li><Link to="/"><p className="iconfont">&#xed94;</p>首页</Link></li>
            <li><Link to="/read"><p className="iconfont">&#xe62e;</p>阅读</Link></li>
            <li><Link to="/weather"><p className="iconfont">&#xe635;</p>天气</Link></li>
            <li><Link to="/set"><p className="iconfont">&#xe638;</p>设置</Link></li>
          </ul>
          <Route exact path="/" component={Index} />
          <Route path="/read" component={Read} />
          <Route path="/weather" component={Weather} />
          <Route path="/set" component={Set} />
        </div>
      </Router>
    );
  }
}

export default App;
