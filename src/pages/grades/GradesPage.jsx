
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Award, Check, Edit, MoreHorizontal, Plus, Search, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Sample grade data
const grades = [
  {
    id: 1,
    name: "Premium",
    description: "Top-tier properties with luxury amenities",
    properties: 15,
    minPrice: "$1,000,000+",
    commission: "3.0%",
    criteria: ["Luxury Amenities", "Premium Location", "High-end Finishes"],
    color: "gold",
  },
  {
    id: 2,
    name: "Standard Plus",
    description: "Above average properties with good amenities",
    properties: 32,
    minPrice: "$500,000 - $999,999",
    commission: "2.7%",
    criteria: ["Modern Features", "Good Location", "Quality Construction"],
    color: "silver",
  },
  {
    id: 3,
    name: "Standard",
    description: "Average properties meeting basic requirements",
    properties: 68,
    minPrice: "$250,000 - $499,999",
    commission: "2.5%",
    criteria: ["Basic Amenities", "Average Location", "Standard Construction"],
    color: "bronze",
  },
  {
    id: 4,
    name: "Economy",
    description: "Budget-friendly properties",
    properties: 43,
    minPrice: "$100,000 - $249,999",
    commission: "2.3%",
    criteria: ["Minimal Features", "Various Locations", "Basic Construction"],
    color: "default",
  },
];

// Sample properties with grades
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
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [view, setView] = useState("grades");

  // Render grade badge with appropriate color
  const renderGradeBadge = (grade) => {
    const gradeInfo = grades.find((g) => g.name === grade);
    
    switch (gradeInfo?.color) {
      case "gold":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-600" />
            {grade}
          </Badge>
        );
      case "silver":
        return (
          <Badge className="bg-slate-100 text-slate-800 hover:bg-slate-200 flex items-center gap-1">
            <Star className="h-3 w-3 fill-slate-500" />
            {grade}
          </Badge>
        );
      case "bronze":
        return (
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 flex items-center gap-1">
            <Star className="h-3 w-3 fill-amber-600" />
            {grade}
          </Badge>
        );
      default:
        return <Badge>{grade}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Property Grades</h1>
          <p className="text-slate-500">Manage property classification grades</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {view === "grades" ? (
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
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Grade Name</Label>
                    <Input id="name" placeholder="e.g. Premium" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" placeholder="Brief description of this grade" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="minPrice">Minimum Price Range</Label>
                    <Input id="minPrice" placeholder="e.g. $500,000+" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="commission">Commission Rate</Label>
                    <Input id="commission" placeholder="e.g. 2.5%" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="color">Color</Label>
                    <Select defaultValue="default">
                      <SelectTrigger>
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gold">Gold</SelectItem>
                        <SelectItem value="silver">Silver</SelectItem>
                        <SelectItem value="bronze">Bronze</SelectItem>
                        <SelectItem value="default">Default</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end gap-4">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsDialogOpen(false)}>Save Grade</Button>
                </div>
              </DialogContent>
            </Dialog>
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
                        <SelectItem value="premium">Premium</SelectItem>
                        <SelectItem value="standard-plus">Standard Plus</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="economy">Economy</SelectItem>
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
                <div className="flex justify-end gap-4">
                  <Button variant="outline" onClick={() => setIsAssignDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsAssignDialogOpen(false)}>Assign Grade</Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
          <div className="border rounded-md overflow-hidden flex">
            <button
              onClick={() => setView("grades")}
              className={`px-3 py-1.5 text-sm ${
                view === "grades" 
                  ? "bg-blue-50 text-blue-700 font-medium" 
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              Grades
            </button>
            <button
              onClick={() => setView("properties")}
              className={`px-3 py-1.5 text-sm ${
                view === "properties"
                  ? "bg-blue-50 text-blue-700 font-medium" 
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              Properties
            </button>
          </div>
        </div>
      </div>
      
      <div className="rounded-lg border shadow">
        {view === "grades" ? (
          <>
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-medium">Grade Definitions</h2>
              <div className="relative max-w-xs">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input placeholder="Search grades..." className="pl-8" />
              </div>
            </div>
            <div className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Grade</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Price Range</TableHead>
                    <TableHead>Commission Rate</TableHead>
                    <TableHead>Properties</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {grades.map((grade) => (
                    <TableRow key={grade.id}>
                      <TableCell>
                        <div className="font-medium">{renderGradeBadge(grade.name)}</div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs truncate">{grade.description}</div>
                      </TableCell>
                      <TableCell>{grade.minPrice}</TableCell>
                      <TableCell>{grade.commission}</TableCell>
                      <TableCell>{grade.properties}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              <span>Edit</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-medium">Properties by Grade</h2>
              <div className="relative max-w-xs">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input placeholder="Search properties..." className="pl-8" />
              </div>
            </div>
            <div className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Agent</TableHead>
                    <TableHead>Date Graded</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {propertyGrades.map((property) => (
                    <TableRow key={property.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{property.property}</div>
                          <div className="text-xs text-slate-500">{property.address}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {renderGradeBadge(property.grade)}
                      </TableCell>
                      <TableCell>{property.price}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-7 w-7">
                            <AvatarFallback>{property.agent.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span>{property.agent}</span>
                        </div>
                      </TableCell>
                      <TableCell>{property.dateGraded}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" className="p-0 h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GradesPage;
