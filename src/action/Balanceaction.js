export function loading(){
return{
  type: 'LOADING'
}
}
export function Withdrawal()
{
 
  return{
    type:'WITHDRAWAL',payload:10
  }
}


export function deposit()
{
  return{
    type:'DEPOSIT',payload:10
  }
}
export function depositAsync(){

  return dispatch=>{
    dispatch(loading())
    setTimeout(() => {
      dispatch(deposit());

    }, 2000);
    
  }
}
export function withdrawalAsync()
{
  return dispatch=> {
    dispatch(loading())
    setTimeout(() => {
      dispatch(Withdrawal());
      
    }, 2000);

  }
}