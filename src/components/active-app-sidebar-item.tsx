'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";

import { SidebarMenuSubButton } from "@/components/ui/sidebar"

type ActiveAppSidebarItemProps = {
  subItem: {
    title: string;
    url: string;
  }
};

export default function ActiveAppSidebarItem({ subItem }: ActiveAppSidebarItemProps) {
  // Utils
  const pathname = usePathname();

  // Render
  return (
    <SidebarMenuSubButton asChild isActive={subItem.url === pathname}>
      <Link href={subItem.url}>{subItem.title}</Link>
    </SidebarMenuSubButton>
  );
}