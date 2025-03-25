import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserLayout from '../layouts/UserLayout';
import UserHomePage from '../pages/userPages/UserHomePage';
import Error404 from '../pages/errorPages/Error404';
import UserLoginPage from '../pages/userPages/UserLoginPage';
import AuthLayout from '../layouts/AuthLayout';
import UserRegisterPage from '../pages/userPages/UserRegisterPage';
import UserShopingPage from '../pages/userPages/UserShopingPage';

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
				path: '/shoping',
				element: <UserShopingPage />,
			},
			{
				path: '*',
				element: <Error404 />,
			},
		],
	},
	{
		path: '/authentication',
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <UserLoginPage />,
			},
		],
	},
	{
		path: '/register',
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <UserRegisterPage />,
			},
		],
	},
]);

function Router() {
	return <RouterProvider router={router} />;
}

export default Router;
