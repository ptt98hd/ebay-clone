import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import UserLayout from '../layouts/UserLayout';

import UserHomePage from '../pages/userPages/UserHomePage';
import Error404 from '../pages/errorPages/Error404';

const router = createBrowserRouter([
	{
		path: '/',
		element: <UserLayout />,
		children: [
			{
				index: true,
				element: <UserHomePage />,
			},
			{
				path: '*',
				element: <Error404 />,
			},
		],
	},
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;
