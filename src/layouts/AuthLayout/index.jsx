import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container, Stack } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function AuthLayout() {
	return (
		<Stack gap={5} className='min-vh-100 bg-body-tertiary'>
			<Header />
			<Container>
				<Outlet />
			</Container>
			<Footer />
		</Stack>
	);
}

export default AuthLayout;
