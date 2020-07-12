import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { NavBarStyle } from "./NavBarStyle";
import ContactMe from "../ContactMe/ContactMe";
import AboutMe from "../AboutMe/AboutMe"
import CardList from '../../Containers/CardList/CardList';
import Cart from '../Cart/Cart';

const NavBar = () => {
    return (
        <NavBarStyle>
            <Router>
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="nav">
                        <li><Link to={'/'} className="nav-link text-white m-0">Home</Link></li>
                        <li><Link to={'/contact'} className="nav-link text-white m-0">Contact Us</Link></li>
                        <li><Link to={'/help'} className="nav-link text-white m-0">About Me</Link></li>
                        <li><Link to={'/cart'} className="nav-link text-white m-0">Cart</Link ></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path='/' component={CardList} />
                    <Route path='/contact' component={ContactMe} />
                    <Route path='/help' component={AboutMe} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </Router>
        </NavBarStyle>
    )
}

export default NavBar
