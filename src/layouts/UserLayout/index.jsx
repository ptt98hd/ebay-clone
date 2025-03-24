import React from 'react';
import UserHeader from './UserHeader';
import UserFooter from './UserFooter';
import { Outlet } from 'react-router-dom';
import UserFab from './UserFab';
import { UserProvider } from '../../contexts/UserContext';
import { Stack, Container } from 'react-bootstrap';

function UserLayout() {
	return (
		<UserProvider>
			<Stack direction='vertical' gap={5} className='min-vh-100'>
				<UserHeader />
				<Container>
					<Outlet />
				</Container>
				<UserFooter />
				<UserFab />
			</Stack>
		</UserProvider>
	);
}

export default UserLayout;
