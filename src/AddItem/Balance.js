import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';

function Balance() {
  const balance=useSelector(state=>state.balance);
  const loan=useSelector(state=>state.loan);
  const dispatch=useDispatch();
  const loading=useSelector(state=>state.loading);
  function applyLoanHandler()
  {
    dispatch({type:'APPLY-2'})
  }
  return (
    <div>
       
       <h1>Apna Bank</h1>
     <div className='NavLink'>
     <NavLink to='/bank' className='NavLink_Link'>Balance</NavLink>
      <NavLink to='/bank/deposit'  className='NavLink_Link'>Deposit</NavLink>
      <NavLink to='/bank/withdrawal'  className='NavLink_Link'>Withdrawal</NavLink>
      </div>
    
 {loading?<h1>Saving...</h1>:<h1>This is balance  Page:{balance}</h1>}
      <h1>{loan?'Loan Applied':'Loan Needed'}</h1>
      <button  className='Button_style' disabled={loan?true:false} onClick={applyLoanHandler}>{loan?'Loan Applied':'Loan Needed'}</button>
    </div>
  )
}

export default Balance
