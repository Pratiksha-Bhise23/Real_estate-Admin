
import api from "./api";

export interface Offer {
  id: number;
  title: string;
  description: string;
  min_sales: number | null;
  rank_required: string | null;
  created_at: string;
}

const offerService = {
  getAllOffers: async (): Promise<Offer[]> => {
    const response = await api.get("/offers");
    return response.data.offers;
  },
  
  getOfferById: async (id: number): Promise<Offer> => {
    const response = await api.get(`/offers/${id}`);
    return response.data.offer;
  },
  
  createOffer: async (offerData: Partial<Offer>): Promise<Offer> => {
    const response = await api.post("/offers", offerData);
    return response.data.offer;
  },
  
  updateOffer: async (id: number, offerData: Partial<Offer>): Promise<Offer> => {
    const response = await api.put(`/offers/${id}`, offerData);
    return response.data.updatedOffer;
  },
  
  deleteOffer: async (id: number): Promise<void> => {
    await api.delete(`/offers/${id}`);
  }
};

export default offerService;
