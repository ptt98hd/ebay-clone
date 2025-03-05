import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import UserLayout from '../layouts/UserLayout';

import UserHomePage from '../pages/userPages/UserHomePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <UserLayout />,
		children: [
			{
				index: true,
				element: <UserHomePage />,
			},
		],
	},
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;
