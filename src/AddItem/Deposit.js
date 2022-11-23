import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import reducer from '../store/reducer';
// import * as balanceAction from '../action/Balanceaction';
import { depositAsync } from '../action/Balanceaction';
import { NavLink } from 'react-router-dom';

function Deposit() {
  const balance = useSelector(state=>state.balance);
  const dispatch = useDispatch();
  const DepositHandle=()=>{

   
    dispatch(depositAsync());
  }
  const loading=useSelector(state=>state.loading);


  return (
    <div>
       <h1>Apna Bank</h1>
     <div className='NavLink'>
     <NavLink to='/bank' className='NavLink_Link'>Balance</NavLink>
      <NavLink to='/bank/deposit'  className='NavLink_Link'>Deposit</NavLink>
      <NavLink to='/bank/withdrawal'  className='NavLink_Link'>Withdrawal</NavLink>
      </div>
     

      {loading?<h1>Saving...</h1>: <h1>This is Deposit Page:{balance}</h1>}
   
      <button onClick={DepositHandle}> Deposit+10</button>
    </div>
  )
}

export default Deposit
