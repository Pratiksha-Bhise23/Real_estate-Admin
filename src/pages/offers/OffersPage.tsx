
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
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Activity, MoreHorizontal, Plus, Search } from "lucide-react";

// Sample offers data
const offers = [
  {
    id: 1,
    property: "Luxury Villa in Beverly Hills",
    buyer: "John Smithson",
    agent: "Jennifer Adams",
    amount: "$2,350,000",
    offerDate: "Mar 15, 2024",
    expiryDate: "Mar 30, 2024",
    status: "Pending",
    askingPrice: "$2,450,000",
  },
  {
    id: 2,
    property: "Downtown Apartment",
    buyer: "Emily Johnson",
    agent: "Michael Rodriguez",
    amount: "$920,000",
    offerDate: "Mar 12, 2024",
    expiryDate: "Mar 26, 2024",
    status: "Countered",
    askingPrice: "$950,000",
  },
  {
    id: 3,
    property: "Beachfront Condo",
    buyer: "Robert Williams",
    agent: "Sarah Johnson",
    amount: "$1,180,000",
    offerDate: "Mar 10, 2024",
    expiryDate: "Mar 24, 2024",
    status: "Accepted",
    askingPrice: "$1,200,000",
  },
  {
    id: 4,
    property: "Suburban House",
    buyer: "Maria Garcia",
    agent: "David Chen",
    amount: "$745,000",
    offerDate: "Mar 8, 2024",
    expiryDate: "Mar 22, 2024",
    status: "Rejected",
    askingPrice: "$780,000",
  },
  {
    id: 5,
    property: "Mountain Cabin",
    buyer: "Thomas Brown",
    agent: "Lisa Thompson",
    amount: "$655,000",
    offerDate: "Mar 5, 2024",
    expiryDate: "Mar 20, 2024",
    status: "Pending",
    askingPrice: "$650,000",
  },
];

export const OffersPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  // Calculate if offer is above or below asking price
  const calculatePriceDiff = (offerAmount: string, askingPrice: string) => {
    const offer = parseFloat(offerAmount.replace(/[^0-9.-]+/g, ""));
    const asking = parseFloat(askingPrice.replace(/[^0-9.-]+/g, ""));
    const diff = ((offer - asking) / asking) * 100;
    return diff.toFixed(1);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Offers</h1>
          <p className="text-slate-500">Manage property offers and negotiations</p>
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
              <DialogTitle>Record New Offer</DialogTitle>
              <DialogDescription>
                Enter the details of the offer received for a property.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="property" className="text-right text-sm">
                  Property
                </label>
                <Select>
                  <SelectTrigger className="col-span-3">
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
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="buyer" className="text-right text-sm">
                  Buyer
                </label>
                <Input
                  id="buyer"
                  placeholder="Buyer name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="agent" className="text-right text-sm">
                  Agent
                </label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select agent" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jennifer">Jennifer Adams</SelectItem>
                    <SelectItem value="michael">Michael Rodriguez</SelectItem>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="david">David Chen</SelectItem>
                    <SelectItem value="lisa">Lisa Thompson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="amount" className="text-right text-sm">
                  Offer Amount
                </label>
                <Input
                  id="amount"
                  placeholder="e.g. $500,000"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="expiry" className="text-right text-sm">
                  Expiry Date
                </label>
                <Input
                  id="expiry"
                  type="date"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="status" className="text-right text-sm">
                  Status
                </label>
                <Select defaultValue="pending">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="accepted">Accepted</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="countered">Countered</SelectItem>
                    <SelectItem value="withdrawn">Withdrawn</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsDialogOpen(false)}>Save Offer</Button>
            </div>
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
          />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="countered">Countered</SelectItem>
              <SelectItem value="withdrawn">Withdrawn</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-time">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-time">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Buyer</TableHead>
              <TableHead>Agent</TableHead>
              <TableHead>Offer Amount</TableHead>
              <TableHead>Asking Price</TableHead>
              <TableHead>Offer Date</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {offers.map((offer) => {
              const priceDiff = calculatePriceDiff(offer.amount, offer.askingPrice);
              const isAboveAsking = parseFloat(priceDiff) >= 0;
              
              return (
                <TableRow key={offer.id}>
                  <TableCell className="max-w-[200px] truncate">
                    {offer.property}
                  </TableCell>
                  <TableCell>{offer.buyer}</TableCell>
                  <TableCell className="whitespace-nowrap">{offer.agent}</TableCell>
                  <TableCell className="font-medium">{offer.amount}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{offer.askingPrice}</span>
                      <span
                        className={`text-xs ${
                          isAboveAsking ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {isAboveAsking ? "+" : ""}
                        {priceDiff}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">{offer.offerDate}</TableCell>
                  <TableCell className="whitespace-nowrap">{offer.expiryDate}</TableCell>
                  <TableCell>{renderStatusBadge(offer.status)}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Counter Offer</DropdownMenuItem>
                        <DropdownMenuItem>Accept Offer</DropdownMenuItem>
                        <DropdownMenuItem>Reject Offer</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">Showing 5 of 15 offers</p>
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
          <Button variant="ghost" size="sm">
            2
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

export default OffersPage;
