import React from 'react';
import { Container, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<Navbar expanded className='border-bottom bg-white'>
			<Container>
				<Navbar.Brand as={Link} to={'/'}>
					<Image src='/ebay.svg' alt='eBay' fluid style={{ height: '3rem' }} />
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default Header;
