"use client";

import * as React from "react";
import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex flex-row items-center gap-2 ">
        <SidebarContent>
          <span className="flex flex-col text-1xl font-bold text-gray-900 align-middle justify-between items-center">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            Joy School
            <span className="text-xs text-gray-600">Night Class</span>
          </span>
        </SidebarContent>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
