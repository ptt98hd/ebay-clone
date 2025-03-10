import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { categoryService } from '../services';

const UserContext = createContext();

export function UserProvider({ children }) {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			const data = await categoryService.getCategories();
			setCategories(data);
		};
		fetchCategories();
	}, []);

	return (
		<UserContext.Provider value={{ categories }}>
			{children}
		</UserContext.Provider>
	);
}

UserProvider.propTypes = {
	children: PropTypes.node,
};

export default UserContext;
