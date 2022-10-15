import "./App.css";
// import Login from './components/Login';
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
// import InventoryEditForm from './test';
import Thanks from "./components/Thanks";
import Rxform from "./components/RxForm/Rxform";
import Rxform2 from "./components/RxForm2/Rxform2";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

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
          <Route path="/Rx-form" element={<Rxform />} />
          <Route path="/Rx-form2" element={<Rxform2 />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Register" element={<Register />} />

          {/* <Route path='/test' element={<InventoryEditForm/>} /> */}
          {/* <Route path='/Login' element={<Login />} />
          
          <Route path='/Dashboard' element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
