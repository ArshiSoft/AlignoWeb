import './App.css';
import 'antd/dist/antd.min.css';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Candidate from './components/Candidate/Candidate';
import Thanks from './components/Thanks';
import Rxform from './components/RxForm/Rxform';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './Login/Login';
import RxFormData from './components/Rx-Form-Data/RxFormData';
import RxDataView from './components/Rx-Form-Data/Modules/RxDataView';
import Activate from './components/Register/Activate';
import PageNotFound from './components/Default/PageNotFound';
// import { Jwt } from 'jsonwebtoken';
import { useEffect } from 'react';
import Example from './components/PrintTesting/Example';
import OldNavbar from './components/Navbar/OldNavbar';
import ClinicForm from './components/Clinic/ClinicForm';
import ClinicData from './components/Clinic/ClinicData';

function App() {
	// if(localStorage.JwtToken){
	// 	jwt.verify(localStorage.JwtToken,'secret123',function(err,decode){
	// 		if(err){
	// 			console.log(err);
	// 		}
	// 		else{
	// 			localStorage.removeItem('token')
	// 			navigate('/Login')
	// 		}
	// 	})
	// } 
	const token = localStorage.getItem('token') || '';
	setInterval(() => {
	  // you need to check If have token then you call the API
	  if (token) {
		try {
		  // here you call refresh token API
		} catch (error) {
		  console.log("error", error)
		}
	  }
	}, 5000);
  
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path ='/Clinic-form' element ={<ClinicForm/>}/>
					<Route path ='/Clinic' element={<ClinicData/>} />
					<Route path='/Register' element={<Register />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/Rx-data' element={<RxDataView />} />
					<Route path='/Rx-form' element={<Rxform />} />
					<Route path='/thanks' element={<Thanks />} />
					<Route path='/' element={<Dashboard />} />
					<Route path='/Navbar' element={<Navbar />} />
					<Route path='/OldNavbar' element={<OldNavbar />} />
					<Route path='/Rx-view' element={<RxFormData />} />
					<Route path='/Am-I-a-Candidate' element={<Candidate />} />
					<Route path='/activate' element={<Activate />} />
					<Route path='/exampleprint' element={<Example />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
