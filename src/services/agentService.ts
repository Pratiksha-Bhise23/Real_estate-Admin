
import api from "./api";

export interface Agent {
  id: number;
  name: string;
  email: string;
  phone: string;
  total_sales: number;
  current_rank: string;
  created_at: string;
}

const agentService = {
  getAllAgents: async (): Promise<Agent[]> => {
    const response = await api.get("/agents");
    return response.data;
  },
  
  getAgentById: async (id: number): Promise<Agent> => {
    const response = await api.get(`/agents/${id}`);
    return response.data;
  },
  
  createAgent: async (agentData: Partial<Agent>): Promise<Agent> => {
    const response = await api.post("/agents", agentData);
    return response.data;
  },
  
  updateAgent: async (id: number, agentData: Partial<Agent>): Promise<Agent> => {
    const response = await api.put(`/agents/${id}`, agentData);
    return response.data;
  },
  
  deleteAgent: async (id: number): Promise<void> => {
    await api.delete(`/agents/${id}`);
  }
};

export default agentService;
