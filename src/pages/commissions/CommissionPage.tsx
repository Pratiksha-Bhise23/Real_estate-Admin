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
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { MoreHorizontal, Plus, Search, Tag } from "lucide-react";

// // Sample commission data
// const commissions = [
//   {
//     id: 1,
//     agent: "Jennifer Adams",
//     property: "Luxury Villa, Beverly Hills",
//     saleAmount: "$2,450,000",
//     commissionRate: "2.5%",
//     commissionAmount: "$61,250",
//     status: "Paid",
//     date: "Jan 15, 2023",
//   },
//   {
//     id: 2,
//     agent: "Michael Rodriguez",
//     property: "Downtown Apartment, New York",
//     saleAmount: "$950,000",
//     commissionRate: "2.8%",
//     commissionAmount: "$26,600",
//     status: "Pending",
//     date: "Feb 22, 2023",
//   },
//   {
//     id: 3,
//     agent: "Sarah Johnson",
//     property: "Beachfront Condo, Miami",
//     saleAmount: "$1,200,000",
//     commissionRate: "2.5%",
//     commissionAmount: "$30,000",
//     status: "Paid",
//     date: "Mar 10, 2023",
//   },
//   {
//     id: 4,
//     agent: "David Chen",
//     property: "Suburban House, Austin",
//     saleAmount: "$780,000",
//     commissionRate: "3.0%",
//     commissionAmount: "$23,400",
//     status: "Processing",
//     date: "Apr 5, 2023",
//   },
//   {
//     id: 5,
//     agent: "Lisa Thompson",
//     property: "Mountain Cabin, Colorado",
//     saleAmount: "$650,000",
//     commissionRate: "2.5%",
//     commissionAmount: "$16,250",
//     status: "Pending",
//     date: "May 18, 2023",
//   },
// ];

// export const CommissionPage = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const renderStatusBadge = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "paid":
//         return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{status}</Badge>;
//       case "pending":
//         return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">{status}</Badge>;
//       case "processing":
//         return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{status}</Badge>;
//       default:
//         return <Badge>{status}</Badge>;
//     }
//   };

//   // Calculate total stats
//   const totalCommission = commissions.reduce(
//     (sum, commission) => sum + parseFloat(commission.commissionAmount.replace(/[^0-9.-]+/g, "")),
//     0
//   );
  
//   const pendingCommission = commissions
//     .filter(commission => commission.status.toLowerCase() === "pending")
//     .reduce((sum, commission) => sum + parseFloat(commission.commissionAmount.replace(/[^0-9.-]+/g, "")), 0);
  
//   const paidCommission = commissions
//     .filter(commission => commission.status.toLowerCase() === "paid")
//     .reduce((sum, commission) => sum + parseFloat(commission.commissionAmount.replace(/[^0-9.-]+/g, "")), 0);

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight">Commission Management</h1>
//           <p className="text-slate-500">Track and manage agent commissions</p>
//         </div>
//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="gap-2">
//               <Plus className="h-4 w-4" />
//               <span>Add Commission</span>
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader>
//               <DialogTitle>Add New Commission</DialogTitle>
//               <DialogDescription>
//                 Enter commission details for a completed sale.
//               </DialogDescription>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="agent" className="text-right text-sm">
//                   Agent
//                 </label>
//                 <Select>
//                   <SelectTrigger className="col-span-3">
//                     <SelectValue placeholder="Select agent" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="jennifer">Jennifer Adams</SelectItem>
//                     <SelectItem value="michael">Michael Rodriguez</SelectItem>
//                     <SelectItem value="sarah">Sarah Johnson</SelectItem>
//                     <SelectItem value="david">David Chen</SelectItem>
//                     <SelectItem value="lisa">Lisa Thompson</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="property" className="text-right text-sm">
//                   Property
//                 </label>
//                 <Select>
//                   <SelectTrigger className="col-span-3">
//                     <SelectValue placeholder="Select property" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="villa">Luxury Villa, Beverly Hills</SelectItem>
//                     <SelectItem value="apartment">Downtown Apartment, New York</SelectItem>
//                     <SelectItem value="condo">Beachfront Condo, Miami</SelectItem>
//                     <SelectItem value="house">Suburban House, Austin</SelectItem>
//                     <SelectItem value="cabin">Mountain Cabin, Colorado</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="saleAmount" className="text-right text-sm">
//                   Sale Amount
//                 </label>
//                 <Input
//                   id="saleAmount"
//                   placeholder="e.g. $500,000"
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="commissionRate" className="text-right text-sm">
//                   Commission Rate
//                 </label>
//                 <Input
//                   id="commissionRate"
//                   placeholder="e.g. 2.5%"
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="status" className="text-right text-sm">
//                   Status
//                 </label>
//                 <Select defaultValue="pending">
//                   <SelectTrigger className="col-span-3">
//                     <SelectValue placeholder="Select status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="pending">Pending</SelectItem>
//                     <SelectItem value="processing">Processing</SelectItem>
//                     <SelectItem value="paid">Paid</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//             <div className="flex justify-end gap-4">
//               <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={() => setIsDialogOpen(false)}>Save Commission</Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-slate-500">Total Commission</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">${totalCommission.toLocaleString()}</div>
//             <p className="text-xs text-slate-500 mt-1">From all transactions</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-slate-500">Pending Commission</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">${pendingCommission.toLocaleString()}</div>
//             <p className="text-xs text-slate-500 mt-1">Awaiting payment</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-sm text-slate-500">Paid Commission</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">${paidCommission.toLocaleString()}</div>
//             <p className="text-xs text-slate-500 mt-1">Successfully paid</p>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-4 justify-between">
//         <div className="relative w-full sm:w-auto">
//           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
//           <Input
//             type="search"
//             placeholder="Search commissions..."
//             className="pl-8 w-full sm:w-[300px]"
//           />
//         </div>
//         <div className="flex gap-2">
//           <Select defaultValue="all">
//             <SelectTrigger className="w-[150px]">
//               <SelectValue placeholder="Filter by status" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Status</SelectItem>
//               <SelectItem value="paid">Paid</SelectItem>
//               <SelectItem value="pending">Pending</SelectItem>
//               <SelectItem value="processing">Processing</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Agent</TableHead>
//               <TableHead>Property</TableHead>
//               <TableHead>Sale Amount</TableHead>
//               <TableHead>Commission Rate</TableHead>
//               <TableHead>Commission</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Date</TableHead>
//               <TableHead className="text-right">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {commissions.map((commission) => (
//               <TableRow key={commission.id}>
//                 <TableCell className="flex items-center gap-3">
//                   <Avatar className="h-8 w-8">
//                     <AvatarFallback>
//                       {commission.agent
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")}
//                     </AvatarFallback>
//                   </Avatar>
//                   {commission.agent}
//                 </TableCell>
//                 <TableCell className="max-w-[200px] truncate">
//                   {commission.property}
//                 </TableCell>
//                 <TableCell>{commission.saleAmount}</TableCell>
//                 <TableCell>{commission.commissionRate}</TableCell>
//                 <TableCell className="font-medium">{commission.commissionAmount}</TableCell>
//                 <TableCell>{renderStatusBadge(commission.status)}</TableCell>
//                 <TableCell>{commission.date}</TableCell>
//                 <TableCell className="text-right">
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button variant="ghost" size="icon">
//                         <MoreHorizontal className="h-4 w-4" />
//                         <span className="sr-only">Open menu</span>
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                       <DropdownMenuItem>View Details</DropdownMenuItem>
//                       <DropdownMenuItem>Edit Commission</DropdownMenuItem>
//                       <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
//                       <DropdownMenuItem>Generate Invoice</DropdownMenuItem>
//                       <DropdownMenuItem className="text-red-600">
//                         Delete Record
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
//         <p className="text-sm text-slate-500">Showing 5 of 23 commissions</p>
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
//           <Button variant="ghost" size="sm">
//             2
//           </Button>
//           <Button variant="ghost" size="sm">
//             3
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

// export default CommissionPage;



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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontal, Plus, Search } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import commissionService, { Sale } from "@/services/commissionService";
import { AxiosError } from "axios";

interface ExtendedSale extends Sale {
  formatted_date: string;
}

export const CommissionPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentSale, setCurrentSale] = useState<ExtendedSale | null>(null);
  const [formData, setFormData] = useState({
    agent_id: "",
    property_id: "",
    sale_amount: "",
    status: "Pending",
    sale_date: "",
  });

  const queryClient = useQueryClient();

  // Query to fetch sales
  const { data: sales = [], isLoading, error } = useQuery({
    queryKey: ["sales"],
    queryFn: async () => {
      try {
        const response = await commissionService.getAllSales();
        return response.map((sale: Sale) => ({
          ...sale,
          formatted_date: new Date(sale.sale_date).toLocaleDateString("en-US", {
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

  // Mutation for creating a sale
  const createMutation = useMutation({
    mutationFn: (data: { agent_id: number; property_id: number; sale_amount: number; status: string; sale_date: string }) =>
      commissionService.createSale(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sales"] });
      toast({
        title: "Commission Created",
        description: "The commission has been created successfully",
      });
      setIsDialogOpen(false);
      resetForm();
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || error.message || "Failed to create commission";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  // Mutation for updating a sale
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Sale> }) =>
      commissionService.updateSale(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sales"] });
      toast({
        title: "Commission Updated",
        description: "The commission has been updated successfully",
      });
      setIsEditDialogOpen(false);
      setCurrentSale(null);
      resetForm();
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || error.message || "Failed to update commission";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  // Mutation for deleting a sale
  const deleteMutation = useMutation({
    mutationFn: (id: number) => commissionService.deleteSale(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sales"] });
      toast({
        title: "Commission Deleted",
        description: "The commission has been deleted successfully",
      });
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message = error.response?.data?.message || error.message || "Failed to delete commission";
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agent_id || !formData.property_id || !formData.sale_amount) {
      toast({
        title: "Error",
        description: "Agent, Property, and Sale Amount are required",
        variant: "destructive",
      });
      return;
    }
    createMutation.mutate({
      agent_id: Number(formData.agent_id),
      property_id: Number(formData.property_id),
      sale_amount: Number(formData.sale_amount.replace(/[^0-9.]/g, "")),
      status: formData.status as "Pending" | "Processing" | "Paid",
      sale_date: formData.sale_date || new Date().toISOString().split("T")[0],
    });
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agent_id || !formData.property_id || !formData.sale_amount) {
      toast({
        title: "Error",
        description: "Agent, Property, and Sale Amount are required",
        variant: "destructive",
      });
      return;
    }
    if (currentSale) {
      updateMutation.mutate({
        id: currentSale.id,
        data: {
          agent_id: Number(formData.agent_id),
          property_id: Number(formData.property_id),
          sale_amount: Number(formData.sale_amount.replace(/[^0-9.]/g, "")),
          status: formData.status as "Pending" | "Processing" | "Paid",
          sale_date: formData.sale_date,
        },
      });
    }
  };

  const openEditDialog = (sale: ExtendedSale) => {
    setCurrentSale(sale);
    setFormData({
      agent_id: sale.agent_id.toString(),
      property_id: sale.property_id.toString(),
      sale_amount: sale.sale_amount.toString(),
      status: sale.status,
      sale_date: sale.sale_date,
    });
    setIsEditDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this commission?")) {
      deleteMutation.mutate(id);
    }
  };

  const resetForm = () => {
    setFormData({
      agent_id: "",
      property_id: "",
      sale_amount: "",
      status: "Pending",
      sale_date: "",
    });
  };

  const renderStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{status}</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">{status}</Badge>;
      case "processing":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Calculate total stats
  const totalCommission = sales.reduce(
    (sum, sale) => sum + sale.commission_amount,
    0
  );
  const pendingCommission = sales
    .filter((sale) => sale.status.toLowerCase() === "pending")
    .reduce((sum, sale) => sum + sale.commission_amount, 0);
  const paidCommission = sales
    .filter((sale) => sale.status.toLowerCase() === "paid")
    .reduce((sum, sale) => sum + sale.commission_amount, 0);

  // Filter sales based on search query and status
  const filteredSales = sales.filter(
    (sale: ExtendedSale) =>
      (sale.agent_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sale.property_name.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (filterStatus === "all" || sale.status.toLowerCase() === filterStatus.toLowerCase())
  );

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-red-600">Error loading commissions: {(error as Error).message}</p>
        <Button
          onClick={() => queryClient.invalidateQueries({ queryKey: ["sales"] })}
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
          <h1 className="text-2xl font-bold tracking-tight">Commission Management</h1>
          <p className="text-slate-500">Track and manage agent commissions</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Commission</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Commission</DialogTitle>
              <DialogDescription>
                Enter commission details for a completed sale.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="agent_id" className="text-right text-sm">
                    Agent
                  </label>
                  <Select
                    value={formData.agent_id}
                    onValueChange={(value) => handleSelectChange("agent_id", value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select agent" />
                    </SelectTrigger>
                    <SelectContent>
                      {sales
                        .reduce((acc: { id: number; name: string }[], sale) => {
                          if (!acc.some((a) => a.id === sale.agent_id)) {
                            acc.push({ id: sale.agent_id, name: sale.agent_name });
                          }
                          return acc;
                        }, [])
                        .map((agent) => (
                          <SelectItem key={agent.id} value={agent.id.toString()}>
                            {agent.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="property_id" className="text-right text-sm">
                    Property
                  </label>
                  <Select
                    value={formData.property_id}
                    onValueChange={(value) => handleSelectChange("property_id", value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select property" />
                    </SelectTrigger>
                    <SelectContent>
                      {sales
                        .reduce((acc: { id: number; name: string }[], sale) => {
                          if (!acc.some((p) => p.id === sale.property_id)) {
                            acc.push({ id: sale.property_id, name: sale.property_name });
                          }
                          return acc;
                        }, [])
                        .map((property) => (
                          <SelectItem key={property.id} value={property.id.toString()}>
                            {property.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="sale_amount" className="text-right text-sm">
                    Sale Amount
                  </label>
                  <Input
                    id="sale_amount"
                    placeholder="e.g. 500000"
                    className="col-span-3"
                    value={formData.sale_amount}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="status" className="text-right text-sm">
                    Status
                  </label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => handleSelectChange("status", value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Processing">Processing</SelectItem>
                      <SelectItem value="Paid">Paid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="sale_date" className="text-right text-sm">
                    Sale Date
                  </label>
                  <Input
                    id="sale_date"
                    type="date"
                    className="col-span-3"
                    value={formData.sale_date}
                    onChange={handleInputChange}
                    required
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
                  {createMutation.isPending ? "Saving..." : "Save Commission"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Edit Commission Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Commission</DialogTitle>
              <DialogDescription>
                Update the commission details.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleUpdateSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="agent_id" className="text-right text-sm">
                    Agent
                  </label>
                  <Select
                    value={formData.agent_id}
                    onValueChange={(value) => handleSelectChange("agent_id", value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select agent" />
                    </SelectTrigger>
                    <SelectContent>
                      {sales
                        .reduce((acc: { id: number; name: string }[], sale) => {
                          if (!acc.some((a) => a.id === sale.agent_id)) {
                            acc.push({ id: sale.agent_id, name: sale.agent_name });
                          }
                          return acc;
                        }, [])
                        .map((agent) => (
                          <SelectItem key={agent.id} value={agent.id.toString()}>
                            {agent.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="property_id" className="text-right text-sm">
                    Property
                  </label>
                  <Select
                    value={formData.property_id}
                    onValueChange={(value) => handleSelectChange("property_id", value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select property" />
                    </SelectTrigger>
                    <SelectContent>
                      {sales
                        .reduce((acc: { id: number; name: string }[], sale) => {
                          if (!acc.some((p) => p.id === sale.property_id)) {
                            acc.push({ id: sale.property_id, name: sale.property_name });
                          }
                          return acc;
                        }, [])
                        .map((property) => (
                          <SelectItem key={property.id} value={property.id.toString()}>
                            {property.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="sale_amount" className="text-right text-sm">
                    Sale Amount
                  </label>
                  <Input
                    id="sale_amount"
                    placeholder="e.g. 500000"
                    className="col-span-3"
                    value={formData.sale_amount}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="status" className="text-right text-sm">
                    Status
                  </label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => handleSelectChange("status", value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Processing">Processing</SelectItem>
                      <SelectItem value="Paid">Paid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="sale_date" className="text-right text-sm">
                    Sale Date
                  </label>
                  <Input
                    id="sale_date"
                    type="date"
                    className="col-span-3"
                    value={formData.sale_date}
                    onChange={handleInputChange}
                    required
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
                  {updateMutation.isPending ? "Updating..." : "Update Commission"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-500">Total Commission</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalCommission.toLocaleString()}</div>
            <p className="text-xs text-slate-500 mt-1">From all transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-500">Pending Commission</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${pendingCommission.toLocaleString()}</div>
            <p className="text-xs text-slate-500 mt-1">Awaiting payment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-500">Paid Commission</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${paidCommission.toLocaleString()}</div>
            <p className="text-xs text-slate-500 mt-1">Successfully paid</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input
            type="search"
            placeholder="Search commissions..."
            className="pl-8 w-full sm:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select
            value={filterStatus}
            onValueChange={setFilterStatus}
            defaultValue="all"
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Agent</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Sale Amount</TableHead>
              <TableHead>Commission Rate</TableHead>
              <TableHead>Commission</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8">
                  Loading commissions...
                </TableCell>
              </TableRow>
            ) : filteredSales.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8">
                  No commissions found
                </TableCell>
              </TableRow>
            ) : (
              filteredSales.map((sale: ExtendedSale) => (
                <TableRow key={sale.id}>
                  <TableCell className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {sale.agent_name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {sale.agent_name}
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {sale.property_name}
                  </TableCell>
                  <TableCell>${sale.sale_amount.toLocaleString()}</TableCell>
                  <TableCell>{sale.commission_percentage}%</TableCell>
                  <TableCell className="font-medium">
                    ${sale.commission_amount.toLocaleString()}
                  </TableCell>
                  <TableCell>{renderStatusBadge(sale.status)}</TableCell>
                  <TableCell>{sale.formatted_date}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEditDialog(sale)}>
                          Edit Commission
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-600"
                          onClick={() => handleDelete(sale.id)}
                        >
                          Delete Record
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
          Showing {filteredSales.length} of {sales.length} commissions
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

export default CommissionPage;
