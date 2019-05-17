import React from "react";
import { BrowserRouter as Router, Route, Link,NavLink, } from "react-router-dom";
import { Lifecycle } from 'react-router'
import Index from './pages/home/index.jsx'
import Login from './pages/Login/login'
import { transform } from "@babel/core";
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ratioHeigt:null,
      ratioWidth:null
    }
    this.getHeight = this.getHeight.bind(this)
  }
  async getHeight(){
    await this.setState({
      ratioWidth:window.innerWidth/1920,
      ratioHeigt:window.innerHeight/1080
    })
  }
  routerWillLeave(nextLocation) {
      console.log(nextLocation)
      return 'Your work is not saved! Are you sure you want to leave?'
  }
  componentWillMount(){
    console.log(123)
  }
  componentDidMount(){
    this.getHeight()
    console.log(2)
  }
  componentWillReceiveProps(){
    console.log(this.props)
    console.log(3)
  }
  shouldComponentUpdate(){
    console.log('更新了')
    return true
  } 
  render() {
    let style = {
      transform: `scale(${this.state.ratioWidth},${this.state.ratioHeigt})`,
      transformOrigin: "left top ",
      backgroundSize: "100% 100%",
    }
    return (
      <div className="main" style={style}>
        <Router>
            <Route exact path="/" component={Index} />
            <Route path = '/Login' name="2123" component={Login}></Route>
        </Router>
      </div>
    );
  }
}
export default App;