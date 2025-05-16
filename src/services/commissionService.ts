
import api from "./api";

export interface CommissionRange {
  id: number;
  min_amount: number;
  max_amount: number | null;
  commission_percentage: number;
}

export interface Sale {
  id: number;
  agent_id: number;
  property_id: number;
  sale_amount: number;
  commission: number;
  sale_date: string;
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
  
  updateCommissionRange: async (id: number, percentage: number): Promise<CommissionRange> => {
    const response = await api.put(`/commission-ranges/${id}`, { commission_percentage: percentage });
    return response.data.updatedRange;
  },
  
  deleteCommissionRange: async (id: number): Promise<void> => {
    await api.delete(`/commission-ranges/${id}`);
  },
  
  // Sales with commission
  getAllSales: async (): Promise<Sale[]> => {
    const response = await api.get("/sales");
    return response.data.sales;
  },
  
  getSaleById: async (id: number): Promise<Sale> => {
    const response = await api.get(`/sales/${id}`);
    return response.data.sale;
  },
  
  createOrUpdateSale: async (data: { agent_id: number; property_id: number; sale_amount: number }): Promise<Sale> => {
    const response = await api.post("/sales", data);
    return response.data.sale;
  },
  
  updateSaleCommission: async (id: number, commission_percentage: number): Promise<Sale> => {
    const response = await api.put(`/sales/${id}`, { commission_percentage });
    return response.data.updatedSale;
  },
  
  deleteSale: async (id: number): Promise<void> => {
    await api.delete(`/sales/${id}`);
  }
};

export default commissionService;