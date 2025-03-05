import api from './api';

const templateService = {
	getCategories: async () => {
		const response = await api.get('/categories');
		return response.data;
	},
};

export default templateService;
