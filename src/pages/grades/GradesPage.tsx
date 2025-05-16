
// // import React, { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// // } from "@/components/ui/table";
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// //   DropdownMenuTrigger,
// // } from "@/components/ui/dropdown-menu";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import { Label } from "@/components/ui/label";
// // import { Badge } from "@/components/ui/badge";
// // import { Award, Check, Edit, MoreHorizontal, Plus, Search, Star } from "lucide-react";
// // import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// // // Sample grade data
// // const grades = [
// //   {
// //     id: 1,
// //     name: "Premium",
// //     description: "Top-tier properties with luxury amenities",
// //     properties: 15,
// //     minPrice: "$1,000,000+",
// //     commission: "3.0%",
// //     criteria: ["Luxury Amenities", "Premium Location", "High-end Finishes"],
// //     color: "gold",
// //   },
// //   {
// //     id: 2,
// //     name: "Standard Plus",
// //     description: "Above average properties with good amenities",
// //     properties: 32,
// //     minPrice: "$500,000 - $999,999",
// //     commission: "2.7%",
// //     criteria: ["Modern Features", "Good Location", "Quality Construction"],
// //     color: "silver",
// //   },
// //   {
// //     id: 3,
// //     name: "Standard",
// //     description: "Average properties meeting basic requirements",
// //     properties: 68,
// //     minPrice: "$250,000 - $499,999",
// //     commission: "2.5%",
// //     criteria: ["Basic Amenities", "Average Location", "Standard Construction"],
// //     color: "bronze",
// //   },
// //   {
// //     id: 4,
// //     name: "Economy",
// //     description: "Budget-friendly properties",
// //     properties: 43,
// //     minPrice: "$100,000 - $249,999",
// //     commission: "2.3%",
// //     criteria: ["Minimal Features", "Various Locations", "Basic Construction"],
// //     color: "default",
// //   },
// // ];

// // // Sample properties with grades
// // const propertyGrades = [
// //   {
// //     id: 1,
// //     property: "Luxury Villa in Beverly Hills",
// //     address: "123 Palm Avenue, Beverly Hills, CA",
// //     grade: "Premium",
// //     price: "$2,450,000",
// //     agent: "Jennifer Adams",
// //     dateGraded: "Jan 15, 2024",
// //   },
// //   {
// //     id: 2,
// //     property: "Downtown Apartment",
// //     address: "456 Main Street, New York, NY",
// //     grade: "Standard Plus",
// //     price: "$950,000",
// //     agent: "Michael Rodriguez",
// //     dateGraded: "Feb 5, 2024",
// //   },
// //   {
// //     id: 3,
// //     property: "Beachfront Condo",
// //     address: "321 Ocean Drive, Miami, FL",
// //     grade: "Premium",
// //     price: "$1,200,000",
// //     agent: "Sarah Johnson",
// //     dateGraded: "Feb 18, 2024",
// //   },
// //   {
// //     id: 4,
// //     property: "Suburban House",
// //     address: "789 Oak Street, Austin, TX",
// //     grade: "Standard",
// //     price: "$420,000",
// //     agent: "David Chen",
// //     dateGraded: "Mar 1, 2024",
// //   },
// //   {
// //     id: 5,
// //     property: "Mountain Cabin",
// //     address: "555 Pine Trail, Aspen, CO",
// //     grade: "Standard Plus",
// //     price: "$650,000",
// //     agent: "Lisa Thompson",
// //     dateGraded: "Mar 10, 2024",
// //   },
// // ];

// // export const GradesPage = () => {
// //   const [isDialogOpen, setIsDialogOpen] = useState(false);
// //   const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
// //   const [view, setView] = useState<"grades" | "properties">("grades");

// //   // Render grade badge with appropriate color
// //   const renderGradeBadge = (grade: string) => {
// //     const gradeInfo = grades.find((g) => g.name === grade);
    
// //     switch (gradeInfo?.color) {
// //       case "gold":
// //         return (
// //           <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 flex items-center gap-1">
// //             <Star className="h-3 w-3 fill-yellow-600" />
// //             {grade}
// //           </Badge>
// //         );
// //       case "silver":
// //         return (
// //           <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200 flex items-center gap-1">
// //             <Star className="h-3 w-3 fill-slate-500" />
// //             {grade}
// //           </Badge>
// //         );
// //       case "bronze":
// //         return (
// //           <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 flex items-center gap-1">
// //             <Star className="h-3 w-3 fill-amber-600" />
// //             {grade}
// //           </Badge>
// //         );
// //       default:
// //         return <Badge>{grade}</Badge>;
// //     }
// //   };

// //   return (
// //     <div className="space-y-6">
// //       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
// //         <div>
// //           <h1 className="text-2xl font-bold tracking-tight">Property Grades</h1>
// //           <p className="text-slate-500">Manage property classification grades</p>
// //         </div>
// //         <div className="flex flex-wrap gap-2">
// //           {view === "grades" ? (
// //             <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
// //               <DialogTrigger asChild>
// //                 <Button className="gap-2">
// //                   <Plus className="h-4 w-4" />
// //                   <span>Add Grade</span>
// //                 </Button>
// //               </DialogTrigger>
// //               <DialogContent className="sm:max-w-[425px]">
// //                 <DialogHeader>
// //                   <DialogTitle>Create New Grade</DialogTitle>
// //                   <DialogDescription>
// //                     Set up a new property classification grade.
// //                   </DialogDescription>
// //                 </DialogHeader>
// //                 <div className="grid gap-4 py-4">
// //                   <div className="grid gap-2">
// //                     <Label htmlFor="name">Grade Name</Label>
// //                     <Input id="name" placeholder="e.g. Premium" />
// //                   </div>
// //                   <div className="grid gap-2">
// //                     <Label htmlFor="description">Description</Label>
// //                     <Input id="description" placeholder="Brief description of this grade" />
// //                   </div>
// //                   <div className="grid gap-2">
// //                     <Label htmlFor="minPrice">Minimum Price Range</Label>
// //                     <Input id="minPrice" placeholder="e.g. $500,000+" />
// //                   </div>
// //                   <div className="grid gap-2">
// //                     <Label htmlFor="commission">Commission Rate</Label>
// //                     <Input id="commission" placeholder="e.g. 2.5%" />
// //                   </div>
// //                   <div className="grid gap-2">
// //                     <Label htmlFor="color">Color</Label>
// //                     <Select defaultValue="default">
// //                       <SelectTrigger>
// //                         <SelectValue placeholder="Select color" />
// //                       </SelectTrigger>
// //                       <SelectContent>
// //                         <SelectItem value="gold">Gold</SelectItem>
// //                         <SelectItem value="silver">Silver</SelectItem>
// //                         <SelectItem value="bronze">Bronze</SelectItem>
// //                         <SelectItem value="default">Default</SelectItem>
// //                       </SelectContent>
// //                     </Select>
// //                   </div>
// //                 </div>
// //                 <div className="flex justify-end gap-4">
// //                   <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
// //                     Cancel
// //                   </Button>
// //                   <Button onClick={() => setIsDialogOpen(false)}>Save Grade</Button>
// //                 </div>
// //               </DialogContent>
// //             </Dialog>
// //           ) : (
// //             <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
// //               <DialogTrigger asChild>
// //                 <Button className="gap-2">
// //                   <Award className="h-4 w-4" />
// //                   <span>Assign Grade</span>
// //                 </Button>
// //               </DialogTrigger>
// //               <DialogContent className="sm:max-w-[425px]">
// //                 <DialogHeader>
// //                   <DialogTitle>Assign Property Grade</DialogTitle>
// //                   <DialogDescription>
// //                     Assign a grade to a property based on its characteristics.
// //                   </DialogDescription>
// //                 </DialogHeader>
// //                 <div className="grid gap-4 py-4">
// //                   <div className="grid gap-2">
// //                     <Label htmlFor="property">Property</Label>
// //                     <Select>
// //                       <SelectTrigger>
// //                         <SelectValue placeholder="Select property" />
// //                       </SelectTrigger>
// //                       <SelectContent>
// //                         <SelectItem value="villa">Luxury Villa in Beverly Hills</SelectItem>
// //                         <SelectItem value="apartment">Downtown Apartment</SelectItem>
// //                         <SelectItem value="condo">Beachfront Condo</SelectItem>
// //                         <SelectItem value="house">Suburban House</SelectItem>
// //                         <SelectItem value="cabin">Mountain Cabin</SelectItem>
// //                       </SelectContent>
// //                     </Select>
// //                   </div>
// //                   <div className="grid gap-2">
// //                     <Label htmlFor="grade">Grade</Label>
// //                     <Select>
// //                       <SelectTrigger>
// //                         <SelectValue placeholder="Select grade" />
// //                       </SelectTrigger>
// //                       <SelectContent>
// //                         <SelectItem value="premium">Premium</SelectItem>
// //                         <SelectItem value="standard-plus">Standard Plus</SelectItem>
// //                         <SelectItem value="standard">Standard</SelectItem>
// //                         <SelectItem value="economy">Economy</SelectItem>
// //                       </SelectContent>
// //                     </Select>
// //                   </div>
// //                   <div className="grid gap-2">
// //                     <Label htmlFor="notes">Notes (Optional)</Label>
// //                     <textarea
// //                       id="notes"
// //                       className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
// //                       placeholder="Any additional notes about this grading"
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="flex justify-end gap-4">
// //                   <Button variant="outline" onClick={() => setIsAssignDialogOpen(false)}>
// //                     Cancel
// //                   </Button>
// //                   <Button onClick={() => setIsAssignDialogOpen(false)}>Assign Grade</Button>
// //                 </div>
// //               </DialogContent>
// //             </Dialog>
// //           )}
// //           <div className="flex items-center p-1 border rounded-md">
// //             <Button
// //               variant={view === "grades" ? "default" : "ghost"}
// //               size="sm"
// //               onClick={() => setView("grades")}
// //             >
// //               Grade Definitions
// //             </Button>
// //             <Button
// //               variant={view === "properties" ? "default" : "ghost"}
// //               size="sm"
// //               onClick={() => setView("properties")}
// //             >
// //               Properties
// //             </Button>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="flex flex-col sm:flex-row gap-4 justify-between">
// //         <div className="relative w-full sm:w-auto">
// //           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
// //           <Input
// //             type="search"
// //             placeholder={view === "grades" ? "Search grades..." : "Search properties..."}
// //             className="pl-8 w-full sm:w-[300px]"
// //           />
// //         </div>
// //         {view === "properties" && (
// //           <div className="flex gap-2">
// //             <Select defaultValue="all">
// //               <SelectTrigger className="w-[150px]">
// //                 <SelectValue placeholder="Filter by grade" />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 <SelectItem value="all">All Grades</SelectItem>
// //                 <SelectItem value="premium">Premium</SelectItem>
// //                 <SelectItem value="standard-plus">Standard Plus</SelectItem>
// //                 <SelectItem value="standard">Standard</SelectItem>
// //                 <SelectItem value="economy">Economy</SelectItem>
// //               </SelectContent>
// //             </Select>
// //           </div>
// //         )}
// //       </div>

// //       {view === "grades" ? (
// //         <div className="rounded-md border">
// //           <Table>
// //             <TableHeader>
// //               <TableRow>
// //                 <TableHead>Grade</TableHead>
// //                 <TableHead>Description</TableHead>
// //                 <TableHead>Properties</TableHead>
// //                 <TableHead>Min Price Range</TableHead>
// //                 <TableHead>Commission Rate</TableHead>
// //                 <TableHead>Criteria</TableHead>
// //                 <TableHead className="text-right">Actions</TableHead>
// //               </TableRow>
// //             </TableHeader>
// //             <TableBody>
// //               {grades.map((grade) => (
// //                 <TableRow key={grade.id}>
// //                   <TableCell>
// //                     {renderGradeBadge(grade.name)}
// //                   </TableCell>
// //                   <TableCell>{grade.description}</TableCell>
// //                   <TableCell>{grade.properties}</TableCell>
// //                   <TableCell>{grade.minPrice}</TableCell>
// //                   <TableCell>{grade.commission}</TableCell>
// //                   <TableCell>
// //                     <div className="flex flex-wrap gap-1">
// //                       {grade.criteria.map((criterion, index) => (
// //                         <div key={index} className="flex items-center text-xs text-slate-700">
// //                           <Check className="h-3 w-3 mr-1 text-green-600" />
// //                           {criterion}
// //                           {index < grade.criteria.length - 1 && <span className="mx-1">•</span>}
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </TableCell>
// //                   <TableCell className="text-right">
// //                     <DropdownMenu>
// //                       <DropdownMenuTrigger asChild>
// //                         <Button variant="ghost" size="icon">
// //                           <MoreHorizontal className="h-4 w-4" />
// //                           <span className="sr-only">Open menu</span>
// //                         </Button>
// //                       </DropdownMenuTrigger>
// //                       <DropdownMenuContent align="end">
// //                         <DropdownMenuItem>Edit Grade</DropdownMenuItem>
// //                         <DropdownMenuItem>View Properties</DropdownMenuItem>
// //                         <DropdownMenuItem className="text-red-600">
// //                           Delete Grade
// //                         </DropdownMenuItem>
// //                       </DropdownMenuContent>
// //                     </DropdownMenu>
// //                   </TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </div>
// //       ) : (
// //         <div className="rounded-md border">
// //           <Table>
// //             <TableHeader>
// //               <TableRow>
// //                 <TableHead>Property</TableHead>
// //                 <TableHead>Address</TableHead>
// //                 <TableHead>Grade</TableHead>
// //                 <TableHead>Price</TableHead>
// //                 <TableHead>Agent</TableHead>
// //                 <TableHead>Date Graded</TableHead>
// //                 <TableHead className="text-right">Actions</TableHead>
// //               </TableRow>
// //             </TableHeader>
// //             <TableBody>
// //               {propertyGrades.map((property) => (
// //                 <TableRow key={property.id}>
// //                   <TableCell className="font-medium">{property.property}</TableCell>
// //                   <TableCell className="max-w-[200px] truncate">
// //                     {property.address}
// //                   </TableCell>
// //                   <TableCell>{renderGradeBadge(property.grade)}</TableCell>
// //                   <TableCell>{property.price}</TableCell>
// //                   <TableCell className="whitespace-nowrap">
// //                     <div className="flex items-center gap-2">
// //                       <Avatar className="h-6 w-6">
// //                         <AvatarFallback>
// //                           {property.agent
// //                             .split(" ")
// //                             .map((n) => n[0])
// //                             .join("")}
// //                         </AvatarFallback>
// //                       </Avatar>
// //                       {property.agent}
// //                     </div>
// //                   </TableCell>
// //                   <TableCell>{property.dateGraded}</TableCell>
// //                   <TableCell className="text-right">
// //                     <DropdownMenu>
// //                       <DropdownMenuTrigger asChild>
// //                         <Button variant="ghost" size="icon">
// //                           <MoreHorizontal className="h-4 w-4" />
// //                           <span className="sr-only">Open menu</span>
// //                         </Button>
// //                       </DropdownMenuTrigger>
// //                       <DropdownMenuContent align="end">
// //                         <DropdownMenuItem>View Property</DropdownMenuItem>
// //                         <DropdownMenuItem>
// //                           <Edit className="h-4 w-4 mr-2" />
// //                           Change Grade
// //                         </DropdownMenuItem>
// //                         <DropdownMenuItem className="text-red-600">
// //                           Remove Grade
// //                         </DropdownMenuItem>
// //                       </DropdownMenuContent>
// //                     </DropdownMenu>
// //                   </TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </div>
// //       )}

// //       <div className="flex items-center justify-between">
// //         {view === "grades" ? (
// //           <p className="text-sm text-slate-500">Showing all 4 grades</p>
// //         ) : (
// //           <p className="text-sm text-slate-500">Showing 5 of 20 graded properties</p>
// //         )}
// //         {view === "properties" && (
// //           <div className="flex items-center gap-1">
// //             <Button variant="outline" size="icon" disabled>
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="24"
// //                 height="24"
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 strokeWidth="2"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 className="h-4 w-4"
// //               >
// //                 <path d="m15 18-6-6 6-6" />
// //               </svg>
// //               <span className="sr-only">Previous page</span>
// //             </Button>
// //             <Button variant="outline" size="sm">
// //               1
// //             </Button>
// //             <Button variant="ghost" size="sm">
// //               2
// //             </Button>
// //             <Button variant="outline" size="icon">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="24"
// //                 height="24"
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 strokeWidth="2"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 className="h-4 w-4"
// //               >
// //                 <path d="m9 18 6-6-6-6" />
// //               </svg>
// //               <span className="sr-only">Next page</span>
// //             </Button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default GradesPage;



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
import { useNavigate } from "react-router-dom";
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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Award, Check, Edit, MoreHorizontal, Plus, Search, Star } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import gradeService, { Grade } from "@/services/gradeService";
import { AxiosError } from "axios";

// Static property grades data (unchanged)
const propertyGrades = [
  {
    id: 1,
    property: "Luxury Villa in Beverly Hills",
    address: "123 Palm Avenue, Beverly Hills, CA",
    grade: "Premium",
    price: "$2,450,000",
    agent: "Jennifer Adams",
    dateGraded: "Jan 15, 2024",
  },
  {
    id: 2,
    property: "Downtown Apartment",
    address: "456 Main Street, New York, NY",
    grade: "Standard Plus",
    price: "$950,000",
    agent: "Michael Rodriguez",
    dateGraded: "Feb 5, 2024",
  },
  {
    id: 3,
    property: "Beachfront Condo",
    address: "321 Ocean Drive, Miami, FL",
    grade: "Premium",
    price: "$1,200,000",
    agent: "Sarah Johnson",
    dateGraded: "Feb 18, 2024",
  },
  {
    id: 4,
    property: "Suburban House",
    address: "789 Oak Street, Austin, TX",
    grade: "Standard",
    price: "$420,000",
    agent: "David Chen",
    dateGraded: "Mar 1, 2024",
  },
  {
    id: 5,
    property: "Mountain Cabin",
    address: "555 Pine Trail, Aspen, CO",
    grade: "Standard Plus",
    price: "$650,000",
    agent: "Lisa Thompson",
    dateGraded: "Mar 10, 2024",
  },
];

export const GradesPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [view, setView] = useState<"grades" | "properties">("grades");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentGrade, setCurrentGrade] = useState<Grade | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    min_sales: 0,
    max_sales: null as number | null,
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Fetch grades
  const { data: grades = [], isLoading, error } = useQuery<Grade[]>({
    queryKey: ['grades'],
    queryFn: gradeService.getAllGrades,
    retry: 3,
    retryDelay: 1000,
  });

  // Create grade
  const createMutation = useMutation({
    mutationFn: (data: Partial<Grade>) => gradeService.createGrade(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['grades'] });
      toast({
        title: "Grade Created",
        description: "The grade has been created successfully",
      });
      setIsDialogOpen(false);
      resetForm();
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || error.message;
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  // Update grade
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Grade> }) =>
      gradeService.updateGrade(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['grades'] });
      toast({
        title: "Grade Updated",
        description: "The grade has been updated successfully",
      });
      setIsEditDialogOpen(false);
      setCurrentGrade(null);
      resetForm();
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || error.message;
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  // Delete grade
  const deleteMutation = useMutation({
    mutationFn: (id: number) => gradeService.deleteGrade(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['grades'] });
      toast({
        title: "Grade Deleted",
        description: "The grade has been deleted successfully",
      });
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || error.message;
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: id === 'min_sales' || id === 'max_sales' 
        ? (value === "" ? (id === 'max_sales' ? null : 0) : Number(value))
        : value,
    });
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
      updateMutation.mutate({ id: currentGrade.id, data: formData });
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this grade?")) {
      deleteMutation.mutate(id);
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

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      min_sales: 0,
      max_sales: null,
    });
  };

  // Render grade badge
  const renderGradeBadge = (gradeName: string) => {
    switch (gradeName.toLowerCase()) {
      case "premium":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-600" />
            {gradeName}
          </Badge>
        );
      case "standard plus":
        return (
          <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200 flex items-center gap-1">
            <Star className="h-3 w-3 fill-slate-500" />
            {gradeName}
          </Badge>
        );
      case "standard":
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-600" />
            {gradeName}
          </Badge>
        );
      case "economy":
        return <Badge>{gradeName}</Badge>;
      default:
        return <Badge>{gradeName}</Badge>;
    }
  };

  // Filter grades and properties
  const filteredGrades = grades.filter(
    (grade) =>
      grade.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (grade.description && grade.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  const filteredProperties = propertyGrades.filter(
    (property) =>
      property.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.grade.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-red-600">Error loading grades: {(error as Error).message}</p>
        <Button
          onClick={() => {
            if ((error as Error).message.includes("token")) {
              localStorage.removeItem("token");
              navigate("/login");
            } else {
              queryClient.invalidateQueries({ queryKey: ['grades'] });
            }
          }}
        >
          {(error as Error).message.includes("token") ? "Log In" : "Retry"}
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
        <div className="flex flex-wrap gap-2">
          {view === "grades" ? (
            <>
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
              <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit Grade</DialogTitle>
                    <DialogDescription>Update the grade details.</DialogDescription>
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
            </>
          ) : (
            <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Award className="h-4 w-4" />
                  <span>Assign Grade</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Assign Property Grade</DialogTitle>
                  <DialogDescription>
                    Assign a grade to a property based on its characteristics.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="property">Property</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select property" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="villa">Luxury Villa in Beverly Hills</SelectItem>
                        <SelectItem value="apartment">Downtown Apartment</SelectItem>
                        <SelectItem value="condo">Beachfront Condo</SelectItem>
                        <SelectItem value="house">Suburban House</SelectItem>
                        <SelectItem value="cabin">Mountain Cabin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="grade">Grade</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        {grades.map((grade) => (
                          <SelectItem key={grade.id} value={grade.name}>
                            {grade.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="notes">Notes (Optional)</Label>
                    <textarea
                      id="notes"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Any additional notes about this grading"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAssignDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsAssignDialogOpen(false)}>Assign Grade</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
          <div className="flex items-center p-1 border rounded-md">
            <Button
              variant={view === "grades" ? "default" : "ghost"}
              size="sm"
              onClick={() => setView("grades")}
            >
              Grade Definitions
            </Button>
            <Button
              variant={view === "properties" ? "default" : "ghost"}
              size="sm"
              onClick={() => setView("properties")}
            >
              Properties
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input
            type="search"
            placeholder={view === "grades" ? "Search grades..." : "Search properties..."}
            className="pl-8 w-full sm:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {view === "properties" && (
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filter by grade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Grades</SelectItem>
                {grades.map((grade) => (
                  <SelectItem key={grade.id} value={grade.name}>
                    {grade.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      {view === "grades" ? (
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
                    <TableCell>{grade.description || '-'}</TableCell>
                    <TableCell>{grade.min_sales.toLocaleString()}</TableCell>
                    <TableCell>{grade.max_sales ? grade.max_sales.toLocaleString() : 'No limit'}</TableCell>
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
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead>Date Graded</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProperties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell className="font-medium">{property.property}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{property.address}</TableCell>
                  <TableCell>{renderGradeBadge(property.grade)}</TableCell>
                  <TableCell>{property.price}</TableCell>
                  <TableCell className="whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>
                          {property.agent
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {property.agent}
                    </div>
                  </TableCell>
                  <TableCell>{property.dateGraded}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Property</DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Change Grade
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Remove Grade
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <div className="flex items-center justify-between">
        {view === "grades" ? (
          <p className="text-sm text-slate-500">
            Showing {filteredGrades.length} of {grades.length} grades
          </p>
        ) : (
          <p className="text-sm text-slate-500">
            Showing {filteredProperties.length} of {propertyGrades.length} graded properties
          </p>
        )}
        {view === "properties" && (
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
            <Button variant="ghost" size="sm">2</Button>
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
        )}
      </div>
    </div>
  );
};

export default GradesPage;