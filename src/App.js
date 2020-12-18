import React  from 'react';
import { HashRouter as Router,  Route } from 'react-router-dom';
import Home from './pages/home';
import './App.css';


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Product = () => (
  <div>
    <h2>Product</h2>
  </div>
)

const App = () =>  {
    return (
      <Router>
        <div className="App">
          {/* <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Product">Product</Link>
          <hr/> */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/product" component={Product}></Route>
        </div>
      </Router>
    );
}

export default App;