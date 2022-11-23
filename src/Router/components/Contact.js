import React from 'react';
import {Link }from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './Home';

function Contact() {
  return (
    <div>
        <NavLink to='/' >{<Home/>}</NavLink>
      <h1>Contact Page</h1>
      <h2>Dynamic Segment</h2>
          <li>  <Link to="/contact/anil" style={{textDecoration:'none'}}>Anil</Link></li>
          <li> <Link to="/contact/bruce" style={{textDecoration:'none'}}>bruce</Link></li>
          <li> <Link to="/contact/yyuce" style={{textDecoration:'none'}}>yyuce</Link></li>
      <h1><Link to='/' style={{textDecoration:'none'}} >Go To HomePage</Link></h1>
    </div>
  )
}

export default Contact
