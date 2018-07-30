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
                <div className="mobile-navbar-div">
                    <p style={{display: clickedIcon ? 'flex' : 'none'}}><Link to='/'>Home</Link></p>
                    <p style={{display: clickedIcon ? 'flex' : 'none'}}><Link to='/about'>About</Link></p>
                    <p style={{display: clickedIcon ? 'flex' : 'none'}}><Link to='/projects'>Projects</Link></p>
                    <p style={{display: clickedIcon ? 'flex' : 'none'}}><Link to='/contact'>Contact</Link></p>
                </div>
                <div className='desktop-navbar-div'>
                    <p style={{display: clickedIcon ? 'flex' : 'none'}}><Link to='/'>Home</Link></p>
                    <p style={{display: clickedIcon ? 'flex' : 'none'}}><Link to='/about'>About</Link></p>
                    <p style={{display: clickedIcon ? 'flex' : 'none'}}><Link to='/projects'>Projects</Link></p>
                    <p style={{display: clickedIcon ? 'flex' : 'none'}}><Link to='/contact'>Contact</Link></p>
                </div>
            </div>
        );
    }
};

export default Navbar;