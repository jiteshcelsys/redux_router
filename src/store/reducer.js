const intialState={
  balance:0,
  loading:false,
  loan:false,
 
}

function reducer(state=intialState,action) {
  switch(action.type)
  {
    case 'DEPOSIT': 
    return {...state, balance:state.balance + action.payload, loading : state.loading=false};
    case 'WITHDRAWAL' :
      if(state.balance>0){ 
    return {
      ...state,
       balance:state.balance - action.payload,
       loading : state.loading=false
      }
    }
    else{
      return{
        ...state,
        balance:state.balance ,
        loading : state.loading=false,
      

      }
     
    }
    case'LOADING':return{
      ...state,loading:true
    };
    case 'APPLY-2': return {...state, loan:true };

    default: return state;
  } 
}

export default reducer
