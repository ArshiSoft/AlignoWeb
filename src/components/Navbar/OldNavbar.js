import { Link, useNavigate } from 'react-router-dom';
import { removeToken } from '../../class/clsSession';
// import Rxform from '../RxForm/Rxform';
import '../Navbar/OldNavbar.css';

/* eslint-disable */

function OldNavbar() {
	const navigate = useNavigate()
	return (
		<nav className='navbar navbar-expand-lg navbar-dark navclass '>
			<div className='container-fluid'>
				<a className='navbar-brand'>Aligno</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<a className='nav-link' aria-current='page'>
								<Link to='/am-I-a-Candidate'>Am I a Candidate</Link>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' aria-current='page'>
								<Link to='/Rx-form'>Rx-Form</Link>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link'>
								<Link to='/Register'>Register</Link>
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link'>
								<Link to='/Rx-view'>Rx-view</Link>
							</a>
						</li>

						<li className='nav-item'>
							<a className='nav-link'>
								<Link to='/Register'>Register</Link>
							</a>
						</li>
						<li className='nav-item '>
							<a className='nav-link'>
							<p className='m-0' onClick={()=>{
								removeToken();
								navigate('/Login')
							}}>Logout</p>
							</a>
						</li>
						{/* <li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								id='navbarDropdown'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Profile
							</a>
							<ul className='dropdown-menu ' aria-labelledby='navbarDropdown'>
								<li>
									<a className='dropdown-item'>Action</a>
								</li>
								<li>
									<a className='dropdown-item'>Another action</a>
								</li>
								<li>
									<hr className='dropdown-divider' />
								</li>
								<li>
									<a className='dropdown-item'>Something else here</a>
								</li>
							</ul>
						</li> */}
					</ul>
					{/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
				</div>
			</div>
		</nav>
	);
}
export default OldNavbar;
