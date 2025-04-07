import {
  Calendar,
  ChevronDown,
  ChevronRight,
  Home,
  Inbox,
  LayoutDashboard,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { VersionSwitcher } from "./version-switcher";
import { Link } from "react-router-dom";
import { useState } from "react";

const data = {
  navmenu: [
    {
      title: "Class Management",
      icon: LayoutDashboard,
      items: [
        { title: "Add Classes", url: "/home" },
      ],
    },
    {
      title: "Lesson Management",
      icon: Inbox,
      items: [
        { title: "Lesson List", url: "/lesson/manage" },
        { title: "Add Lesson", url: "/Add/lesson" },
      ],
    },
  ],
};

const items = [
  {
    title: "Dashboard",
    url: "/home",
    icon: LayoutDashboard,
  },
];

export function AppSidebar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (title) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <VersionSwitcher />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white">
          <h1 className="text-lg font-bold">Eduworm Admin Panel</h1>
          <div className="text-sm">v1.0</div>
        </div>
      </SidebarHeader>
      <SidebarContent className="flex flex-col justify-between">
        <SidebarMenu className={"p-0"}>
          {/* Main Menu Items */}
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarGroupLabel
                className="flex justify-center items-center py-5 cursor-pointer border-2 text-[14px] w-60 mx-auto text-left px-3 bg-blue-500"
              >
                <Link to={item.url} className="flex items-center py-2">
                  <item.icon size={16} />
                  <span className="ml-2">{item.title}</span>
                </Link>

              </SidebarGroupLabel>
            </SidebarMenuItem>
          ))}

          {/* Dropdown Menu Items */}
          <SidebarGroup>
            <SidebarGroupContent className="mt-4">
              {data.navmenu.map((item, index) => (
                <SidebarGroup key={index}>
                  <SidebarGroupLabel
                    onClick={() => toggleDropdown(item.title)}
                    className="flex justify-between items-center py-5 cursor-pointer border-2 text-[14px]"
                  >
                    {item.title}
                    {openMenu === item.title ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </SidebarGroupLabel>
                  {/* Render dropdown content if the menu is open */}
                  {openMenu === item.title && (
                    <SidebarMenu>
                      {item.items.map((subItem, subIndex) => (
                        <SidebarMenuItem key={subIndex}>
                          <SidebarMenuButton asChild>
                            <Link to={subItem.url} className="flex items-center py-2 text-sm pl-6">
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  )}
                </SidebarGroup>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarMenu>

        {/* Sidebar Footer */}
        <div className="bg-gray-800 text-white text-center py-4 mt-auto">
          <p className="text-xs">Eduworm Admin Panel © 2025</p>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
