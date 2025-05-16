// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
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
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Building, Grid, List, MoreHorizontal, Plus, Search } from "lucide-react";

// // Sample property data
// const properties = [
//   {
//     id: 1,
//     title: "Luxury Villa in Beverly Hills",
//     type: "Residential",
//     status: "For Sale",
//     price: "$2,450,000",
//     location: "123 Palm Avenue, Beverly Hills, CA",
//     bedrooms: 5,
//     bathrooms: 6,
//     area: "4,500 sq ft",
//     agent: "Jennifer Adams",
//     features: ["Swimming Pool", "Home Theater", "Wine Cellar", "Smart Home"],
//     imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGhvdXNlfGVufDB8fDB8fHww",
//     createdDate: "Dec 10, 2023",
//   },
//   {
//     id: 2,
//     title: "Downtown Apartment",
//     type: "Residential",
//     status: "For Rent",
//     price: "$3,500/mo",
//     location: "456 Main Street, New York, NY",
//     bedrooms: 2,
//     bathrooms: 2,
//     area: "1,200 sq ft",
//     agent: "Michael Rodriguez",
//     features: ["Doorman", "Gym", "Roof Deck", "Laundry"],
//     imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww",
//     createdDate: "Jan 5, 2024",
//   },
//   {
//     id: 3,
//     title: "Commercial Office Space",
//     type: "Commercial",
//     status: "For Lease",
//     price: "$25/sq ft/yr",
//     location: "789 Business Park, Chicago, IL",
//     bedrooms: null,
//     bathrooms: 3,
//     area: "5,000 sq ft",
//     agent: "David Chen",
//     features: ["Open Floor Plan", "Conference Rooms", "Kitchen", "Parking"],
//     imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMGJ1aWxkaW5nfGVufDB8fDB8fHww",
//     createdDate: "Feb 15, 2024",
//   },
//   {
//     id: 4,
//     title: "Beachfront Condo",
//     type: "Residential",
//     status: "For Sale",
//     price: "$950,000",
//     location: "321 Ocean Drive, Miami, FL",
//     bedrooms: 3,
//     bathrooms: 2,
//     area: "1,800 sq ft",
//     agent: "Sarah Johnson",
//     features: ["Ocean View", "Balcony", "Pool", "Fitness Center"],
//     imageUrl: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwY29uZG98ZW58MHx8MHx8fDA%3D",
//     createdDate: "Mar 1, 2024",
//   },
//   {
//     id: 5,
//     title: "Mountain Cabin",
//     type: "Residential",
//     status: "For Sale",
//     price: "$650,000",
//     location: "555 Pine Trail, Aspen, CO",
//     bedrooms: 4,
//     bathrooms: 3,
//     area: "2,200 sq ft",
//     agent: "Lisa Thompson",
//     features: ["Fireplace", "Hot Tub", "Mountain View", "Hiking Trails"],
//     imageUrl: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBob21lfGVufDB8fDB8fHww",
//     createdDate: "Mar 10, 2024",
//   },
//   {
//     id: 6,
//     title: "Industrial Warehouse",
//     type: "Industrial",
//     status: "For Sale",
//     price: "$1,200,000",
//     location: "100 Industry Way, Detroit, MI",
//     bedrooms: null,
//     bathrooms: 2,
//     area: "15,000 sq ft",
//     agent: "Michael Rodriguez",
//     features: ["Loading Docks", "High Ceilings", "Office Space", "Security System"],
//     imageUrl: "https://images.unsplash.com/photo-1553522911-be3f28736fca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2FyZWhvdXNlfGVufDB8fDB8fHww",
//     createdDate: "Apr 5, 2024",
//   },
// ];

// export const PropertiesPage = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-2xl font-bold tracking-tight">Properties</h1>
//           <p className="text-slate-500">Manage and list properties</p>
//         </div>
//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="gap-2">
//               <Plus className="h-4 w-4" />
//               <span>Add Property</span>
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[600px]">
//             <DialogHeader>
//               <DialogTitle>Add New Property</DialogTitle>
//               <DialogDescription>
//                 Enter the details of the property you want to list.
//               </DialogDescription>
//             </DialogHeader>
//             <div className="grid grid-cols-2 gap-4 py-4">
//               <div className="space-y-2">
//                 <label htmlFor="title" className="text-sm font-medium">
//                   Property Title
//                 </label>
//                 <Input id="title" placeholder="Enter property title" />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="type" className="text-sm font-medium">
//                   Property Type
//                 </label>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="residential">Residential</SelectItem>
//                     <SelectItem value="commercial">Commercial</SelectItem>
//                     <SelectItem value="industrial">Industrial</SelectItem>
//                     <SelectItem value="land">Land</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="status" className="text-sm font-medium">
//                   Status
//                 </label>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="for-sale">For Sale</SelectItem>
//                     <SelectItem value="for-rent">For Rent</SelectItem>
//                     <SelectItem value="for-lease">For Lease</SelectItem>
//                     <SelectItem value="sold">Sold</SelectItem>
//                     <SelectItem value="pending">Pending</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="price" className="text-sm font-medium">
//                   Price
//                 </label>
//                 <Input id="price" placeholder="Enter property price" />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="bedrooms" className="text-sm font-medium">
//                   Bedrooms
//                 </label>
//                 <Input id="bedrooms" type="number" placeholder="Number of bedrooms" />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="bathrooms" className="text-sm font-medium">
//                   Bathrooms
//                 </label>
//                 <Input id="bathrooms" type="number" placeholder="Number of bathrooms" />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="area" className="text-sm font-medium">
//                   Area
//                 </label>
//                 <Input id="area" placeholder="Square footage" />
//               </div>
//               <div className="space-y-2">
//                 <label htmlFor="agent" className="text-sm font-medium">
//                   Agent
//                 </label>
//                 <Select>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Assign agent" />
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
//               <div className="space-y-2 col-span-2">
//                 <label htmlFor="location" className="text-sm font-medium">
//                   Location
//                 </label>
//                 <Input id="location" placeholder="Enter property address" />
//               </div>
//               <div className="space-y-2 col-span-2">
//                 <label htmlFor="description" className="text-sm font-medium">
//                   Description
//                 </label>
//                 <textarea
//                   id="description"
//                   className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                   placeholder="Enter property description"
//                 />
//               </div>
//               <div className="col-span-2">
//                 <label className="text-sm font-medium">Property Images</label>
//                 <div className="mt-2 border-2 border-dashed border-slate-200 rounded-lg p-8 text-center">
//                   <Building className="w-10 h-10 mx-auto text-slate-400" />
//                   <div className="mt-2">
//                     <Button variant="outline" size="sm">Upload Images</Button>
//                   </div>
//                   <p className="text-xs text-slate-500 mt-2">
//                     PNG, JPG, GIF up to 10MB
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end gap-4">
//               <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={() => setIsDialogOpen(false)}>Save Property</Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-4 justify-between">
//         <div className="relative w-full sm:w-auto">
//           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
//           <Input
//             type="search"
//             placeholder="Search properties..."
//             className="pl-8 w-full sm:w-[300px]"
//           />
//         </div>
//         <div className="flex flex-wrap gap-2">
//           <Select defaultValue="all">
//             <SelectTrigger className="w-[150px]">
//               <SelectValue placeholder="Property Type" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Types</SelectItem>
//               <SelectItem value="residential">Residential</SelectItem>
//               <SelectItem value="commercial">Commercial</SelectItem>
//               <SelectItem value="industrial">Industrial</SelectItem>
//               <SelectItem value="land">Land</SelectItem>
//             </SelectContent>
//           </Select>
//           <Select defaultValue="all-status">
//             <SelectTrigger className="w-[150px]">
//               <SelectValue placeholder="Status" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all-status">All Status</SelectItem>
//               <SelectItem value="for-sale">For Sale</SelectItem>
//               <SelectItem value="for-rent">For Rent</SelectItem>
//               <SelectItem value="for-lease">For Lease</SelectItem>
//               <SelectItem value="sold">Sold</SelectItem>
//               <SelectItem value="pending">Pending</SelectItem>
//             </SelectContent>
//           </Select>
//           <div className="flex items-center p-1 border rounded-md">
//             <Button
//               variant={viewMode === "grid" ? "default" : "ghost"}
//               size="icon"
//               onClick={() => setViewMode("grid")}
//             >
//               <Grid className="h-4 w-4" />
//               <span className="sr-only">Grid view</span>
//             </Button>
//             <Button
//               variant={viewMode === "list" ? "default" : "ghost"}
//               size="icon"
//               onClick={() => setViewMode("list")}
//             >
//               <List className="h-4 w-4" />
//               <span className="sr-only">List view</span>
//             </Button>
//           </div>
//         </div>
//       </div>

//       <Tabs defaultValue="all" className="w-full">
//         <TabsList className="w-full sm:w-auto flex">
//           <TabsTrigger value="all" className="flex-1 sm:flex-auto">
//             All Properties
//           </TabsTrigger>
//           <TabsTrigger value="for-sale" className="flex-1 sm:flex-auto">
//             For Sale
//           </TabsTrigger>
//           <TabsTrigger value="for-rent" className="flex-1 sm:flex-auto">
//             For Rent
//           </TabsTrigger>
//           <TabsTrigger value="pending" className="flex-1 sm:flex-auto">
//             Pending
//           </TabsTrigger>
//           <TabsTrigger value="sold" className="flex-1 sm:flex-auto">
//             Sold
//           </TabsTrigger>
//         </TabsList>
//         <TabsContent value="all" className="mt-4">
//           {viewMode === "grid" ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {properties.map((property) => (
//                 <Card key={property.id} className="overflow-hidden">
//                   <div className="aspect-video relative">
//                     <img
//                       src={property.imageUrl}
//                       alt={property.title}
//                       className="object-cover w-full h-full"
//                     />
//                     <Badge
//                       className={`absolute top-2 right-2 ${
//                         property.status === "For Sale"
//                           ? "bg-blue-500"
//                           : property.status === "For Rent"
//                           ? "bg-green-500"
//                           : property.status === "For Lease"
//                           ? "bg-purple-500"
//                           : "bg-gray-500"
//                       }`}
//                     >
//                       {property.status}
//                     </Badge>
//                   </div>
//                   <CardHeader className="pb-2">
//                     <CardTitle className="text-base font-semibold line-clamp-1">
//                       {property.title}
//                     </CardTitle>
//                     <CardDescription className="line-clamp-1">
//                       {property.location}
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent className="pb-2">
//                     <div className="text-lg font-bold text-realestate-primary">
//                       {property.price}
//                     </div>
//                     <div className="flex text-sm text-slate-500 gap-4 mt-2">
//                       {property.bedrooms && (
//                         <div>{property.bedrooms} Beds</div>
//                       )}
//                       {property.bathrooms && (
//                         <div>{property.bathrooms} Baths</div>
//                       )}
//                       <div>{property.area}</div>
//                     </div>
//                   </CardContent>
//                   <CardFooter className="flex justify-between items-center pt-0">
//                     <div className="text-xs text-slate-500">Added {property.createdDate}</div>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="icon">
//                           <MoreHorizontal className="h-4 w-4" />
//                           <span className="sr-only">Open menu</span>
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem>View Details</DropdownMenuItem>
//                         <DropdownMenuItem>Edit Property</DropdownMenuItem>
//                         <DropdownMenuItem>Mark as Featured</DropdownMenuItem>
//                         <DropdownMenuItem>Change Status</DropdownMenuItem>
//                         <DropdownMenuItem className="text-red-600">
//                           Delete Property
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {properties.map((property) => (
//                 <div
//                   key={property.id}
//                   className="flex flex-col md:flex-row gap-4 border rounded-lg overflow-hidden"
//                 >
//                   <div className="md:w-56 h-48">
//                     <img
//                       src={property.imageUrl}
//                       alt={property.title}
//                       className="object-cover w-full h-full"
//                     />
//                   </div>
//                   <div className="flex-1 p-4 flex flex-col">
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <h3 className="font-semibold line-clamp-1">{property.title}</h3>
//                         <p className="text-sm text-slate-500 line-clamp-1">
//                           {property.location}
//                         </p>
//                       </div>
//                       <Badge
//                         className={`${
//                           property.status === "For Sale"
//                             ? "bg-blue-500"
//                             : property.status === "For Rent"
//                             ? "bg-green-500"
//                             : property.status === "For Lease"
//                             ? "bg-purple-500"
//                             : "bg-gray-500"
//                         }`}
//                       >
//                         {property.status}
//                       </Badge>
//                     </div>
//                     <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm">
//                       <div className="font-bold text-realestate-primary">
//                         {property.price}
//                       </div>
//                       {property.bedrooms && (
//                         <div>{property.bedrooms} Beds</div>
//                       )}
//                       {property.bathrooms && (
//                         <div>{property.bathrooms} Baths</div>
//                       )}
//                       <div>{property.area}</div>
//                       <div>{property.type}</div>
//                     </div>
//                     <div className="mt-2 text-sm">
//                       <span className="font-medium">Agent:</span> {property.agent}
//                     </div>
//                     <div className="flex-1"></div>
//                     <div className="flex items-center justify-between mt-4">
//                       <div className="text-xs text-slate-500">Added {property.createdDate}</div>
//                       <div className="flex gap-2">
//                         <Button size="sm" variant="outline">
//                           View
//                         </Button>
//                         <Button size="sm">Edit</Button>
//                         <DropdownMenu>
//                           <DropdownMenuTrigger asChild>
//                             <Button variant="ghost" size="icon">
//                               <MoreHorizontal className="h-4 w-4" />
//                               <span className="sr-only">Open menu</span>
//                             </Button>
//                           </DropdownMenuTrigger>
//                           <DropdownMenuContent align="end">
//                             <DropdownMenuItem>Mark as Featured</DropdownMenuItem>
//                             <DropdownMenuItem>Change Status</DropdownMenuItem>
//                             <DropdownMenuItem>Generate Report</DropdownMenuItem>
//                             <DropdownMenuItem className="text-red-600">
//                               Delete Property
//                             </DropdownMenuItem>
//                           </DropdownMenuContent>
//                         </DropdownMenu>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </TabsContent>
//         <TabsContent value="for-sale" className="mt-4">
//           <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
//             {properties
//               .filter((property) => property.status === "For Sale")
//               .map((property) => (
//                 // For brevity, this example shows just the card component for "For Sale" properties
//                 // You can implement similar to "all" tab or customize as needed
//                 <Card key={property.id} className="overflow-hidden">
//                   <div className="aspect-video relative">
//                     <img
//                       src={property.imageUrl}
//                       alt={property.title}
//                       className="object-cover w-full h-full"
//                     />
//                     <Badge className="absolute top-2 right-2 bg-blue-500">
//                       {property.status}
//                     </Badge>
//                   </div>
//                   <CardHeader className="pb-2">
//                     <CardTitle className="text-base font-semibold line-clamp-1">
//                       {property.title}
//                     </CardTitle>
//                     <CardDescription className="line-clamp-1">
//                       {property.location}
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent className="pb-2">
//                     <div className="text-lg font-bold text-realestate-primary">
//                       {property.price}
//                     </div>
//                     <div className="flex text-sm text-slate-500 gap-4 mt-2">
//                       {property.bedrooms && <div>{property.bedrooms} Beds</div>}
//                       {property.bathrooms && <div>{property.bathrooms} Baths</div>}
//                       <div>{property.area}</div>
//                     </div>
//                   </CardContent>
//                   <CardFooter className="flex justify-between items-center pt-0">
//                     <div className="text-xs text-slate-500">
//                       Added {property.createdDate}
//                     </div>
//                     <Button size="sm">View Details</Button>
//                   </CardFooter>
//                 </Card>
//               ))}
//           </div>
//         </TabsContent>
//         {/* Other tab contents would follow similar pattern */}
//         <TabsContent value="for-rent">
//           <div className="p-10 text-center text-slate-500">
//             Content for For Rent tab
//           </div>
//         </TabsContent>
//         <TabsContent value="pending">
//           <div className="p-10 text-center text-slate-500">
//             Content for Pending tab
//           </div>
//         </TabsContent>
//         <TabsContent value="sold">
//           <div className="p-10 text-center text-slate-500">
//             Content for Sold tab
//           </div>
//         </TabsContent>
//       </Tabs>
      
//       <div className="flex items-center justify-between">
//         <p className="text-sm text-slate-500">Showing 6 of 24 properties</p>
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

// export default PropertiesPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Building, Grid, List, MoreHorizontal, Plus, Search } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import propertyService, { Property } from "@/services/propertyService";
import { AxiosError } from "axios";

// Agent mapping (static, as agent_id is a number)
const agentMap: { [key: number]: string } = {
  1: "Jennifer Adams",
  2: "Michael Rodriguez",
 3: "Sarah Johnson",
  4: "David Chen",
  5: "Lisa Thompson",
};

// Placeholder image (since API doesn't provide imageUrl)
const defaultImageUrl =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";

export const PropertiesPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all-status");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    status: "available" as "available" | "sold" | "pending",
    agent_id: 1,
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Fetch properties
  const { data: properties = [], isLoading, error } = useQuery<Property[], AxiosError>({
    queryKey: ['properties'],
    queryFn: propertyService.getAllProperties,
    select: (data) => data ?? [],
    retry: 3,
    retryDelay: 1000,
  });

  React.useEffect(() => {
    if (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      const message = axiosError.response?.data?.message || axiosError.message;
      if (axiosError.response?.status === 401 || axiosError.response?.status === 403) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
    }
  }, [error, navigate, toast]);

  // Create property
  const createMutation = useMutation({
    mutationFn: (data: Partial<Property>) => propertyService.createProperty(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
      toast({
        title: "Property Created",
        description: "The property has been created successfully",
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

  // Delete property
  const deleteMutation = useMutation({
    mutationFn: (id: number) => propertyService.deleteProperty(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['properties'] });
      toast({
        title: "Property Deleted",
        description: "The property has been deleted successfully",
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData({
      ...formData,
      [id]: id === "agent_id" ? Number(value) : value,
    });
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.price || Number(formData.price) <= 0) {
      toast({
        title: "Error",
        description: "Title and valid price are required",
        variant: "destructive",
      });
      return;
    }
    createMutation.mutate({
      title: formData.title,
      description: formData.description,
      price: Number(formData.price),
      status: formData.status,
      agent_id: formData.agent_id,
    });
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      deleteMutation.mutate(id);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      price: "",
      status: "available",
      agent_id: 1,
    });
  };

  // Filter properties
  const filteredProperties = properties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = propertyTypeFilter === "all" || propertyTypeFilter === "residential"; // Simplified, as API doesn't provide type
    const matchesStatus =
      statusFilter === "all-status" ||
      (statusFilter === "for-sale" && property.status === "available") ||
      (statusFilter === "for-rent" && property.status === "available") ||
      property.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <p className="text-red-600">Error loading properties: {(error as Error).message}</p>
        <Button
          onClick={() => {
            if ((error as Error).message.includes("token")) {
              localStorage.removeItem("token");
              navigate("/login");
            } else {
              queryClient.invalidateQueries({ queryKey: ['properties'] });
            }
          }}
        >
          {(error as Error).message.includes("token") ? "Log In" : "Retry"}
        </Button>
      </div>
    );
  }

  const renderPropertyCard = (property: Property) => (
    <Card key={property.id} className="overflow-hidden">
      <div className="aspect-video relative">
        <img
          src={defaultImageUrl}
          alt={property.title}
          className="object-cover w-full h-full"
        />
        <Badge
          className={`absolute top-2 right-2 ${
            property.status === "available"
              ? "bg-blue-500"
              : property.status === "sold"
              ? "bg-gray-500"
              : "bg-yellow-500"
          }`}
        >
          {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-semibold line-clamp-1">
          {property.title}
        </CardTitle>
        <CardDescription className="line-clamp-1">
          {agentMap[property.agent_id] || "Unknown Agent"}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="text-lg font-bold text-realestate-primary">
          ${property.price.toLocaleString()}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-0">
        <div className="text-xs text-slate-500">Added {property.listed_at}</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Edit Property</DropdownMenuItem>
            <DropdownMenuItem>Mark as Featured</DropdownMenuItem>
            <DropdownMenuItem>Change Status</DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-600"
              onClick={() => handleDelete(property.id)}
            >
              Delete Property
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );

  const renderPropertyList = (property: Property) => (
    <div
      key={property.id}
      className="flex flex-col md:flex-row gap-4 border rounded-lg overflow-hidden"
    >
      <div className="md:w-56 h-48">
        <img
          src={defaultImageUrl}
          alt={property.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 p-4 flex flex-col">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold line-clamp-1">{property.title}</h3>
            <p className="text-sm text-slate-500 line-clamp-1">
              {agentMap[property.agent_id] || "Unknown Agent"}
            </p>
          </div>
          <Badge
            className={`${
              property.status === "available"
                ? "bg-blue-500"
                : property.status === "sold"
                ? "bg-gray-500"
                : "bg-yellow-500"
            }`}
          >
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm">
          <div className="font-bold text-realestate-primary">
            ${property.price.toLocaleString()}
          </div>
        </div>
        <div className="mt-2 text-sm">
          <span className="font-medium">Agent:</span>{" "}
          {agentMap[property.agent_id] || "Unknown Agent"}
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-xs text-slate-500">Added {property.listed_at}</div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              View
            </Button>
            <Button size="sm">Edit</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Mark as Featured</DropdownMenuItem>
                <DropdownMenuItem>Change Status</DropdownMenuItem>
                <DropdownMenuItem>Generate Report</DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-600"
                  onClick={() => handleDelete(property.id)}
                >
                  Delete Property
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Properties</h1>
          <p className="text-slate-500">Manage and list properties</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Property</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Property</DialogTitle>
              <DialogDescription>
                Enter the details of the property you want to list.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateSubmit}>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="space-y-2">
                  <label htmlFor="title" className="text-sm font-medium">
                    Property Title
                  </label>
                  <Input
                    id="title"
                    placeholder="Enter property title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="status" className="text-sm font-medium">
                    Status
                  </label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) =>
                      handleSelectChange("status", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="sold">Sold</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="price" className="text-sm font-medium">
                    Price
                  </label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Enter property price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="agent_id" className="text-sm font-medium">
                    Agent
                  </label>
                  <Select
                    value={formData.agent_id.toString()}
                    onValueChange={(value) =>
                      handleSelectChange("agent_id", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Assign agent" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(agentMap).map(([id, name]) => (
                        <SelectItem key={id} value={id}>
                          {name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 col-span-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter property description"
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
                  {createMutation.isPending ? "Saving..." : "Save Property"}
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
            placeholder="Search properties..."
            className="pl-8 w-full sm:w-[300px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Select
            value={propertyTypeFilter}
            onValueChange={setPropertyTypeFilter}
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="industrial">Industrial</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status">All Status</SelectItem>
              <SelectItem value="for-sale">For Sale</SelectItem>
              <SelectItem value="for-rent">For Rent</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center p-1 border rounded-md">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
              <span className="sr-only">Grid view</span>
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
              <span className="sr-only">List view</span>
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full sm:w-auto flex">
          <TabsTrigger value="all" className="flex-1 sm:flex-auto">
            All Properties
          </TabsTrigger>
          <TabsTrigger value="for-sale" className="flex-1 sm:flex-auto">
            For Sale
          </TabsTrigger>
          <TabsTrigger value="for-rent" className="flex-1 sm:flex-auto">
            For Rent
          </TabsTrigger>
          <TabsTrigger value="pending" className="flex-1 sm:flex-auto">
            Pending
          </TabsTrigger>
          <TabsTrigger value="sold" className="flex-1 sm:flex-auto">
            Sold
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          {isLoading ? (
            <div className="text-center py-8">Loading properties...</div>
          ) : filteredProperties.length === 0 ? (
            <div className="text-center py-8">No properties found</div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map(renderPropertyCard)}
            </div>
          ) : (
            <div className="space-y-4">{filteredProperties.map(renderPropertyList)}</div>
          )}
        </TabsContent>
        <TabsContent value="for-sale" className="mt-4">
          {isLoading ? (
            <div className="text-center py-8">Loading properties...</div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {filteredProperties
                .filter((property) => property.status === "available")
                .map(viewMode === "grid" ? renderPropertyCard : renderPropertyList)}
            </div>
          )}
        </TabsContent>
        <TabsContent value="for-rent" className="mt-4">
          {isLoading ? (
            <div className="text-center py-8">Loading properties...</div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {filteredProperties
                .filter((property) => property.status === "available")
                .map(viewMode === "grid" ? renderPropertyCard : renderPropertyList)}
            </div>
          )}
        </TabsContent>
        <TabsContent value="pending" className="mt-4">
          {isLoading ? (
            <div className="text-center py-8">Loading properties...</div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {filteredProperties
                .filter((property) => property.status === "pending")
                .map(viewMode === "grid" ? renderPropertyCard : renderPropertyList)}
            </div>
          )}
        </TabsContent>
        <TabsContent value="sold" className="mt-4">
          {isLoading ? (
            <div className="text-center py-8">Loading properties...</div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {filteredProperties
                .filter((property) => property.status === "sold")
                .map(viewMode === "grid" ? renderPropertyCard : renderPropertyList)}
            </div>
          )}
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">
          Showing {filteredProperties.length} of {properties.length} properties
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
          <Button variant="ghost" size="sm">
            2
          </Button>
          <Button variant="ghost" size="sm">
            3
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

export default PropertiesPage;