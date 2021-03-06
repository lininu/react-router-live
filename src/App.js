import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const QA = () => <h2>Q & A</h2>;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/qa">Q & A</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
          <Route path="/qa" component={QA} />
        </div>
      </Router>
    );
  }
}

export default App;
