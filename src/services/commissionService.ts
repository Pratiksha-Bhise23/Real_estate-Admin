
// // import api from "./api";

// // export interface CommissionRange {
// //   id: number;
// //   min_amount: number;
// //   max_amount: number | null;
// //   commission_percentage: number;
// // }

// // export interface Sale {
// //   id: number;
// //   agent_id: number;
// //   property_id: number;
// //   sale_amount: number;
// //   commission: number;
// //   sale_date: string;
// // }

// // const commissionService = {
// //   // Commission ranges
// //   getAllCommissionRanges: async (): Promise<CommissionRange[]> => {
// //     const response = await api.get("/commission-ranges");
// //     return response.data.ranges;
// //   },
  
// //   createCommissionRange: async (data: Partial<CommissionRange>): Promise<CommissionRange> => {
// //     const response = await api.post("/commission-ranges", data);
// //     return response.data.range;
// //   },
  
// //   updateCommissionRange: async (id: number, percentage: number): Promise<CommissionRange> => {
// //     const response = await api.put(`/commission-ranges/${id}`, { commission_percentage: percentage });
// //     return response.data.updatedRange;
// //   },
  
// //   deleteCommissionRange: async (id: number): Promise<void> => {
// //     await api.delete(`/commission-ranges/${id}`);
// //   },
  
// //   // Sales with commission
// //   getAllSales: async (): Promise<Sale[]> => {
// //     const response = await api.get("/sales");
// //     return response.data.sales;
// //   },
  
// //   getSaleById: async (id: number): Promise<Sale> => {
// //     const response = await api.get(`/sales/${id}`);
// //     return response.data.sale;
// //   },
  
// //   createOrUpdateSale: async (data: { agent_id: number; property_id: number; sale_amount: number }): Promise<Sale> => {
// //     const response = await api.post("/sales", data);
// //     return response.data.sale;
// //   },
  
// //   updateSaleCommission: async (id: number, commission_percentage: number): Promise<Sale> => {
// //     const response = await api.put(`/sales/${id}`, { commission_percentage });
// //     return response.data.updatedSale;
// //   },
  
// //   deleteSale: async (id: number): Promise<void> => {
// //     await api.delete(`/sales/${id}`);
// //   }
// // };

// // export default commissionService;


// import api from "./api";

// export interface CommissionRange {
//   id: number;
//   min_amount: number;
//   max_amount: number | null;
//   commission_percentage: number;
//   created_at?: string;
//   updated_at?: string;
// }

// export interface Sale {
//   id: number;
//   agent_id: number;
//   agent_name: string; // Joined from agents table
//   property_id: number;
//   property_name: string; // Joined from properties table
//   sale_amount: number;
//   commission_percentage: number;
//   commission_amount: number;
//   status: 'Pending' | 'Processing' | 'Paid';
//   sale_date: string;
//   created_at?: string;
//   updated_at?: string;
// }

// const commissionService = {
//   // Commission ranges
//   getAllCommissionRanges: async (): Promise<CommissionRange[]> => {
//     const response = await api.get("/commission-ranges");
//     return response.data.ranges;
//   },

//   createCommissionRange: async (data: Partial<CommissionRange>): Promise<CommissionRange> => {
//     const response = await api.post("/commission-ranges", data);
//     return response.data.range;
//   },

//   updateCommissionRange: async (id: number, commission_percentage: number): Promise<CommissionRange> => {
//     const response = await api.put(`/commission-ranges/${id}`, { commission_percentage });
//     return response.data.updatedRange;
//   },

//   deleteCommissionRange: async (id: number): Promise<void> => {
//     await api.delete(`/commission-ranges/${id}`);
//   },

//   // Sales
//   getAllSales: async (): Promise<Sale[]> => {
//     const response = await api.get("/sales");
//     return response.data.sales;
//   },

//   getSaleById: async (id: number): Promise<Sale> => {
//     const response = await api.get(`/sales/${id}`);
//     return response.data.sale;
//   },

//   createSale: async (data: {
//     agent_id: number;
//     property_id: number;
//     sale_amount: number;
//     status: string;
//     sale_date: string;
//   }): Promise<Sale> => {
//     const response = await api.post("/sales", data);
//     return response.data.sale;
//   },

//   updateSale: async (id: number, data: Partial<Sale>): Promise<Sale> => {
//     const response = await api.put(`/sales/${id}`, data);
//     return response.data.updatedSale;
//   },

//   deleteSale: async (id: number): Promise<void> => {
//     await api.delete(`/sales/${id}`);
//   },
// };

// export default commissionService;


import api from "./api";

export interface CommissionRange {
  id: number;
  min_amount: number;
  max_amount: number | null;
  commission_percentage: number;
  created_at?: string;
  updated_at?: string;
}

export interface Sale {
  id: number;
  agent_id: number;
  agent_name: string;
  property_id: number;
  property_name: string;
  sale_amount: number;
  commission_percentage: number;
  commission_amount: number;
  status: "Pending" | "Processing" | "Paid";
  sale_date: string;
  created_at?: string;
  updated_at?: string;
}

const commissionService = {
  // Commission ranges
  getAllCommissionRanges: async (): Promise<CommissionRange[]> => {
    const response = await api.get("/commission-ranges");
    return response.data.ranges;
  },

  createCommissionRange: async (data: Partial<CommissionRange>): Promise<CommissionRange> => {
    const response = await api.post("/commission-ranges", data);
    return response.data.range;
  },

  updateCommissionRange: async (
    id: number,
    data: Partial<CommissionRange>
  ): Promise<CommissionRange> => {
    const response = await api.put(`/commission-ranges/${id}`, data);
    return response.data.range;
  },

  deleteCommissionRange: async (id: number): Promise<void> => {
    await api.delete(`/commission-ranges/${id}`);
  },

  // Sales
  getAllSales: async (): Promise<Sale[]> => {
    const response = await api.get("/sales");
    return response.data.sales;
  },

  getSaleById: async (id: number): Promise<Sale> => {
    const response = await api.get(`/sales/${id}`);
    return response.data.sale;
  },

  createSale: async (data: {
    agent_id: number;
    property_id: number;
    sale_amount: number;
    status: string;
    sale_date: string;
  }): Promise<Sale> => {
    const response = await api.post("/sales", data);
    return response.data.sale;
  },

  updateSale: async (id: number, data: Partial<Sale>): Promise<Sale> => {
    const response = await api.put(`/sales/${id}`, data);
    return response.data.sale;
  },

  deleteSale: async (id: number): Promise<void> => {
    await api.delete(`/sales/${id}`);
  },
};

export default commissionService;
