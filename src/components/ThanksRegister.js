import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ThanksRegister() {
	const navigate = useNavigate();

	useEffect(() => {
		document.title = 'Aligno Thanks';
	}, []);

	return (
		<>
			<div class='jumbotron text-center'>
				<h1 class='display-3'>Welcome!</h1>
				<p class='lead'>
					<strong>Please check your email</strong> for activation link.
				</p>
				<hr />
				{/* <p>
    Having trouble? <a href="https://bootstrapcreative.com/">Contact us</a>
  </p> */}
				<p class='lead'>
					<a
						className='btn  btn-sm'
						style={{ backgroundColor: `#01aba9` }}
						href='/login'
						role='button'>
						Back to Login
					</a>
				</p>
			</div>
		</>
	);
}
export default ThanksRegister;
