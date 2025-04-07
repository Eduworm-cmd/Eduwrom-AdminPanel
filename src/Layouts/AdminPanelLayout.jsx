import React, { useEffect, useState } from "react";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "@/components/SideBar/app-sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";



export const AdminPanelLayout = () => {
  const [path, setpath] = useState({
    currentpath: "",
    paths: [],
  });
  const location = useLocation();

  useEffect(() => {
    const pathsarr = location.pathname.split("/");
    setpath({
      ...path,
      currentpath: location.pathname,
      paths: pathsarr,
    });
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {path.paths.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href={path.currentpath || "#"}>
                      {item.title || item}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < path.paths.length - 1 && (
                    <BreadcrumbSeparator className="hidden md:block" />
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="w-full h-full p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
