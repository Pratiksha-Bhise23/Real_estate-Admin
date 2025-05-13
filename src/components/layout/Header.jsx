
import React from "react";
import { Bell, Search, User, Building, Activity } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const Header = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b px-4 lg:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="lg:hidden">
          <button className="p-2 rounded-md hover:bg-slate-100">
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
              className="h-6 w-6"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <path d="M9 3v18" />
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </SidebarTrigger>
        
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full bg-white pl-8 shadow-none lg:max-w-sm"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative p-2 rounded-full hover:bg-slate-100">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="sr-only">Notifications</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-auto">
              <div className="flex items-start gap-4 p-3 hover:bg-slate-100">
                <span className="bg-blue-100 p-2 rounded-full">
                  <User className="h-4 w-4 text-blue-600" />
                </span>
                <div>
                  <p className="text-sm font-medium">New Agent Registration</p>
                  <p className="text-xs text-slate-500">John Smith requested approval</p>
                  <p className="text-xs text-slate-500 mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 hover:bg-slate-100">
                <span className="bg-green-100 p-2 rounded-full">
                  <Building className="h-4 w-4 text-green-600" />
                </span>
                <div>
                  <p className="text-sm font-medium">New Property Listed</p>
                  <p className="text-xs text-slate-500">Luxury Villa in Beverly Hills</p>
                  <p className="text-xs text-slate-500 mt-1">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 hover:bg-slate-100">
                <span className="bg-yellow-100 p-2 rounded-full">
                  <Activity className="h-4 w-4 text-yellow-600" />
                </span>
                <div>
                  <p className="text-sm font-medium">Offer Accepted</p>
                  <p className="text-xs text-slate-500">Offer for Downtown Apartment</p>
                  <p className="text-xs text-slate-500 mt-1">Yesterday</p>
                </div>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center cursor-pointer">View All</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="hidden lg:block text-left">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-slate-500">Admin</p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
