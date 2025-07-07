"use client";

import {
  Home,
  GraduationCap,
  FileSliders,
  BookOpenText,
  ContactRound,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { Users } from 'lucide-react';


// Menu items.

const items = [
  {
    title: "dashboard",
    icon: Home,
    url: "#",
  },
  {
    title: "Students",
    icon: Users,
    url: "#",
  },
  {
    title: "Teachers",
    icon: GraduationCap,
    url: "#",
  },
  {
    title: "Classes",
    icon: FileSliders,
    url: "#",
  },
  {
    title: "Subjects",
    icon: BookOpenText,
    url: "#",
  },
  {
    title: "Attendance",
    icon: ContactRound,
    url: "#",
  }
];

export function AppSidebar() {
  return (
    <Sidebar side="left" className="h-screen">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
       
       <SidebarFooter>
        {/* Replace the below object with actual user data as needed */}
        <NavUser user={{
                  name: "",
                  email: "",
                  avatar: ""
              }} />
      </SidebarFooter>
    </Sidebar>
    
    
  );
}
