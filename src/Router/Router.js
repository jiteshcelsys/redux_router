import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Course from './components/Course';
import Pagen  from './components/Pagen';
import Links from './components/Links';
import User from './components/User';
import Details from './components/Details';
import Condition from './components/Condition';
function Router() {
  return (
    <div className='App'>
      <BrowserRouter>
    <Links/>
    <Routes>
    <Route path="/"element={<Home/>} />
    <Route path="/contact"element={<Contact/>} />
    <Route path="/course"element={<Course/>} />
    <Route path='/*'element={<Pagen/>}/>
    <Route path='/contact/:name'element={<User/>}/>
    <Route path='/details'element={<Details/>}/>
    <Route path='/condition' element={<Condition/>}/>
    <Route/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default Router;
