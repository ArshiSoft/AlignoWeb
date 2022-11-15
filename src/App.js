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


function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/Register' element={<Register />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/Rx-data' element={<RxDataView />} />
					<Route path='/Rx-form' element={<Rxform />} />
					<Route path='/thanks' element={<Thanks />} />
					<Route path='/' element={<Dashboard />} />
					<Route path='/Navbar' element={<Navbar />} />
					<Route path='/Rx-view' element={<RxFormData />} />
					<Route path='/Am-I-a-Candidate' element={<Candidate />} />
					<Route path='/activate' element={<Activate />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
