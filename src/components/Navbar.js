import React from 'react';
import FontAwesome from "react-fontawesome";
import '../css/Navbar.css';

import logo from "../images/logo.png";

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({
      displayMenu: true
    }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({
      displayMenu: false
    }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
      <div className="Navbar">
        <header>
          <div className="menu-logo">
            <FontAwesome
              className='menu-icon'
              name='bars'
              size='2x'
              onClick = {
                this.showDropdownMenu
              }
            />
          
            
              <img src={logo} alt="react-logo" className="logo" />
       
          </div>

          <div className="search-bar hide-search-bar">
            <input type="search" placeholder="search" />
            <FontAwesome
              className='search-icon'
              name='search'
              size='1x'
            />
          </div>

          <nav className="hide-nav">
            <ul className="nav-links" id="nav">
              <li>
                <div className="cart-area">
                  <FontAwesome
                  className='cart'
                  name='shopping-cart'
                  size='2x'
                  /> 
                  <div className="item-counter">13</div>
                </div>
              </li>             
              <li>
                <a href="/login" className="nav-link">Sign in</a>
              </li>
              <li >
                <a href="signup" className="nav-link">Sign up</a>
              </li>
            </ul>
          </nav>
         
        </header>
        { this.state.displayMenu ? (
          <ul className="drop-down">
            <li><a href="focal point" className="nav-link">Focal points</a></li>
            <li><a href="/register" className="nav-link">Register</a></li>
            <li><a href="/login" className="nav-link">Sign in</a></li>
          </ul>
            ):
          (
            null
          )
        }
        <div className="search-bar hide-desktop">
            <input type="search" placeholder="search" />
            <FontAwesome
              className='search-icon'
              name='search'
              size='1x'
            />
          </div>

          <nav className="hide-desktop">
            <ul className="nav-links" id="nav">
              <li>
                <div className="cart-area">
                  <FontAwesome
                  className='cart'
                  name='shopping-cart'
                  size='2x'
                  /> 
                  <div className="item-counter">13</div>
                </div>
              </li>             
              <li>
                <a href="/login" className="nav-link">Sign in</a>
              </li>
              <li >
                <a href="signup" className="nav-link">Sign up</a>
              </li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default Navbar;
