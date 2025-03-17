import api from "./api";

const categoryService = {
  getCategories: async () => {
    const response = await api.get("/categories");
    const data = response.data;
    return data;
  },

  getCategory: async (id) => {
    const response = await api.get(`/categories/${id}`);
    const data = response.data;
    return data;
  },
};

export default categoryService;
