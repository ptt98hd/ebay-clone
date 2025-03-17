import { fetcher } from "./";

const categoryService = {
  getCategories: async () => {
    const response = await fetcher.get("/categories");
    const data = response.data;
    return data;
  },

  getCategory: async (id) => {
    const response = await fetcher.get(`/categories/${id}`);
    const data = response.data;
    return data;
  },
};

export default categoryService;
