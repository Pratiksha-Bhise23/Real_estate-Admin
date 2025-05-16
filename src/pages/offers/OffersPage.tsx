
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
// import { Badge } from "@/components/ui/badge";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Activity, MoreHorizontal, Plus, Search } from "lucide-react";

// // Sample offers data
// const offers = [
//   {
//     id: 1,
//     property: "Luxury Villa in Beverly Hills",
//     buyer: "John Smithson",
//     agent: "Jennifer Adams",
//     amount: "$2,350,000",
//     offerDate: "Mar 15, 2024",
//     expiryDate: "Mar 30, 2024",
//     status: "Pending",
//     askingPrice: "$2,450,000",
//   },
//   {
//     id: 2,
//     property: "Downtown Apartment",
//     buyer: "Emily Johnson",
//     agent: "Michael Rodriguez",
//     amount: "$920,000",
//     offerDate: "Mar 12, 2024",
//     expiryDate: "Mar 26, 2024",
//     status: "Countered",
//     askingPrice: "$950,000",
//   },
//   {
//     id: 3,
//     property: "Beachfront Condo",
//     buyer: "Robert Williams",
//     agent: "Sarah Johnson",
//     amount: "$1,180,000",
//     offerDate: "Mar 10, 2024",
//     expiryDate: "Mar 24, 2024",
//     status: "Accepted",
//     askingPrice: "$1,200,000",
//   },
//   {
//     id: 4,
//     property: "Suburban House",
//     buyer: "Maria Garcia",
//     agent: "David Chen",
//     amount: "$745,000",
//     offerDate: "Mar 8, 2024",
//     expiryDate: "Mar 22, 2024",
//     status: "Rejected",
//     askingPrice: "$780,000",
//   },
//   {
//     id: 5,
//     property: "Mountain Cabin",
//     buyer: "Thomas Brown",
//     agent: "Lisa Thompson",
//     amount: "$655,000",
//     offerDate: "Mar 5, 2024",
//     expiryDate: "Mar 20, 2024",
//     status: "Pending",
//     askingPrice: "$650,000",
//   },
// ];

// export const OffersPage = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const renderStatusBadge = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "pending":
//         return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">{status}</Badge>;
//       case "accepted":
//         return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{status}</Badge>;
//       case "rejected":
//         return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">{status}</Badge>;
//       case "countered":
//         return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{status}</Badge>;
//       case "withdrawn":
//         return <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200">{status}</Badge>;
//       default:
//         return <Badge>{status}</Badge>;
//     }
//   };

//   // Calculate if offer is above or below asking price
//   const calculatePriceDiff = (offerAmount: string, askingPrice: string) => {
//     const offer = parseFloat(offerAmount.replace(/[^0-9.-]+/g, ""));
//     const asking = parseFloat(askingPrice.replace(/[^0-9.-]+/g, ""));
//     const diff = ((offer - asking) / asking) * 100;
//     return diff.toFixed(1);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight">Offers</h1>
//           <p className="text-slate-500">Manage property offers and negotiations</p>
//         </div>
//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="gap-2">
//               <Plus className="h-4 w-4" />
//               <span>Add Offer</span>
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[500px]">
//             <DialogHeader>
//               <DialogTitle>Record New Offer</DialogTitle>
//               <DialogDescription>
//                 Enter the details of the offer received for a property.
//               </DialogDescription>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="property" className="text-right text-sm">
//                   Property
//                 </label>
//                 <Select>
//                   <SelectTrigger className="col-span-3">
//                     <SelectValue placeholder="Select property" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="villa">Luxury Villa in Beverly Hills</SelectItem>
//                     <SelectItem value="apartment">Downtown Apartment</SelectItem>
//                     <SelectItem value="condo">Beachfront Condo</SelectItem>
//                     <SelectItem value="house">Suburban House</SelectItem>
//                     <SelectItem value="cabin">Mountain Cabin</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="buyer" className="text-right text-sm">
//                   Buyer
//                 </label>
//                 <Input
//                   id="buyer"
//                   placeholder="Buyer name"
//                   className="col-span-3"
//                 />
//               </div>
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
//                 <label htmlFor="amount" className="text-right text-sm">
//                   Offer Amount
//                 </label>
//                 <Input
//                   id="amount"
//                   placeholder="e.g. $500,000"
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="expiry" className="text-right text-sm">
//                   Expiry Date
//                 </label>
//                 <Input
//                   id="expiry"
//                   type="date"
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
//                     <SelectItem value="accepted">Accepted</SelectItem>
//                     <SelectItem value="rejected">Rejected</SelectItem>
//                     <SelectItem value="countered">Countered</SelectItem>
//                     <SelectItem value="withdrawn">Withdrawn</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//             <div className="flex justify-end gap-4">
//               <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={() => setIsDialogOpen(false)}>Save Offer</Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-4 justify-between">
//         <div className="relative w-full sm:w-auto">
//           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
//           <Input
//             type="search"
//             placeholder="Search offers..."
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
//               <SelectItem value="pending">Pending</SelectItem>
//               <SelectItem value="accepted">Accepted</SelectItem>
//               <SelectItem value="rejected">Rejected</SelectItem>
//               <SelectItem value="countered">Countered</SelectItem>
//               <SelectItem value="withdrawn">Withdrawn</SelectItem>
//             </SelectContent>
//           </Select>
//           <Select defaultValue="all-time">
//             <SelectTrigger className="w-[150px]">
//               <SelectValue placeholder="Time period" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all-time">All Time</SelectItem>
//               <SelectItem value="today">Today</SelectItem>
//               <SelectItem value="this-week">This Week</SelectItem>
//               <SelectItem value="this-month">This Month</SelectItem>
//               <SelectItem value="last-month">Last Month</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Property</TableHead>
//               <TableHead>Buyer</TableHead>
//               <TableHead>Agent</TableHead>
//               <TableHead>Offer Amount</TableHead>
//               <TableHead>Asking Price</TableHead>
//               <TableHead>Offer Date</TableHead>
//               <TableHead>Expiry Date</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead className="text-right">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {offers.map((offer) => {
//               const priceDiff = calculatePriceDiff(offer.amount, offer.askingPrice);
//               const isAboveAsking = parseFloat(priceDiff) >= 0;
              
//               return (
//                 <TableRow key={offer.id}>
//                   <TableCell className="max-w-[200px] truncate">
//                     {offer.property}
//                   </TableCell>
//                   <TableCell>{offer.buyer}</TableCell>
//                   <TableCell className="whitespace-nowrap">{offer.agent}</TableCell>
//                   <TableCell className="font-medium">{offer.amount}</TableCell>
//                   <TableCell>
//                     <div className="flex flex-col">
//                       <span>{offer.askingPrice}</span>
//                       <span
//                         className={`text-xs ${
//                           isAboveAsking ? "text-green-600" : "text-red-600"
//                         }`}
//                       >
//                         {isAboveAsking ? "+" : ""}
//                         {priceDiff}%
//                       </span>
//                     </div>
//                   </TableCell>
//                   <TableCell className="whitespace-nowrap">{offer.offerDate}</TableCell>
//                   <TableCell className="whitespace-nowrap">{offer.expiryDate}</TableCell>
//                   <TableCell>{renderStatusBadge(offer.status)}</TableCell>
//                   <TableCell className="text-right">
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="icon">
//                           <MoreHorizontal className="h-4 w-4" />
//                           <span className="sr-only">Open menu</span>
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem>View Details</DropdownMenuItem>
//                         <DropdownMenuItem>Counter Offer</DropdownMenuItem>
//                         <DropdownMenuItem>Accept Offer</DropdownMenuItem>
//                         <DropdownMenuItem>Reject Offer</DropdownMenuItem>
//                         <DropdownMenuItem className="text-red-600">
//                           Delete
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </div>

//       <div className="flex items-center justify-between">
//         <p className="text-sm text-slate-500">Showing 5 of 15 offers</p>
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

// export default OffersPage;


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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MoreHorizontal, Plus, Search } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import offerService, { Offer } from "@/services/offerService";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const OffersPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentOffer, setCurrentOffer] = useState<Offer | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    min_sales: null as number | null,
    rank_required: null as string | null,
  });

  const queryClient = useQueryClient();
  
  // Query to fetch offers
  const { data: offers = [], isLoading, error } = useQuery({
    queryKey: ['offers'],
    queryFn: offerService.getAllOffers
  });

  // Mutation for creating an offer
  const createMutation = useMutation({
    mutationFn: (data: Partial<Offer>) => offerService.createOffer(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['offers'] });
      toast({
        title: "Offer Created",
        description: "The offer has been created successfully",
      });
      setIsDialogOpen(false);
      resetForm();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create offer",
        variant: "destructive",
      });
    }
  });

  // Mutation for updating an offer
  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Offer> }) => 
      offerService.updateOffer(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['offers'] });
      toast({
        title: "Offer Updated",
        description: "The offer has been updated successfully",
      });
      setIsEditDialogOpen(false);
      setCurrentOffer(null);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update offer",
        variant: "destructive",
      });
    }
  });
  
  // Mutation for deleting an offer
  const deleteMutation = useMutation({
    mutationFn: (id: number) => offerService.deleteOffer(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['offers'] });
      toast({
        title: "Offer Deleted",
        description: "The offer has been deleted successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete offer",
        variant: "destructive",
      });
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    if (id === 'min_sales') {
      setFormData({
        ...formData,
        [id]: value === "" ? null : Number(value),
      });
    } else if (id === 'rank_required') {
      setFormData({
        ...formData,
        [id]: value === "" ? null : value,
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData({
      ...formData,
      [field]: value === "none" ? null : value,
    });
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(formData);
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentOffer) {
      updateMutation.mutate({ 
        id: currentOffer.id, 
        data: formData 
      });
    }
  };

  const openEditDialog = (offer: Offer) => {
    setCurrentOffer(offer);
    setFormData({
      title: offer.title,
      description: offer.description || "",
      min_sales: offer.min_sales,
      rank_required: offer.rank_required,
    });
    setIsEditDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      deleteMutation.mutate(id);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      min_sales: null,
      rank_required: null,
    });
  };

  // Render status badge
  const renderStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">{status}</Badge>;
      case "accepted":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{status}</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">{status}</Badge>;
      case "countered":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">{status}</Badge>;
      case "withdrawn":
        return <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200">{status}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  // Filter offers based on search query
  const filteredOffers = offers.filter(offer => 
    offer.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (offer.description && offer.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (error) {
    return <div>Error loading offers: {(error as Error).message}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Offers</h1>
          <p className="text-slate-500">Manage special offers for agents</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Offer</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Offer</DialogTitle>
              <DialogDescription>
                Add a new special offer for agents.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Offer Title</Label>
                  <Input 
                    id="title" 
                    placeholder="Offer title" 
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe the offer" 
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="min_sales">Minimum Sales (optional)</Label>
                  <Input 
                    id="min_sales" 
                    type="number" 
                    placeholder="Minimum sales required" 
                    value={formData.min_sales === null ? "" : formData.min_sales}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="rank_required">Rank Required (optional)</Label>
                  <Select 
                    onValueChange={(value) => handleSelectChange(value, "rank_required")}
                    value={formData.rank_required || "none"}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select rank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="Bronze">Bronze</SelectItem>
                      <SelectItem value="Silver">Silver</SelectItem>
                      <SelectItem value="Gold">Gold</SelectItem>
                      <SelectItem value="Platinum">Platinum</SelectItem>
                    </SelectContent>
                  </Select>
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
                <Button 
                  type="submit"
                  disabled={createMutation.isPending}
                >
                  {createMutation.isPending ? "Creating..." : "Create Offer"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* Edit Offer Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Edit Offer</DialogTitle>
              <DialogDescription>
                Update the offer details.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleUpdateSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Offer Title</Label>
                  <Input 
                    id="title" 
                    placeholder="Offer title" 
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe the offer" 
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="min_sales">Minimum Sales (optional)</Label>
                  <Input 
                    id="min_sales" 
                    type="number" 
                    placeholder="Minimum sales required" 
                    value={formData.min_sales === null ? "" : formData.min_sales}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="rank_required">Rank Required (optional)</Label>
                  <Select 
                    onValueChange={(value) => handleSelectChange(value, "rank_required")}
                    value={formData.rank_required || "none"}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select rank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="Bronze">Bronze</SelectItem>
                      <SelectItem value="Silver">Silver</SelectItem>
                      <SelectItem value="Gold">Gold</SelectItem>
                      <SelectItem value="Platinum">Platinum</SelectItem>
                    </SelectContent>
                  </Select>
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
                <Button 
                  type="submit"
                  disabled={updateMutation.isPending}
                >
                  {updateMutation.isPending ? "Updating..." : "Update Offer"}
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
            placeholder="Search offers..."
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
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Min Sales</TableHead>
              <TableHead>Rank Required</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  Loading offers...
                </TableCell>
              </TableRow>
            ) : filteredOffers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  No offers found
                </TableCell>
              </TableRow>
            ) : (
              filteredOffers.map((offer) => (
                <TableRow key={offer.id}>
                  <TableCell className="font-medium">{offer.title}</TableCell>
                  <TableCell className="max-w-md truncate">{offer.description}</TableCell>
                  <TableCell>{offer.min_sales === null ? "None" : offer.min_sales}</TableCell>
                  <TableCell>
                    {offer.rank_required ? (
                      <Badge className="bg-blue-100 text-blue-800">{offer.rank_required}</Badge>
                    ) : (
                      "None"
                    )}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {new Date(offer.created_at).toLocaleDateString()}
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
                        <DropdownMenuItem onClick={() => openEditDialog(offer)}>
                          Edit Offer
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          className="text-red-600"
                          onClick={() => handleDelete(offer.id)}
                        >
                          Delete Offer
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
          Showing {filteredOffers.length} of {offers.length} offers
        </p>
      </div>
    </div>
  );
};

export default OffersPage;

