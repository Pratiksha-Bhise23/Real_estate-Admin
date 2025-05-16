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
import { Badge } from "@/components/ui/badge";
import { FolderClosed, MoreHorizontal, Plus, Search } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import categoryService, { Category } from "@/services/categoryService";
import { AxiosError } from "axios";

// Align with PostgreSQL schema
interface ExtendedCategory extends Category {
  properties?: number;
  status?: string;
  created_at: string;
}

export const CategoryManagement = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentCategory, setCurrentCategory] = useState<ExtendedCategory | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const queryClient = useQueryClient();

  // Query to fetch categories with retry
  const { data: categories = [], isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      try {
        const response = await categoryService.getAllCategories();
        return response.map((cat: Category) => ({
          ...cat,
          properties: Math.floor(Math.random() * 100), // Mock; remove if in schema
          status: "Active", // Mock; remove if in schema
          created_at: new Date(cat.created_at || Date.now()).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        }));
      } catch (error) {
        const axiosError = error as AxiosError<{ message?: string }>;
        throw new Error(axiosError.response?.data?.message || axiosError.message);
      }
    },
    retry: 3,
    retryDelay: 1000,
  });

  // Mutation for creating a category
  const createMutation = useMutation({
    mutationFn: (data: Partial<Category>) => categoryService.createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      toast({
        title: "Category Created",
        description: "The category has been created successfully",
      });
      setIsDialogOpen(false);
      resetForm();
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || error.message || "Failed to create category";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  // Mutation for updating a category
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Category> }) =>
      categoryService.updateCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      toast({
        title: "Category Updated",
        description: "The category has been updated successfully",
      });
      setIsEditDialogOpen(false);
      setCurrentCategory(null);
      resetForm();
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || error.message || "Failed to update category";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  // Mutation for deleting a category
  const deleteMutation = useMutation({
    mutationFn: (id: number) => categoryService.deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      toast({
        title: "Category Deleted",
        description: "The category has been deleted successfully",
      });
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || error.message || "Failed to delete category";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      toast({
        title: "Error",
        description: "Category name is required",
        variant: "destructive",
      });
      return;
    }
    createMutation.mutate({
      name: formData.name,
      description: formData.description || null,
    });
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      toast({
        title: "Error",
        description: "Category name is required",
        variant: "destructive",
      });
      return;
    }
    if (currentCategory) {
      updateMutation.mutate({
        id: currentCategory.id,
        data: {
          name: formData.name,
          description: formData.description || null,
        },
      });
    }
  };

  const openEditDialog = (category: ExtendedCategory) => {
    setCurrentCategory(category);
    setFormData({
      name: category.name,
      description: category.description || "",
    });
    setIsEditDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      deleteMutation.mutate(id);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
    });
  };

  const renderStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{status}</Badge>;
      case "inactive":
        return <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Filter categories based on search query
  const filteredCategories = categories.filter((category: ExtendedCategory) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (category.description && category.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-red-600">Error loading categories: {(error as Error).message}</p>
        <Button
          onClick={() => queryClient.invalidateQueries({ queryKey: ['categories'] })}
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
          <h1 className="text-2xl font-bold tracking-tight">Category Management</h1>
          <p className="text-slate-500">Manage property categories and classifications</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Category</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Category</DialogTitle>
              <DialogDescription>Add a new property category to the system.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right text-sm">Name</label>
                  <Input
                    id="name"
                    placeholder="Category name"
                    className="col-span-3"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <label htmlFor="description" className="text-right text-sm pt-2">Description</label>
                  <Textarea
                    id="description"
                    placeholder="Brief description of this category"
                    className="col-span-3"
                    rows={3}
                    value={formData.description}
                    onChange={handleInputChange}
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
                  {createMutation.isPending ? "Saving..." : "Save Category"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Edit Category Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Category</DialogTitle>
              <DialogDescription>Update the category details.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleUpdateSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right text-sm">Name</label>
                  <Input
                    id="name"
                    placeholder="Category name"
                    className="col-span-3"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <label htmlFor="description" className="text-right text-sm pt-2">Description</label>
                  <Textarea
                    id="description"
                    placeholder="Brief description of this category"
                    className="col-span-3"
                    rows={3}
                    value={formData.description}
                    onChange={handleInputChange}
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
                  {updateMutation.isPending ? "Updating..." : "Update Category"}
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
            placeholder="Search categories..."
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
              <TableHead>Category</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Properties</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  Loading categories...
                </TableCell>
              </TableRow>
            ) : filteredCategories.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  No categories found
                </TableCell>
              </TableRow>
            ) : (
              filteredCategories.map((category: ExtendedCategory) => (
                <TableRow key={category.id}>
                  <TableCell className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <FolderClosed className="h-4 w-4 text-blue-600" />
                    </div>
                    {category.name}
                  </TableCell>
                  <TableCell>{category.description || '-'}</TableCell>
                  <TableCell>{category.properties || 0}</TableCell>
                  <TableCell>{renderStatusBadge(category.status || "Active")}</TableCell>
                  <TableCell>{category.created_at || '-'}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEditDialog(category)}>
                          Edit Category
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleDelete(category.id)}
                        >
                          Delete Category
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
          Showing {filteredCategories.length} of {categories.length} categories
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
          <Button variant="outline" size="sm">1</Button>
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

export default CategoryManagement;


// import React, { useState } from "react";
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
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Badge } from "@/components/ui/badge";
// import { FolderClosed, MoreHorizontal, Plus, Search } from "lucide-react";
// import { Textarea } from "@/components/ui/textarea";

// // Sample categories data
// const categories = [
//   {
//     id: 1,
//     name: "Residential",
//     description: "Properties intended for living purposes",
//     properties: 128,
//     status: "Active",
//     createdAt: "Jan 10, 2023",
//   },
//   {
//     id: 2,
//     name: "Commercial",
//     description: "Properties intended for business purposes",
//     properties: 64,
//     status: "Active",
//     createdAt: "Feb 15, 2023",
//   },
//   {
//     id: 3,
//     name: "Industrial",
//     description: "Properties for manufacturing or production",
//     properties: 32,
//     status: "Active",
//     createdAt: "Mar 5, 2023",
//   },
//   {
//     id: 4,
//     name: "Land",
//     description: "Undeveloped land parcels",
//     properties: 56,
//     status: "Active",
//     createdAt: "Apr 20, 2023",
//   },
//   {
//     id: 5,
//     name: "Vacation Homes",
//     description: "Properties for vacation and short-term stays",
//     properties: 24,
//     status: "Inactive",
//     createdAt: "May 12, 2023",
//   },
// ];

// export const CategoryManagement = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const renderStatusBadge = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "active":
//         return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{status}</Badge>;
//       case "inactive":
//         return <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200">{status}</Badge>;
//       default:
//         return <Badge>{status}</Badge>;
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight">Category Management</h1>
//           <p className="text-slate-500">Manage property categories and classifications</p>
//         </div>
//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="gap-2">
//               <Plus className="h-4 w-4" />
//               <span>Add Category</span>
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader>
//               <DialogTitle>Create New Category</DialogTitle>
//               <DialogDescription>
//                 Add a new property category to the system.
//               </DialogDescription>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="name" className="text-right text-sm">
//                   Name
//                 </label>
//                 <Input
//                   id="name"
//                   placeholder="Category name"
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-start gap-4">
//                 <label htmlFor="description" className="text-right text-sm pt-2">
//                   Description
//                 </label>
//                 <Textarea
//                   id="description"
//                   placeholder="Brief description of this category"
//                   className="col-span-3"
//                   rows={3}
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="status" className="text-right text-sm">
//                   Status
//                 </label>
//                 <div className="flex items-center gap-4 col-span-3">
//                   <div className="flex items-center space-x-2">
//                     <input
//                       type="radio"
//                       id="active"
//                       name="status"
//                       defaultChecked
//                       className="h-4 w-4 text-realestate-primary"
//                     />
//                     <label htmlFor="active">Active</label>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <input
//                       type="radio"
//                       id="inactive"
//                       name="status"
//                       className="h-4 w-4 text-realestate-primary"
//                     />
//                     <label htmlFor="inactive">Inactive</label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <DialogFooter>
//               <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={() => setIsDialogOpen(false)}>Save Category</Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-4 justify-between">
//         <div className="relative w-full sm:w-auto">
//           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
//           <Input
//             type="search"
//             placeholder="Search categories..."
//             className="pl-8 w-full sm:w-[300px]"
//           />
//         </div>
//       </div>

//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Category</TableHead>
//               <TableHead>Description</TableHead>
//               <TableHead>Properties</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Created</TableHead>
//               <TableHead className="text-right">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {categories.map((category) => (
//               <TableRow key={category.id}>
//                 <TableCell className="flex items-center gap-3">
//                   <div className="bg-blue-100 p-2 rounded-full">
//                     <FolderClosed className="h-4 w-4 text-blue-600" />
//                   </div>
//                   {category.name}
//                 </TableCell>
//                 <TableCell>{category.description}</TableCell>
//                 <TableCell>{category.properties}</TableCell>
//                 <TableCell>{renderStatusBadge(category.status)}</TableCell>
//                 <TableCell>{category.createdAt}</TableCell>
//                 <TableCell className="text-right">
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button variant="ghost" size="icon">
//                         <MoreHorizontal className="h-4 w-4" />
//                         <span className="sr-only">Open menu</span>
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                       <DropdownMenuItem>Edit Category</DropdownMenuItem>
//                       <DropdownMenuItem>View Properties</DropdownMenuItem>
//                       {category.status.toLowerCase() === "active" ? (
//                         <DropdownMenuItem>Deactivate</DropdownMenuItem>
//                       ) : (
//                         <DropdownMenuItem>Activate</DropdownMenuItem>
//                       )}
//                       <DropdownMenuItem className="text-red-600">
//                         Delete Category
//                       </DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>

//       <div className="flex items-center justify-between">
//         <p className="text-sm text-slate-500">Showing 5 of 8 categories</p>
//         <div className="flex items-center gap-1">
//           <Button variant="outline" size="icon" disabled>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-4 w-4"
//             >
//               <path d="m15 18-6-6 6-6" />
//             </svg>
//             <span className="sr-only">Previous page</span>
//           </Button>
//           <Button variant="outline" size="sm">
//             1
//           </Button>
//           <Button variant="outline" size="icon">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-4 w-4"
//             >
//               <path d="m9 18 6-6-6-6" />
//             </svg>
//             <span className="sr-only">Next page</span>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryManagement;



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
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Badge } from "@/components/ui/badge";
// import { FolderClosed, MoreHorizontal, Plus, Search } from "lucide-react";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "@/components/ui/use-toast";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import categoryService, { Category } from "@/services/categoryService";

// export const CategoryManagement = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//   });

//   const queryClient = useQueryClient();
  
//   // Query to fetch categories
//   const { data: categories = [], isLoading, error } = useQuery({
//     queryKey: ['categories'],
//     queryFn: categoryService.getAllCategories
//   });

//   // Mutation for creating a category
//   const createMutation = useMutation({
//     mutationFn: (data: Partial<Category>) => categoryService.createCategory(data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['categories'] });
//       toast({
//         title: "Category Created",
//         description: "The category has been created successfully",
//       });
//       setIsDialogOpen(false);
//       resetForm();
//     },
//     onError: (error: any) => {
//       toast({
//         title: "Error",
//         description: error.message || "Failed to create category",
//         variant: "destructive",
//       });
//     }
//   });

//   // Mutation for updating a category
//   const updateMutation = useMutation({
//     mutationFn: ({ id, data }: { id: number; data: Partial<Category> }) => 
//       categoryService.updateCategory(id, data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['categories'] });
//       toast({
//         title: "Category Updated",
//         description: "The category has been updated successfully",
//       });
//       setIsEditDialogOpen(false);
//       setCurrentCategory(null);
//     },
//     onError: (error: any) => {
//       toast({
//         title: "Error",
//         description: error.message || "Failed to update category",
//         variant: "destructive",
//       });
//     }
//   });
  
//   // Mutation for deleting a category
//   const deleteMutation = useMutation({
//     mutationFn: (id: number) => categoryService.deleteCategory(id),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['categories'] });
//       toast({
//         title: "Category Deleted",
//         description: "The category has been deleted successfully",
//       });
//     },
//     onError: (error: any) => {
//       toast({
//         title: "Error",
//         description: error.message || "Failed to delete category",
//         variant: "destructive",
//       });
//     }
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleCreateSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     createMutation.mutate(formData);
//   };

//   const handleUpdateSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (currentCategory) {
//       updateMutation.mutate({ 
//         id: currentCategory.id, 
//         data: formData 
//       });
//     }
//   };

//   const openEditDialog = (category: Category) => {
//     setCurrentCategory(category);
//     setFormData({
//       name: category.name,
//       description: category.description || "",
//     });
//     setIsEditDialogOpen(true);
//   };

//   const handleDelete = (id: number) => {
//     if (window.confirm("Are you sure you want to delete this category?")) {
//       deleteMutation.mutate(id);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       description: "",
//     });
//   };

//   const renderStatusBadge = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "active":
//         return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{status}</Badge>;
//       case "inactive":
//         return <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200">{status}</Badge>;
//       default:
//         return <Badge>{status}</Badge>;
//     }
//   };

//   // Filter categories based on search query
//   const filteredCategories = categories.filter(category => 
//     category.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//     (category.description && category.description.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   if (error) {
//     return <div>Error loading categories: {(error as Error).message}</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight">Category Management</h1>
//           <p className="text-slate-500">Manage property categories and classifications</p>
//         </div>
//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="gap-2">
//               <Plus className="h-4 w-4" />
//               <span>Add Category</span>
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader>
//               <DialogTitle>Create New Category</DialogTitle>
//               <DialogDescription>
//                 Add a new property category to the system.
//               </DialogDescription>
//             </DialogHeader>
//             <form onSubmit={handleCreateSubmit}>
//               <div className="grid gap-4 py-4">
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <label htmlFor="name" className="text-right text-sm">
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     placeholder="Category name"
//                     className="col-span-3"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="grid grid-cols-4 items-start gap-4">
//                   <label htmlFor="description" className="text-right text-sm pt-2">
//                     Description
//                   </label>
//                   <Textarea
//                     id="description"
//                     placeholder="Brief description of this category"
//                     className="col-span-3"
//                     rows={3}
//                     value={formData.description}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <DialogFooter>
//                 <Button 
//                   variant="outline" 
//                   type="button" 
//                   onClick={() => setIsDialogOpen(false)}
//                 >
//                   Cancel
//                 </Button>
//                 <Button 
//                   type="submit" 
//                   disabled={createMutation.isPending}
//                 >
//                   {createMutation.isPending ? "Saving..." : "Save Category"}
//                 </Button>
//               </DialogFooter>
//             </form>
//           </DialogContent>
//         </Dialog>

//         {/* Edit Category Dialog */}
//         <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
//           <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader>
//               <DialogTitle>Edit Category</DialogTitle>
//               <DialogDescription>
//                 Update the category details.
//               </DialogDescription>
//             </DialogHeader>
//             <form onSubmit={handleUpdateSubmit}>
//               <div className="grid gap-4 py-4">
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <label htmlFor="name" className="text-right text-sm">
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     placeholder="Category name"
//                     className="col-span-3"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                   />
//                 </div>
//                 <div className="grid grid-cols-4 items-start gap-4">
//                   <label htmlFor="description" className="text-right text-sm pt-2">
//                     Description
//                   </label>
//                   <Textarea
//                     id="description"
//                     placeholder="Brief description of this category"
//                     className="col-span-3"
//                     rows={3}
//                     value={formData.description}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <DialogFooter>
//                 <Button 
//                   variant="outline" 
//                   type="button" 
//                   onClick={() => setIsEditDialogOpen(false)}
//                 >
//                   Cancel
//                 </Button>
//                 <Button 
//                   type="submit" 
//                   disabled={updateMutation.isPending}
//                 >
//                   {updateMutation.isPending ? "Updating..." : "Update Category"}
//                 </Button>
//               </DialogFooter>
//             </form>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-4 justify-between">
//         <div className="relative w-full sm:w-auto">
//           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
//           <Input
//             type="search"
//             placeholder="Search categories..."
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
//               <TableHead>Category</TableHead>
//               <TableHead>Description</TableHead>
//               <TableHead className="text-right">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {isLoading ? (
//               <TableRow>
//                 <TableCell colSpan={3} className="text-center py-8">
//                   Loading categories...
//                 </TableCell>
//               </TableRow>
//             ) : filteredCategories.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={3} className="text-center py-8">
//                   No categories found
//                 </TableCell>
//               </TableRow>
//             ) : (
//               filteredCategories.map((category) => (
//                 <TableRow key={category.id}>
//                   <TableCell className="flex items-center gap-3">
//                     <div className="bg-blue-100 p-2 rounded-full">
//                       <FolderClosed className="h-4 w-4 text-blue-600" />
//                     </div>
//                     {category.name}
//                   </TableCell>
//                   <TableCell>{category.description}</TableCell>
//                   <TableCell className="text-right">
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="icon">
//                           <MoreHorizontal className="h-4 w-4" />
//                           <span className="sr-only">Open menu</span>
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem onClick={() => openEditDialog(category)}>
//                           Edit Category
//                         </DropdownMenuItem>
//                         <DropdownMenuItem 
//                           className="text-red-600"
//                           onClick={() => handleDelete(category.id)}
//                         >
//                           Delete Category
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
//           Showing {filteredCategories.length} of {categories.length} categories
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CategoryManagement;