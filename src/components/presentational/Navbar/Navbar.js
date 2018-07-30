import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            clickedIcon: false
        }
    }
    render() {
        const { clickedIcon } = this.state;
        return ( 
            <div className='navbar-div'>
                <div className={clickedIcon ? 'clicked-scroll-view' : 'scroll-view'}>
                    <p onClick={() => this.setState({clickedIcon: !this.state.clickedIcon})} className={clickedIcon ? 'clicked-ball' : 'ball'}>A</p>
                </div>
                <div className="mobile-navbar-div" style={{display: clickedIcon ? 'grid' : 'none'}}>
                    <p ><Link to='/'>Home</Link></p>
                    <p><Link to='/about'>About</Link></p>
                    <p><Link to='/projects'>Projects</Link></p>
                    <p><Link to='/tutorials'>Tutorials</Link></p>
                    <p><Link to='/contact'>Contact</Link></p>
                </div>
                <div className='desktop-navbar-div'>
                    <p><Link to='/'>Home</Link></p>
                    <p><Link to='/about'>About</Link></p>
                    <p><Link to='/projects'>Projects</Link></p>
                    <p><Link to='/tutorials'>Tutorials</Link></p>
                    <p><Link to='/contact'>Contact</Link></p>
                </div>
            </div>
        );
    }
};

export default Navbar;