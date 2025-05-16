
// import api from "./api";

// export interface Category {
//   id: number;
//   name: string;
//   description: string;
// }

// const categoryService = {
//   getAllCategories: async (): Promise<Category[]> => {
//     const response = await api.get("/categories");
//     return response.data;
//   },
  
//   getCategoryById: async (id: number): Promise<Category> => {
//     const response = await api.get(`/categories/${id}`);
//     return response.data;
//   },
  
//   createCategory: async (categoryData: Partial<Category>): Promise<Category> => {
//     const response = await api.post("/categories", categoryData);
//     return response.data;
//   },
  
//   updateCategory: async (id: number, categoryData: Partial<Category>): Promise<Category> => {
//     const response = await api.put(`/categories/${id}`, categoryData);
//     return response.data;
//   },
  
//   deleteCategory: async (id: number): Promise<void> => {
//     await api.delete(`/categories/${id}`);
//   }
// };

// export default categoryService;


import api from "./api";

export interface Category {
  id: number;
  name: string;
  description?: string; // Optional, as TEXT allows NULL
  created_at?: string; // Matches PostgreSQL
}

const categoryService = {
  getAllCategories: async (): Promise<Category[]> => {
    const response = await api.get("/categories");
    return response.data;
  },
  getCategoryById: async (id: number): Promise<Category> => {
    const response = await api.get(`/categories/${id}`);
    return response.data;
  },
  createCategory: async (categoryData: Partial<Category>): Promise<Category> => {
    const response = await api.post("/categories", categoryData);
    return response.data;
  },
  updateCategory: async (id: number, categoryData: Partial<Category>): Promise<Category> => {
    const response = await api.put(`/categories/${id}`, categoryData);
    return response.data;
  },
  deleteCategory: async (id: number): Promise<void> => {
    await api.delete(`/categories/${id}`);
  },
};

export default categoryService;