
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
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { MoreHorizontal, Search, UserPlus } from "lucide-react";

// // Sample agent data
// const agents = [
//   {
//     id: 1,
//     name: "Jennifer Adams",
//     email: "jennifer@realestate.com",
//     phone: "(555) 123-4567",
//     properties: 12,
//     sales: "$1.2M",
//     status: "Active",
//     joinDate: "Jan 15, 2023",
//   },
//   {
//     id: 2,
//     name: "Michael Rodriguez",
//     email: "michael@realestate.com",
//     phone: "(555) 234-5678",
//     properties: 8,
//     sales: "$950K",
//     status: "Active",
//     joinDate: "Mar 22, 2023",
//   },
//   {
//     id: 3,
//     name: "Sarah Johnson",
//     email: "sarah@realestate.com",
//     phone: "(555) 345-6789",
//     properties: 5,
//     sales: "$680K",
//     status: "Inactive",
//     joinDate: "Sep 10, 2022",
//   },
//   {
//     id: 4,
//     name: "David Chen",
//     email: "david@realestate.com",
//     phone: "(555) 456-7890",
//     properties: 15,
//     sales: "$2.1M",
//     status: "Active",
//     joinDate: "Apr 5, 2023",
//   },
//   {
//     id: 5,
//     name: "Lisa Thompson",
//     email: "lisa@realestate.com",
//     phone: "(555) 567-8901",
//     properties: 3,
//     sales: "$420K",
//     status: "Pending",
//     joinDate: "Dec 1, 2023",
//   },
// ];

// export const AgentManagement = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);

//   const renderStatusBadge = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "active":
//         return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{status}</Badge>;
//       case "inactive":
//         return <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200">{status}</Badge>;
//       case "pending":
//         return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">{status}</Badge>;
//       default:
//         return <Badge>{status}</Badge>;
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight">Agent Management</h1>
//           <p className="text-slate-500">Manage your real estate agents</p>
//         </div>
//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="space-x-2">
//               <UserPlus className="h-4 w-4" />
//               <span>Add Agent</span>
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader>
//               <DialogTitle>Add New Agent</DialogTitle>
//               <DialogDescription>
//                 Enter the details of the new agent. They will receive an email invitation.
//               </DialogDescription>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="name" className="text-right text-sm">
//                   Name
//                 </label>
//                 <Input
//                   id="name"
//                   placeholder="Full name"
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="email" className="text-right text-sm">
//                   Email
//                 </label>
//                 <Input
//                   id="email"
//                   placeholder="Email address"
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="phone" className="text-right text-sm">
//                   Phone
//                 </label>
//                 <Input
//                   id="phone"
//                   placeholder="Phone number"
//                   className="col-span-3"
//                 />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <label htmlFor="license" className="text-right text-sm">
//                   License #
//                 </label>
//                 <Input
//                   id="license"
//                   placeholder="Real estate license number"
//                   className="col-span-3"
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end gap-4">
//               <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={() => setIsDialogOpen(false)}>Add Agent</Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-4 justify-between">
//         <div className="relative w-full sm:w-auto">
//           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
//           <Input
//             type="search"
//             placeholder="Search agents..."
//             className="pl-8 w-full sm:w-[300px]"
//           />
//         </div>
//         <div className="flex gap-2">
//           <Select defaultValue="all">
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Filter by status" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Agents</SelectItem>
//               <SelectItem value="active">Active</SelectItem>
//               <SelectItem value="inactive">Inactive</SelectItem>
//               <SelectItem value="pending">Pending</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Agent</TableHead>
//               <TableHead>Contact</TableHead>
//               <TableHead>Properties</TableHead>
//               <TableHead>Sales</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Join Date</TableHead>
//               <TableHead className="text-right">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {agents.map((agent) => (
//               <TableRow key={agent.id}>
//                 <TableCell className="flex items-center gap-3">
//                   <Avatar className="h-8 w-8">
//                     <AvatarImage src="" />
//                     <AvatarFallback>
//                       {agent.name
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")}
//                     </AvatarFallback>
//                   </Avatar>
//                   {agent.name}
//                 </TableCell>
//                 <TableCell>
//                   <div className="text-sm">{agent.email}</div>
//                   <div className="text-sm text-slate-500">{agent.phone}</div>
//                 </TableCell>
//                 <TableCell>{agent.properties}</TableCell>
//                 <TableCell>{agent.sales}</TableCell>
//                 <TableCell>{renderStatusBadge(agent.status)}</TableCell>
//                 <TableCell>{agent.joinDate}</TableCell>
//                 <TableCell className="text-right">
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button variant="ghost" size="icon">
//                         <MoreHorizontal className="h-4 w-4" />
//                         <span className="sr-only">Open menu</span>
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                       <DropdownMenuItem>View Profile</DropdownMenuItem>
//                       <DropdownMenuItem>Edit Details</DropdownMenuItem>
//                       <DropdownMenuItem>View Properties</DropdownMenuItem>
//                       <DropdownMenuItem>Reset Password</DropdownMenuItem>
//                       {agent.status.toLowerCase() === "active" ? (
//                         <DropdownMenuItem>Deactivate</DropdownMenuItem>
//                       ) : (
//                         <DropdownMenuItem>Activate</DropdownMenuItem>
//                       )}
//                       <DropdownMenuItem className="text-red-600">
//                         Remove Agent
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
//         <p className="text-sm text-slate-500">Showing 5 of 18 agents</p>
//         <div className="flex items-center gap-6">
//           <div className="flex items-center gap-2">
//             <p className="text-sm text-slate-500">Rows per page:</p>
//             <Select defaultValue="10">
//               <SelectTrigger className="w-[70px]">
//                 <SelectValue placeholder="10" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="5">5</SelectItem>
//                 <SelectItem value="10">10</SelectItem>
//                 <SelectItem value="20">20</SelectItem>
//                 <SelectItem value="50">50</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//           <div className="flex items-center gap-1">
//             <Button variant="outline" size="icon" disabled>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-4 w-4"
//               >
//                 <path d="m15 18-6-6 6-6" />
//               </svg>
//               <span className="sr-only">Previous page</span>
//             </Button>
//             <Button variant="outline" size="sm">
//               1
//             </Button>
//             <Button variant="ghost" size="sm">
//               2
//             </Button>
//             <Button variant="outline" size="icon">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-4 w-4"
//               >
//                 <path d="m9 18 6-6-6-6" />
//               </svg>
//               <span className="sr-only">Next page</span>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AgentManagement;



import React, { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, Search, UserPlus, Phone, Mail, Edit, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import agentService, { Agent } from "@/services/agentService";
import { formatCurrency } from "@/lib/utils";

export const AgentManagement = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentAgent, setCurrentAgent] = useState<Partial<Agent> | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  const queryClient = useQueryClient();

  // Fetch agents data
  const { 
    data: agents = [], 
    isLoading, 
    error 
  } = useQuery({
    queryKey: ['agents'],
    queryFn: agentService.getAllAgents,
  });

  // Create agent mutation
  const createAgentMutation = useMutation({
    mutationFn: agentService.createAgent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['agents'] });
      setIsDialogOpen(false);
      toast({
        title: "Success",
        description: "Agent created successfully",
      });
      resetForm();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to create agent",
        variant: "destructive",
      });
    },
  });

  // Update agent mutation
  const updateAgentMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Agent> }) => 
      agentService.updateAgent(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['agents'] });
      setIsDialogOpen(false);
      toast({
        title: "Success",
        description: "Agent updated successfully",
      });
      resetForm();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update agent",
        variant: "destructive",
      });
    },
  });

  // Delete agent mutation
  const deleteAgentMutation = useMutation({
    mutationFn: agentService.deleteAgent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['agents'] });
      toast({
        title: "Success",
        description: "Agent deleted successfully",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to delete agent",
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setCurrentAgent(null);
    setIsEditMode(false);
  };

  const handleOpenDialog = (agent?: Agent) => {
    if (agent) {
      setCurrentAgent(agent);
      setIsEditMode(true);
    } else {
      setCurrentAgent({
        name: "",
        email: "",
        phone: "",
      });
      setIsEditMode(false);
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentAgent?.name || !currentAgent?.email) {
      toast({
        title: "Error",
        description: "Name and email are required",
        variant: "destructive",
      });
      return;
    }
    
    if (isEditMode && currentAgent.id) {
      updateAgentMutation.mutate({ 
        id: currentAgent.id, 
        data: currentAgent 
      });
    } else {
      createAgentMutation.mutate(currentAgent);
    }
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this agent?")) {
      deleteAgentMutation.mutate(id);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentAgent((prev) => prev ? { ...prev, [name]: value } : null);
  };

  const renderRankBadge = (rank: string) => {
    switch (rank.toLowerCase()) {
      case "platinum":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">{rank}</Badge>;
      case "gold":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">{rank}</Badge>;
      case "silver":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">{rank}</Badge>;
      case "bronze":
      default:
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">{rank || "Bronze"}</Badge>;
    }
  };

  // Filter agents based on search term and status
  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         agent.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    // For status filter, we'll consider agents without any sales as "inactive"
    const agentStatus = Number(agent.total_sales) > 0 ? "active" : "inactive";
    const matchesStatus = statusFilter === "all" || agentStatus === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  if (error) {
    return <div className="p-8 text-center text-red-500">Error loading agents: {(error as Error).message}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Agent Management</h1>
          <p className="text-slate-500">Manage your real estate agents</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="space-x-2" onClick={() => handleOpenDialog()}>
              <UserPlus className="h-4 w-4" />
              <span>Add Agent</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{isEditMode ? "Edit Agent" : "Add New Agent"}</DialogTitle>
              <DialogDescription>
                {isEditMode 
                  ? "Update the agent's information below."
                  : "Enter the details of the new agent. They will receive an email invitation."
                }
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right text-sm">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Full name"
                    className="col-span-3"
                    value={currentAgent?.name || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="email" className="text-right text-sm">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email address"
                    className="col-span-3"
                    value={currentAgent?.email || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="phone" className="text-right text-sm">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Phone number"
                    className="col-span-3"
                    value={currentAgent?.phone || ""}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" type="button" onClick={handleCloseDialog}>
                  Cancel
                </Button>
                <Button type="submit" disabled={createAgentMutation.isPending || updateAgentMutation.isPending}>
                  {createAgentMutation.isPending || updateAgentMutation.isPending
                    ? "Saving..."
                    : isEditMode ? "Update Agent" : "Add Agent"
                  }
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
            placeholder="Search agents..."
            className="pl-8 w-full sm:w-[300px]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Agents</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Agent Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>Rank</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10">
                  <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                  </div>
                </TableCell>
              </TableRow>
            ) : filteredAgents.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10">
                  No agents found
                </TableCell>
              </TableRow>
            ) : (
              filteredAgents.map((agent) => (
                <TableRow key={agent.id}>
                  <TableCell className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" />
                      <AvatarFallback>
                        {agent.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {agent.name}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center text-sm">
                        <Mail className="h-3 w-3 mr-1.5 text-slate-500" />
                        {agent.email}
                      </div>
                      <div className="flex items-center text-sm text-slate-500">
                        <Phone className="h-3 w-3 mr-1.5" />
                        {agent.phone || "N/A"}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{formatCurrency(Number(agent.total_sales) || 0)}</TableCell>
                  <TableCell>{renderRankBadge(agent.current_rank)}</TableCell>
                  <TableCell>
                    <Badge 
                      className={Number(agent.total_sales) > 0 
                        ? "bg-green-100 text-green-800 hover:bg-green-200" 
                        : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                      }
                    >
                      {Number(agent.total_sales) > 0 ? "Active" : "Inactive"}
                    </Badge>
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
                        <DropdownMenuItem onClick={() => handleOpenDialog(agent)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Details
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(agent.id)}>
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Agent
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
          Showing {filteredAgents.length} of {agents.length} agents
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <p className="text-sm text-slate-500">Rows per page:</p>
            <Select defaultValue="10">
              <SelectTrigger className="w-[70px]">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentManagement;