import React from 'react';
import {Link} from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import Home from './Home';
import '../../../src/App.css'

function Course() {
  
  return (
    <div>
      <NavLink to='/' >{<Home/>}</NavLink>
      <h1>Course Page</h1>
      <Link to='/contact'>Go to Contact Page</Link>
   
    </div>
  )
}

export default Course
