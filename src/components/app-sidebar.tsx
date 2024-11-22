import { SignedIn, UserButton } from "@clerk/nextjs";
import * as React from "react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Image from "next/image";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Management",
      isActive: true,
      url: "#",
      items: [
        {
          title: "Dashboard",
          isActive: true,
          url: "/dashboard",
        },
        {
          title: "Patient Roster",
          url: "/patient-roster",
        },
        {
          title: "Messages",
          url: "/messages",
        },
        {
          title: "Quality Gaps",
          url: "/quality-gaps",
        },
        {
          title: "TCM",
          url: "/tcm",
        },
        {
          title: "CCM",
          url: "/ccm",
        },
        {
          title: "Schedule",
          url: "/schedule",
        },
        {
          title: "Administrator",
          url: "/administrator",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Image alt="HCA logo" src="/images/hca-logo.png" height={40} width={100} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
