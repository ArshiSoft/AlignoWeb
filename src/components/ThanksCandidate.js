import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ThanksCandidate() {
	const navigate = useNavigate();

	useEffect(() => {
		document.title = 'Thank You';
	}, []);

	return (
		<>
			<div class='jumbotron text-center'>
				<h1 class='display-3'>Thank you for submitting your response!</h1>
				<p class='lead'>
					<strong>Our team will get back to you shortly!</strong>
				</p>
				<hr />
				{/* <p>
    Having trouble? <a href="https://bootstrapcreative.com/">Contact us</a>
  </p> */}
				<p class='lead'>
					<a
						className='btn  btn-sm'
						style={{
							backgroundColor: `#01aba9`,
							color: 'white',
						}}
						href='https://aligno.co'
						role='button'>
						Back to Home
					</a>
				</p>
			</div>
		</>
	);
}
export default ThanksCandidate;
