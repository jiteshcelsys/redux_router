import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Home from './Home';

function Condition() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  return (
    <div>
      <NavLink to='/' >{<Home/>}</NavLink>
     <input type='text'onChange={(e)=>{setData(e.target.value);console.log(data)}}/>
      <button onClick={()=>{ navigate(`/${data}`)}}> Click Here</button>
     
    </div>
  )
}

export default Condition
