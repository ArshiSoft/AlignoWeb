import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

import Rxform from './components/Rxform';
import { Routes, Route,  BrowserRouter } from 'react-router-dom';

function App() {

  return (

    <>
<BrowserRouter>
      

        {/* <nav>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
          <Link to="/Dashboard">Dashboard</Link>
          <Link to="/Rxform">RX Form</Link>
        </nav> */}
        
        <Routes>

          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Rx-form' element={<Rxform/>} />

        </Routes>
      
      </BrowserRouter>
    

    </>

  );
}

export default App;
