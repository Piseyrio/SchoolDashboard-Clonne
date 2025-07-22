import { AppSidebar } from "@/components/app-sidebar";
import { ChartMonthly } from "@/components/chart/chart-monthly";
import { ChartPie } from "@/components/chart/chart-pie";
import { ChartWeekly } from "@/components/chart/chart-weekly";
import { ModeToggle } from "@/components/dark-mode";
import { NavUser } from "@/components/nav-user";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SectionCards } from "@/components/user-card/section-cards";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-5"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="justify-end gap-2 flex items-center">
            <ModeToggle />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-5"
            />
            <NavUser
              user={{
                name: "",
                email: "",
                avatar: "",
              }}
            />
          </div>
        </header>
        <div className="flex flex-col">
          <div className="@container/main flex flex-col gap-2">
            <SectionCards />
          </div>
          <div className="@container/main flex lg:px-6 md:gap-6 wrap p-6 ">
            <ChartWeekly />
            <ChartPie />
          </div>
          <div className="lg:px-6 md:gap-6 px-6 ">
            <ChartMonthly />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
