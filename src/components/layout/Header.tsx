// import React from "react";
// import { Bell, Search, Building, Activity, LogOut, User } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Input } from "@/components/ui/input";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   SidebarTrigger,
// } from "@/components/ui/sidebar";

// export const Header = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
  
//   const handleLogout = async () => {
//     await logout();
//     navigate("/login");
//   };
  
//   return (
//     <header className="flex h-16 items-center justify-between border-b px-4 lg:px-6">
//       <div className="flex items-center gap-4">
//         <SidebarTrigger className="lg:hidden">
//           <button className="p-2 rounded-md hover:bg-slate-100">
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
//               className="h-6 w-6"
//             >
//               <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
//               <path d="M9 3v18" />
//             </svg>
//             <span className="sr-only">Toggle Menu</span>
//           </button>
//         </SidebarTrigger>
        
//         <div className="relative w-full max-w-md">
//           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
//           <Input
//             type="search"
//             placeholder="Search..."
//             className="w-full bg-white pl-8 shadow-none lg:max-w-sm"
//           />
//         </div>
//       </div>
      
//       <div className="flex items-center gap-4">
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <button className="relative p-2 rounded-full hover:bg-slate-100">
//               <Bell className="h-5 w-5" />
//               <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//               <span className="sr-only">Notifications</span>
//             </button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end" className="w-80">
//             <DropdownMenuLabel>Notifications</DropdownMenuLabel>
//             <DropdownMenuSeparator />
//             <div className="max-h-80 overflow-auto">
//               <div className="flex items-start gap-4 p-3 hover:bg-slate-100">
//                 <span className="bg-blue-100 p-2 rounded-full">
//                   <User className="h-4 w-4 text-blue-600" />
//                 </span>
//                 <div>
//                   <p className="text-sm font-medium">New Agent Registration</p>
//                   <p className="text-xs text-slate-500">John Smith requested approval</p>
//                   <p className="text-xs text-slate-500 mt-1">2 hours ago</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 p-3 hover:bg-slate-100">
//                 <span className="bg-green-100 p-2 rounded-full">
//                   <Building className="h-4 w-4 text-green-600" />
//                 </span>
//                 <div>
//                   <p className="text-sm font-medium">New Property Listed</p>
//                   <p className="text-xs text-slate-500">Luxury Villa in Beverly Hills</p>
//                   <p className="text-xs text-slate-500 mt-1">5 hours ago</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-4 p-3 hover:bg-slate-100">
//                 <span className="bg-yellow-100 p-2 rounded-full">
//                   <Activity className="h-4 w-4 text-yellow-600" />
//                 </span>
//                 <div>
//                   <p className="text-sm font-medium">Offer Accepted</p>
//                   <p className="text-xs text-slate-500">Offer for Downtown Apartment</p>
//                   <p className="text-xs text-slate-500 mt-1">Yesterday</p>
//                 </div>
//               </div>
//             </div>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem className="justify-center cursor-pointer">View All</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
        
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <button className="flex items-center gap-2">
//               <Avatar className="h-8 w-8">
//                 <AvatarImage src="" />
//                 <AvatarFallback>{user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}</AvatarFallback>
//               </Avatar>
//               <div className="hidden lg:block text-left">
//                 <p className="text-sm font-medium">{user?.name || user?.email}</p>
//                 <p className="text-xs text-slate-500">{user?.role || 'Admin'}</p>
//               </div>
//             </button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end" className="w-56">
//             <DropdownMenuLabel>My Account</DropdownMenuLabel>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>Profile</DropdownMenuItem>
//             <DropdownMenuItem>Settings</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem onClick={handleLogout} className="text-red-500 cursor-pointer">
//               <LogOut className="h-4 w-4 mr-2" />
//               Log out
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Bell, LogOut, Moon, Search, Settings, Sun, User } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { useAuth } from "@/hooks/useAuth";

interface HeaderProps {
  onShowMobileSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowMobileSidebar }) => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2 lg:hidden">
        <Button variant="outline" size="icon" onClick={onShowMobileSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <path d="M9 3v18" />
          </svg>
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <div className="hidden md:flex md:w-1/3">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-8 md:w-[300px] lg:w-[400px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="relative h-9 rounded-full pl-2.5">
              <Avatar className="h-7 w-7">
                <AvatarFallback>
                  {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                </AvatarFallback>
              </Avatar>
              <span className="ml-2 hidden lg:inline">{user?.name || user?.email || 'Admin'}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleLogout} className="text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
