import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUp from './components/Signup';
import SignIn from './components/SignIn';
import './App.css';

class App extends Component {
render() {
    return (
        <Router>
            <div className="App">
                <div className="App__Aside"></div>
                <div className="App__Form">
                    <div className="PageSwitcher">
                        <NavLink exact to="/signIn" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign up</NavLink>
                    </div>
                    <div className="FormTitle">
                        <NavLink to="/signIn" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                    </div>
                    <Route exact path="/" component={SignUp}/>
                    <Route path="/signIn" component={SignIn}/>
                </div>
            </div>
        </Router>
    );
}
}
export default App;
