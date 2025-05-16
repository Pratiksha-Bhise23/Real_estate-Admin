
// import api from "./api";

// export interface Agent {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   total_sales: number;
//   current_rank: string;
//   created_at: string;
// }

// const agentService = {
//   getAllAgents: async (): Promise<Agent[]> => {
//     const response = await api.get("/agents");
//     return response.data;
//   },
  
//   getAgentById: async (id: number): Promise<Agent> => {
//     const response = await api.get(`/agents/${id}`);
//     return response.data;
//   },
  
//   createAgent: async (agentData: Partial<Agent>): Promise<Agent> => {
//     const response = await api.post("/agents", agentData);
//     return response.data;
//   },
  
//   updateAgent: async (id: number, agentData: Partial<Agent>): Promise<Agent> => {
//     const response = await api.put(`/agents/${id}`, agentData);
//     return response.data;
//   },
  
//   deleteAgent: async (id: number): Promise<void> => {
//     await api.delete(`/agents/${id}`);
//   }
// };

// export default agentService;



import api from "./api";

export interface Agent {
  agent_id: number;
  name: string;
  email: string;
  phone: string;
  total_sales: number;
  current_rank: string;
  created_at: string;
}

const agentService = {
  getAllAgents: async (): Promise<Agent[]> => {
    try {
      const response = await api.get("/agents");
      return response.data;
    } catch (error) {
      console.error("Error fetching agents:", error);
      throw error;
    }
  },
  
  getAgentById: async (id: number): Promise<Agent> => {
    try {
      const response = await api.get(`/agents/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching agent ${id}:`, error);
      throw error;
    }
  },
  
  createAgent: async (agentData: Partial<Agent>): Promise<Agent> => {
    try {
      const response = await api.post("/agents", agentData);
      return response.data.agent;
    } catch (error) {
      console.error("Error creating agent:", error);
      throw error;
    }
  },
  
  updateAgent: async (id: number, agentData: Partial<Agent>): Promise<Agent> => {
    try {
      const response = await api.put(`/agents/${id}`, agentData);
      return response.data.agent;
    } catch (error) {
      console.error(`Error updating agent ${id}:`, error);
      throw error;
    }
  },
  
  deleteAgent: async (id: number): Promise<void> => {
    try {
      await api.delete(`/agents/${id}`);
    } catch (error) {
      console.error(`Error deleting agent ${id}:`, error);
      throw error;
    }
  }
};

export default agentService;