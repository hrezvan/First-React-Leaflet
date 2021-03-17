import React, { Component } from 'react';
import './navBar.css';

class NavBar extends Component {
    render(){
        return ( 
            <nav id='navbar' className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand">Web Mapping</h1>
            </nav>    
        );
    }
}
 
export default NavBar;