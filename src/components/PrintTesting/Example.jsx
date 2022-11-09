import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

import { ComponentToPrint } from './ComponentToPrint';

function Example() {
	const componentRef = useRef();

	return (
		<div>
			<ReactToPrint
				trigger={() => <button>Print this out!</button>}
				content={() => componentRef.current}
			/>
			<ComponentToPrint id='634eb055257efab79d1968a2' ref={componentRef} />
		</div>
	);
}

export default Example;
