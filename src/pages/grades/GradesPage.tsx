
// import React, { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import { Award, Check, Edit, MoreHorizontal, Plus, Search, Star } from "lucide-react";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { toast } from "@/components/ui/use-toast";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import gradeService, { Grade } from "@/services/gradeService";

// export const GradesPage = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
//   const [view, setView] = useState<"grades" | "properties">("grades");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentGrade, setCurrentGrade] = useState<Grade | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     min_sales: 0,
//     max_sales: null as number | null,
//   });

//   const queryClient = useQueryClient();
  
//   // Query to fetch grades
//   const { data: grades = [], isLoading, error } = useQuery({
//     queryKey: ['grades'],
//     queryFn: gradeService.getAllGrades
//   });

//   // Mutation for creating a grade
//   const createMutation = useMutation({
//     mutationFn: (data: Partial<Grade>) => gradeService.createGrade(data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['grades'] });
//       toast({
//         title: "Grade Created",
//         description: "The grade has been created successfully",
//       });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//     onError: (error: any) => {
//       toast({
//         title: "Error",
//         description: error.message || "Failed to create grade",
//         variant: "destructive",
//       });
//     }
//   });

//   // Mutation for updating a grade
//   const updateMutation = useMutation({
//     mutationFn: ({ id, data }: { id: number; data: Partial<Grade> }) => 
//       gradeService.updateGrade(id, data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['grades'] });
//       toast({
//         title: "Grade Updated",
//         description: "The grade has been updated successfully",
//       });
//       setIsEditDialogOpen(false);
//       setCurrentGrade(null);
//     },
//     onError: (error: any) => {
//       toast({
//         title: "Error",
//         description: error.message || "Failed to update grade",
//         variant: "destructive",
//       });
//     }
//   });
  
//   // Mutation for deleting a grade
//   const deleteMutation = useMutation({
//     mutationFn: (id: number) => gradeService.deleteGrade(id),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['grades'] });
//       toast({
//         title: "Grade Deleted",
//         description: "The grade has been deleted successfully",
//       });
//     },
//     onError: (error: any) => {
//       toast({
//         title: "Error",
//         description: error.message || "Failed to delete grade",
//         variant: "destructive",
//       });
//     }
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target;
//     if (id === 'min_sales' || id === 'max_sales') {
//       setFormData({
//         ...formData,
//         [id]: value === "" ? (id === 'max_sales' ? null : 0) : Number(value),
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [id]: value,
//       });
//     }
//   };

//   const handleCreateSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     createMutation.mutate(formData);
//   };

//   const handleUpdateSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (currentGrade) {
//       updateMutation.mutate({ 
//         id: currentGrade.id, 
//         data: formData 
//       });
//     }
//   };

//   const openEditDialog = (grade: Grade) => {
//     setCurrentGrade(grade);
//     setFormData({
//       name: grade.name,
//       description: grade.description || "",
//       min_sales: grade.min_sales,
//       max_sales: grade.max_sales,
//     });
//     setIsEditDialogOpen(true);
//   };

//   const handleDelete = (id: number) => {
//     if (window.confirm("Are you sure you want to delete this grade?")) {
//       deleteMutation.mutate(id);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       description: "",
//       min_sales: 0,
//       max_sales: null,
//     });
//   };

//   // Render grade badge with appropriate color
//   const renderGradeBadge = (gradeName: string) => {
//     // Use some simple logic to determine badge color
//     switch (gradeName.toLowerCase()) {
//       case "premium":
//       case "gold":
//         return (
//           <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 flex items-center gap-1">
//             <Star className="h-3 w-3 fill-yellow-600" />
//             {gradeName}
//           </Badge>
//         );
//       case "silver":
//       case "standard plus":
//         return (
//           <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200 flex items-center gap-1">
//             <Star className="h-3 w-3 fill-slate-500" />
//             {gradeName}
//           </Badge>
//         );
//       case "bronze":
//       case "standard":
//         return (
//           <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 flex items-center gap-1">
//             <Star className="h-3 w-3 fill-amber-600" />
//             {gradeName}
//           </Badge>
//         );
//       default:
//         return <Badge>{gradeName}</Badge>;
//     }
//   };

//   // Filter grades based on search query
//   const filteredGrades = grades.filter(grade => 
//     grade.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//     (grade.description && grade.description.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   if (error) {
//     return <div>Error loading grades: {(error as Error).message}</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight">Property Grades</h1>
//           <p className="text-slate-500">Manage property classification grades</p>
//         </div>
//         <div className="flex flex-wrap gap-2">
//           <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//             <DialogTrigger asChild>
//               <Button className="gap-2">
//                 <Plus className="h-4 w-4" />
//                 <span>Add Grade</span>
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px]">
//               <DialogHeader>
//                 <DialogTitle>Create New Grade</DialogTitle>
//                 <DialogDescription>
//                   Set up a new property classification grade.
//                 </DialogDescription>
//               </DialogHeader>
//               <form onSubmit={handleCreateSubmit}>
//                 <div className="grid gap-4 py-4">
//                   <div className="grid gap-2">
//                     <Label htmlFor="name">Grade Name</Label>
//                     <Input 
//                       id="name" 
//                       placeholder="e.g. Premium" 
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <Label htmlFor="description">Description</Label>
//                     <Input 
//                       id="description" 
//                       placeholder="Brief description of this grade" 
//                       value={formData.description}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <Label htmlFor="min_sales">Minimum Sales</Label>
//                     <Input 
//                       id="min_sales" 
//                       type="number" 
//                       placeholder="Minimum sales required for this grade" 
//                       value={formData.min_sales}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <Label htmlFor="max_sales">Maximum Sales (leave empty for no limit)</Label>
//                     <Input 
//                       id="max_sales" 
//                       type="number" 
//                       placeholder="Maximum sales for this grade" 
//                       value={formData.max_sales === null ? "" : formData.max_sales}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>
//                 <DialogFooter>
//                   <Button 
//                     variant="outline" 
//                     type="button"
//                     onClick={() => setIsDialogOpen(false)}
//                   >
//                     Cancel
//                   </Button>
//                   <Button 
//                     type="submit"
//                     disabled={createMutation.isPending}
//                   >
//                     {createMutation.isPending ? "Creating..." : "Create Grade"}
//                   </Button>
//                 </DialogFooter>
//               </form>
//             </DialogContent>
//           </Dialog>

//           {/* Edit Grade Dialog */}
//           <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
//             <DialogContent className="sm:max-w-[425px]">
//               <DialogHeader>
//                 <DialogTitle>Edit Grade</DialogTitle>
//                 <DialogDescription>
//                   Update the grade details.
//                 </DialogDescription>
//               </DialogHeader>
//               <form onSubmit={handleUpdateSubmit}>
//                 <div className="grid gap-4 py-4">
//                   <div className="grid gap-2">
//                     <Label htmlFor="name">Grade Name</Label>
//                     <Input 
//                       id="name" 
//                       placeholder="e.g. Premium" 
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <Label htmlFor="description">Description</Label>
//                     <Input 
//                       id="description" 
//                       placeholder="Brief description of this grade" 
//                       value={formData.description}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <Label htmlFor="min_sales">Minimum Sales</Label>
//                     <Input 
//                       id="min_sales" 
//                       type="number" 
//                       placeholder="Minimum sales required for this grade" 
//                       value={formData.min_sales}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <Label htmlFor="max_sales">Maximum Sales (leave empty for no limit)</Label>
//                     <Input 
//                       id="max_sales" 
//                       type="number" 
//                       placeholder="Maximum sales for this grade" 
//                       value={formData.max_sales === null ? "" : formData.max_sales}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>
//                 <DialogFooter>
//                   <Button 
//                     variant="outline" 
//                     type="button"
//                     onClick={() => setIsEditDialogOpen(false)}
//                   >
//                     Cancel
//                   </Button>
//                   <Button 
//                     type="submit"
//                     disabled={updateMutation.isPending}
//                   >
//                     {updateMutation.isPending ? "Updating..." : "Update Grade"}
//                   </Button>
//                 </DialogFooter>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-4 justify-between">
//         <div className="relative w-full sm:w-auto">
//           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
//           <Input
//             type="search"
//             placeholder="Search grades..."
//             className="pl-8 w-full sm:w-[300px]"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Grade</TableHead>
//               <TableHead>Description</TableHead>
//               <TableHead>Min Sales</TableHead>
//               <TableHead>Max Sales</TableHead>
//               <TableHead className="text-right">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {isLoading ? (
//               <TableRow>
//                 <TableCell colSpan={5} className="text-center py-8">
//                   Loading grades...
//                 </TableCell>
//               </TableRow>
//             ) : filteredGrades.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={5} className="text-center py-8">
//                   No grades found
//                 </TableCell>
//               </TableRow>
//             ) : (
//               filteredGrades.map((grade) => (
//                 <TableRow key={grade.id}>
//                   <TableCell>
//                     {renderGradeBadge(grade.name)}
//                   </TableCell>
//                   <TableCell>{grade.description}</TableCell>
//                   <TableCell>{grade.min_sales}</TableCell>
//                   <TableCell>{grade.max_sales === null ? "No limit" : grade.max_sales}</TableCell>
//                   <TableCell className="text-right">
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="icon">
//                           <MoreHorizontal className="h-4 w-4" />
//                           <span className="sr-only">Open menu</span>
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem onClick={() => openEditDialog(grade)}>
//                           Edit Grade
//                         </DropdownMenuItem>
//                         <DropdownMenuItem 
//                           className="text-red-600"
//                           onClick={() => handleDelete(grade.id)}
//                         >
//                           Delete Grade
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       <div className="flex items-center justify-between">
//         <p className="text-sm text-slate-500">
//           Showing {filteredGrades.length} of {grades.length} grades
//         </p>
//       </div>
//     </div>
//   );
// };

// export default GradesPage;


import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Plus, Search, Star } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import gradeService, { Grade } from "@/services/gradeService";
import { AxiosError } from "axios";

export const GradesPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentGrade, setCurrentGrade] = useState<Grade | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    min_sales: 0,
    max_sales: null as number | null,
  });

  const queryClient = useQueryClient();

  // Query to fetch grades
  const { data: grades = [], isLoading, error } = useQuery({
    queryKey: ["grades"],
    queryFn: async () => {
      try {
        const response = await gradeService.getAllGrades();
        return response;
      } catch (error) {
        const axiosError = error as AxiosError<{ message?: string }>;
        throw new Error(axiosError.response?.data?.message || axiosError.message);
      }
    },
    retry: 3,
    retryDelay: 1000,
  });

  // Mutation for creating a grade
  const createMutation = useMutation({
    mutationFn: (data: Partial<Grade>) => gradeService.createGrade(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["grades"] });
      toast({
        title: "Grade Created",
        description: "The grade has been created successfully",
      });
      setIsDialogOpen(false);
      resetForm();
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || error.message || "Failed to create grade";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  // Mutation for updating a grade
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Grade> }) =>
      gradeService.updateGrade(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["grades"] });
      toast({
        title: "Grade Updated",
        description: "The grade has been updated successfully",
      });
      setIsEditDialogOpen(false);
      setCurrentGrade(null);
      resetForm();
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || error.message || "Failed to update grade";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  // Mutation for deleting a grade
  const deleteMutation = useMutation({
    mutationFn: (id: number) => gradeService.deleteGrade(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["grades"] });
      toast({
        title: "Grade Deleted",
        description: "The grade has been deleted successfully",
      });
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || error.message || "Failed to delete grade";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === "min_sales" || id === "max_sales") {
      setFormData({
        ...formData,
        [id]: value === "" ? (id === "max_sales" ? null : 0) : Number(value),
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || formData.min_sales < 0) {
      toast({
        title: "Error",
        description: "Grade name and non-negative minimum sales are required",
        variant: "destructive",
      });
      return;
    }
    createMutation.mutate(formData);
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || formData.min_sales < 0) {
      toast({
        title: "Error",
        description: "Grade name and non-negative minimum sales are required",
        variant: "destructive",
      });
      return;
    }
    if (currentGrade) {
      updateMutation.mutate({
        id: currentGrade.id,
        data: formData,
      });
    }
  };

  const openEditDialog = (grade: Grade) => {
    setCurrentGrade(grade);
    setFormData({
      name: grade.name,
      description: grade.description || "",
      min_sales: grade.min_sales,
      max_sales: grade.max_sales,
    });
    setIsEditDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this grade?")) {
      deleteMutation.mutate(id);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      min_sales: 0,
      max_sales: null,
    });
  };

  // Render grade badge with appropriate color
  const renderGradeBadge = (gradeName: string) => {
    switch (gradeName.toLowerCase()) {
      case "premium":
      case "gold":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-600" />
            {gradeName}
          </Badge>
        );
      case "silver":
      case "standard plus":
        return (
          <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200 flex items-center gap-1">
            <Star className="h-3 w-3 fill-slate-500" />
            {gradeName}
          </Badge>
        );
      case "bronze":
      case "standard":
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-600" />
            {gradeName}
          </Badge>
        );
      default:
        return <Badge>{gradeName}</Badge>;
    }
  };

  // Filter grades based on search query
  const filteredGrades = grades.filter((grade) =>
    grade.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (grade.description && grade.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-red-600">Error loading grades: {(error as Error).message}</p>
        <Button
          onClick={() => queryClient.invalidateQueries({ queryKey: ["grades"] })}
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Property Grades</h1>
          <p className="text-slate-500">Manage property classification grades</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Grade</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Grade</DialogTitle>
              <DialogDescription>
                Set up a new property classification grade.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Grade Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g. Premium"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="Brief description of this grade"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="min_sales">Minimum Sales</Label>
                  <Input
                    id="min_sales"
                    type="number"
                    placeholder="Minimum sales required for this grade"
                    value={formData.min_sales}
                    onChange={handleInputChange}
                    required
                    min="0"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="max_sales">Maximum Sales (leave empty for no limit)</Label>
                  <Input
                    id="max_sales"
                    type="number"
                    placeholder="Maximum sales for this grade"
                    value={formData.max_sales === null ? "" : formData.max_sales}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={createMutation.isPending}>
                  {createMutation.isPending ? "Creating..." : "Create Grade"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Edit Grade Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Grade</DialogTitle>
              <DialogDescription>
                Update the grade details.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleUpdateSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Grade Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g. Premium"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="Brief description of this grade"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="min_sales">Minimum Sales</Label>
                  <Input
                    id="min_sales"
                    type="number"
                    placeholder="Minimum sales required for this grade"
                    value={formData.min_sales}
                    onChange={handleInputChange}
                    required
                    min="0"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="max_sales">Maximum Sales (leave empty for no limit)</Label>
                  <Input
                    id="max_sales"
                    type="number"
                    placeholder="Maximum sales for this grade"
                    value={formData.max_sales === null ? "" : formData.max_sales}
                    onChange={handleInputChange}
                    min="0"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setIsEditDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={updateMutation.isPending}>
                  {updateMutation.isPending ? "Updating..." : "Update Grade"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input
            type="search"
            placeholder="Search grades..."
            className="pl-8 w-full sm:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Grade</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Min Sales</TableHead>
              <TableHead>Max Sales</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  Loading grades...
                </TableCell>
              </TableRow>
            ) : filteredGrades.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  No grades found
                </TableCell>
              </TableRow>
            ) : (
              filteredGrades.map((grade) => (
                <TableRow key={grade.id}>
                  <TableCell>{renderGradeBadge(grade.name)}</TableCell>
                  <TableCell>{grade.description || "-"}</TableCell>
                  <TableCell>{grade.min_sales.toLocaleString()}</TableCell>
                  <TableCell>
                    {grade.max_sales === null ? "No limit" : grade.max_sales.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEditDialog(grade)}>
                          Edit Grade
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleDelete(grade.id)}
                        >
                          Delete Grade
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing {filteredGrades.length} of {grades.length} grades
        </p>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span className="sr-only">Previous page</span>
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GradesPage;