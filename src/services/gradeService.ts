
// // import api from "./api";

// // export interface Grade {
// //   id: number;
// //   name: string;
// //   description: string;
// //   min_sales: number;
// //   max_sales: number | null;
// // }

// // const gradeService = {
// //   getAllGrades: async (): Promise<Grade[]> => {
// //     const response = await api.get("/grades");
// //     return response.data;
// //   },
  
// //   getGradeById: async (id: number): Promise<Grade> => {
// //     const response = await api.get(`/grades/${id}`);
// //     return response.data;
// //   },
  
// //   createGrade: async (gradeData: Partial<Grade>): Promise<Grade> => {
// //     const response = await api.post("/grades", gradeData);
// //     return response.data.grade;
// //   },
  
// //   updateGrade: async (id: number, gradeData: Partial<Grade>): Promise<Grade> => {
// //     const response = await api.put(`/grades/${id}`, gradeData);
// //     return response.data.grade;
// //   },
  
// //   deleteGrade: async (id: number): Promise<void> => {
// //     await api.delete(`/grades/${id}`);
// //   }
// // };

// // export default gradeService;



// import api from "./api";

// export interface Grade {
//   id: number;
//   name: string;
//   description: string;
//   min_sales: number;
//   max_sales: number | null;
// }

// const gradeService = {
//   getAllGrades: async (): Promise<Grade[]> => {
//     const response = await api.get("/grades");
//     return response.data.grades; // Updated to match backend response
//   },

//   getGradeById: async (id: number): Promise<Grade> => {
//     const response = await api.get(`/grades/${id}`);
//     return response.data.grade;
//   },

//   createGrade: async (gradeData: Partial<Grade>): Promise<Grade> => {
//     const response = await api.post("/grades", gradeData);
//     return response.data.grade;
//   },

//   updateGrade: async (id: number, gradeData: Partial<Grade>): Promise<Grade> => {
//     const response = await api.put(`/grades/${id}`, gradeData);
//     return response.data.grade;
//   },

//   deleteGrade: async (id: number): Promise<void> => {
//     await api.delete(`/grades/${id}`);
//   },
// };

// export default gradeService;


import api from "./api";

export interface Grade {
  id: number;
  name: string;
  description: string;
  min_sales: number;
  max_sales: number | null;
  created_at?: string;
  updated_at?: string;
}

const gradeService = {
  getAllGrades: async (): Promise<Grade[]> => {
    const response = await api.get("/grades");
    return response.data.grades;
  },

  getGradeById: async (id: number): Promise<Grade> => {
    const response = await api.get(`/grades/${id}`);
    return response.data.grade;
  },

  createGrade: async (gradeData: Partial<Grade>): Promise<Grade> => {
    const response = await api.post("/grades", gradeData);
    return response.data.grade;
  },

  updateGrade: async (id: number, gradeData: Partial<Grade>): Promise<Grade> => {
    const response = await api.put(`/grades/${id}`, gradeData);
    return response.data.grade;
  },

  deleteGrade: async (id: number): Promise<void> => {
    await api.delete(`/grades/${id}`);
  },
};

export default gradeService;
