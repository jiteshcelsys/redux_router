// import React from 'react';
// import {useSelector,useDispatch} from 'react-redux';

// function Deposit() {
//   const balance = useSelector(state=>state.reducer.balance);
//   const loan = useSelector(state=>state.reducer.loan);
//   const dispatch = useDispatch();
//   const loading=useSelector(state=>state.reducer.loading);
//   const WithdrawalHandle=()=>{
//     dispatch({type:'WITHDRAWAL',payload:10})
//   }

//   return (
//     <div>
//       {/* <h1>This is Withdrawal Page:{balance}</h1> */}
//       {loading?<h1>Saving...</h1>:<h1>This is Withdrawal  Page:{balance}</h1>}
//       <button onClick={WithdrawalHandle}> Withdrawal-10</button>
//     <h1>{loan?'Loan Applied':'Loan Needed'}</h1>
//     </div>
//   )
// }

// export default Deposit
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {withdrawalAsync} from '../action/Balanceaction'

function Deposit() {
  const balance = useSelector(state=>state.balance);
  const loan = useSelector(state=>state.loan);
  const dispatch = useDispatch();
  const loading=useSelector(state=>state.loading);

  const withdrawalhandle=()=>{
  dispatch(withdrawalAsync())
}
 
  return (
    <div>
       <h1>Apna Bank</h1>
     <div className='NavLink'>
     <NavLink to='/bank' className='NavLink_Link'>Balance</NavLink>
      <NavLink to='/bank/deposit'  className='NavLink_Link'>Deposit</NavLink>
      <NavLink to='/bank/withdrawal'  className='NavLink_Link'>Withdrawal</NavLink>
      </div>
     
      {loading?<h1>Saving...</h1>: <h1>This is Withdrawal Page:{balance}</h1>}
      <button onClick={withdrawalhandle}> Withdrawal-10</button>
    <h1>{loan?'Loan Applied':'Loan Needed'}</h1>
    </div>
  )
}

export default Deposit

