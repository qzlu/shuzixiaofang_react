import React from "react";
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
import About from "./About.js";
class Home extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
            <hr />
            <Route exact path="/" render ={() => (<div>Home</div>)} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}
export default Home