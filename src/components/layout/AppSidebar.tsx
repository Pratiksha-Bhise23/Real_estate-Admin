
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Home, Users, UserPlus, FolderClosed, Building,
  // Tag, Award, Activity, ChevronDown, ChevronUp, Menu 
    Tag, Award, Activity, Menu
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  // SidebarGroup,
  // SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
  badge?: string;
};

const NavItem = ({ to, icon, label, badge }: NavItemProps) => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <NavLink to={to} className={({ isActive }) => 
          isActive ? "sidebar-menu-item active" : "sidebar-menu-item"
        }>
          {icon}
          {!isCollapsed && (
            <>
              <span className="flex-1">{label}</span>
              {badge && (
                <span className="bg-blue-100 text-realestate-primary text-xs font-medium px-2 py-0.5 rounded">
                  {badge}
                </span>
              )}
            </>
          )}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

// type NavGroupProps = {
//   label: string;
//   children: React.ReactNode;
//   defaultOpen?: boolean;
// };

// const NavGroup = ({ label, children, defaultOpen = false }: NavGroupProps) => {
//   const [open, setOpen] = useState(defaultOpen);
//   const { state } = useSidebar();
//   const isCollapsed = state === "collapsed";

//   if (isCollapsed) {
//     return <>{children}</>;
//   }

//   return (
//     <SidebarGroup>
//       <div onClick={() => setOpen(!open)} className="flex items-center justify-between p-3 cursor-pointer hover:bg-slate-100 rounded-md">
//         <SidebarGroupLabel className="text-sm text-slate-500 font-medium">
//           {label}
//         </SidebarGroupLabel>
//         {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//       </div>
//       {open && (
//         <SidebarGroupContent>
//           <SidebarMenu>
//             {children}
//           </SidebarMenu>
//         </SidebarGroupContent>
//       )}
//     </SidebarGroup>
//   );
// };

// export const AppSidebar = () => {
//   const { state, toggleSidebar } = useSidebar();
//   const isCollapsed = state === "collapsed";
//   const location = useLocation();

//   // Check if any route in the real estate group is active
//   const isRealEstateActive = [
//     "/properties",
//     "/agents",
//     "/categories",
//     "/commissions",
//     "/offers",
//     "/grades",
//   ].some(path => location.pathname.startsWith(path));
export const AppSidebar = () => {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar
      className={cn("border-r", isCollapsed ? "w-20" : "w-64")}
      collapsible="icon"
    >
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-realestate-primary" />
            <h1 className="text-xl font-bold">EstateAdmin</h1>
          </div>
        )}
        <SidebarTrigger>
          <Menu size={20} />
        </SidebarTrigger>
      </div>

      <SidebarContent className="py-4">
        <SidebarMenu>
          <NavItem 
            to="/" 
            icon={<Home size={20} />} 
            label="Dashboard" 
          />
          
          <NavItem 
            to="/users" 
            icon={<Users size={20} />} 
            label="User Management"
          />
        {/* </SidebarMenu>

        <NavGroup 
          label="REAL ESTATE" 
          defaultOpen={isRealEstateActive}
        > */}

              
          {/* Former Real Estate dropdown items now directly in the main menu */}
          <NavItem 
            to="/agents" 
            icon={<UserPlus size={20} />} 
            label="Agent Management"
          />
          <NavItem 
            to="/categories" 
            icon={<FolderClosed size={20} />} 
            label="Category Management"
          />
          <NavItem 
            to="/commissions" 
            icon={<Tag size={20} />} 
            label="Commission"
          />
          <NavItem 
            to="/properties" 
            icon={<Building size={20} />} 
            label="Properties" 
            badge="New"
          />
          <NavItem 
            to="/offers" 
            icon={<Activity size={20} />} 
            label="Offers"
          />
          <NavItem 
            to="/grades" 
            icon={<Award size={20} />} 
            label="Grades"
          />
        {/* </NavGroup> */}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;