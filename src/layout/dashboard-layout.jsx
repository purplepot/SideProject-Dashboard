import React from "react";
import { AppSidebar } from "../components/Appsidebar";
import Navbar from "../components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Homepage from "@/components/Homepage";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <main className="w-full">
          <Navbar />
          <Homepage />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
