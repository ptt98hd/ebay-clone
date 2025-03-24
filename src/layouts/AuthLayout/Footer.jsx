import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
	return (
		<footer className='border-top mt-auto py-3 bg-white text-center'>
			<Container>
				<span className='text-center'>
					Copyright © {new Date().getFullYear()} eBay Inc. All rights reserved.
				</span>
			</Container>
		</footer>
	);
}

export default Footer;
