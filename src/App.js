
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {Component} from "react";


class App extends Component {
  render() {
    return (
        <Router>

            <div className="App">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </Router>
    );
  }
}

export default App;
