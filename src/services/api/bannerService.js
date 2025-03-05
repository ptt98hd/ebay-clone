import api from './api';

const bannerService = {
	getBanners: async () => {
		const response = await api.get('/banners');
		return response.data;
	},
};

export default bannerService;
