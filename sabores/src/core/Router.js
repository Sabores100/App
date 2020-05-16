import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Login from '../pages/login/Login';


export default class RouterComponent extends React.Component {
    render() {
        return (
            <Router>
                <Navbar  bg="light" variant="light">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        );
    }
}