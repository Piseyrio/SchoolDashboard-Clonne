"use client"

import * as React from "react"
import {
  Frame,
  GalleryVerticalEnd,
  GraduationCap,
  LayoutDashboard,
  NotebookPen,
  PieChart,
  User2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Joy School",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard/admin",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "History",
          url: "/dashboard/admin",
        },
      ],
    },
    {
      title: "Students",
      url: "#",
      icon: User2,
      items: [
        {
          title: "My Students",
          url: "/dashboard/list/students",
        },
        {
          title: "All Students",
          url: "/dashboard/list/students",
        },
      ],
    },
    {
      title: "Teachers",
      url: "#",
      icon: GraduationCap,
      items: [
        {
          title: "All Teachers",
          url: "#",
        },
      ],
    },
    {
      title: "Attendance",
      url: "#",
      icon: NotebookPen,
      items: [
        {
          title: "General",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Classes",
      url: "#",
      icon: Frame,
    },
    {
      name: "Subjects",
      url: "#",
      icon: PieChart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
