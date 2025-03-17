import { fetcher } from "./";

const bannerService = {
  getBanners: async () => {
    const response = await fetcher.get("/banners");
    return response.data;
  },
};

export default bannerService;
