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
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { Users } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

// Menu items.

const items = [
  {
    title: "dashboard",
    icon: Home,
    hrel: "/dashboard/admin",
  },
  {
    title: "Students",
    icon: Users,
    hrel: "/dashboard/list/students",
  },
  {
    title: "Teachers",
    icon: GraduationCap,
    hrel: "/dashboard/list/teachers",
  },
  {
    title: "Classes",
    icon: FileSliders,
    hrel: "/dashboard/list/classes",
  },
  {
    title: "Subjects",
    icon: BookOpenText,
    hrel: "/dashboard/list/subjects",
  },
  {
    title: "Attendance",
    icon: ContactRound,
    hrel: "/dashboard/list/attendance",
  }
];

export function AppSidebar() {
  return (
    <Sidebar side="left" className="h-screen">
      <SidebarHeader className="flex flex-row justify-start items-center gap-4">
        <Image src="/logo.png" alt="" width={30} height={30}/>
        <h2 className="">Joy School</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.hrel}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
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
