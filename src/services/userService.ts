
import api from "./api";

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

const userService = {
  getAllUsers: async (): Promise<User[]> => {
    const response = await api.get("/users");
    return response.data;
  },
  
  getUserById: async (id: number): Promise<User> => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },
  
  createUser: async (userData: { name: string; email: string; password: string }): Promise<User> => {
    const response = await api.post("/users", userData);
    return response.data;
  },
  
  updateUser: async (id: number, userData: Partial<User> & { password?: string }): Promise<User> => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  },
  
  deleteUser: async (id: number): Promise<void> => {
    await api.delete(`/users/${id}`);
  }
};

export default userService;