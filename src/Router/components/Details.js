import React from 'react';
import {useSearchParams} from 'react-router-dom';
import { NavLink, } from 'react-router-dom';
import Home from './Home';

function Details() {
  const [searchParams,setSearchParams]=useSearchParams();
  const name=searchParams.get('name');
  const qual=searchParams.get('qual');
  const address=searchParams.get('address');
  return (
    <div>
      <NavLink to='/' >{<Home/>}</NavLink>

  <h1>User Details</h1>
  <h3>Name {name}</h3>
  <h3>Qulafication {qual}</h3>
  <h3>address {address}</h3>
    </div>
  )
}

export default Details
