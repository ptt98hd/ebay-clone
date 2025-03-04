import React from 'react';
import UserHeader from './UserHeader';
import UserFooter from './UserFooter';
import { Outlet } from 'react-router-dom';
import UserFab from './UserFab';
import { UserProvider } from '../../contexts/UserContext';

function UserLayout() {
	return (
		<UserProvider>
			<div className='vstack min-vh-100 gap-5'>
				<UserHeader />
				<div className='container'>
					<Outlet />
				</div>
				<UserFooter />
				<UserFab />
			</div>
		</UserProvider>
	);
}

export default UserLayout;
