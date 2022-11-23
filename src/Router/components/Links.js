import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

function Links() {
  
  return (
    <div>
  <ul  className='NavBar'>
    <li><NavLink className='nav-bar-link' to="/">Home</NavLink></li>
    <li> <NavLink  className='nav-bar-link' to="/contact">Contact</NavLink></li>
    <li><NavLink  className='nav-bar-link' to="/course">Course</NavLink></li>
    <li><NavLink  className='nav-bar-link' to="/Details">Details</NavLink></li>
    <li><NavLink  className='nav-bar-link' to="/condition">Condition</NavLink></li>
    <li>
    <NavLink to='/bank' className='nav-bar-link'>Bank Page</NavLink>

    </li>
  </ul>

      
    </div>
  )
}

export default Links
