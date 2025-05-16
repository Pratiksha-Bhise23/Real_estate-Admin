
// import api from "./api";

// export interface Property {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   status: 'available' | 'sold' | 'pending';
//   agent_id: number;
//   listed_at: string;
//   sold_at: string | null;
// }

// const propertyService = {
//   getAllProperties: async (): Promise<Property[]> => {
//     const response = await api.get("/properties");
//     return response.data;
//   },
  
//   getPropertyById: async (id: number): Promise<Property> => {
//     const response = await api.get(`/properties/${id}`);
//     return response.data;
//   },
  
//   createProperty: async (propertyData: Partial<Property>): Promise<Property> => {
//     const response = await api.post("/properties", propertyData);
//     return response.data;
//   },
  
//   updateProperty: async (id: number, propertyData: Partial<Property>): Promise<Property> => {
//     const response = await api.put(`/properties/${id}`, propertyData);
//     return response.data;
//   },
  
//   deleteProperty: async (id: number): Promise<void> => {
//     await api.delete(`/properties/${id}`);
//   }
// };

// export default propertyService;


import api from "./api";

export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  status: "available" | "sold" | "pending";
  agent_id: number;
  listed_at: string;
  sold_at: string | null;
}

const propertyService = {
  getAllProperties: async (): Promise<Property[]> => {
    const response = await api.get("/properties");
    return response.data.properties; // Updated to match backend response
  },

  getPropertyById: async (id: number): Promise<Property> => {
    const response = await api.get(`/properties/${id}`);
    return response.data.property;
  },

  createProperty: async (propertyData: Partial<Property>): Promise<Property> => {
    const response = await api.post("/properties", propertyData);
    return response.data.property;
  },

  updateProperty: async (id: number, propertyData: Partial<Property>): Promise<Property> => {
    const response = await api.put(`/properties/${id}`, propertyData);
    return response.data.property;
  },

  deleteProperty: async (id: number): Promise<void> => {
    await api.delete(`/properties/${id}`);
  },
};

export default propertyService;