 import { Route, Routes } from 'react-router-dom';
import Balance from './AddItem/Balance';
import Deposit from './AddItem/Deposit';
import Withdrawal from './AddItem/Withdrawal';
import './App.css';
import Condition from './Router/components/Condition';
import Contact from './Router/components/Contact';
import Course from './Router/components/Course';
import Details from './Router/components/Details';
import Home from './Router/components/Home';
import Pagen from './Router/components/Pagen';
import User from './Router/components/User';
 
function App() {
  return (
    <div className="App">
      <Routes>
    <Route path='/bank'element={<Balance/>}/>
    <Route path='/bank/deposit' element={<Deposit/>}/>
    <Route path='/bank/withdrawal'element={<Withdrawal/>}/>
    <Route path="/"element={<Home/>} />
    <Route path="/contact"element={<Contact/>} />
    <Route path="/course"element={<Course/>} />
    <Route path='/*'element={<Pagen/>}/>
    <Route path='/contact/:name'element={<User/>}/>
    <Route path='/details'element={<Details/>}/>
    <Route path='/condition' element={<Condition/>}/>
      </Routes>
    </div>
  );
}

export default App;
