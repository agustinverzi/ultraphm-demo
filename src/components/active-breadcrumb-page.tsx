'use client';

import { usePathname } from "next/navigation";

import { BreadcrumbPage } from "@/components/ui/breadcrumb";
import { useMemo } from "react";

const pathsMap: { [key: string]: string } = {
  '/dashboard': 'Dashboard',
  '/patient-roster': 'Patient Roster',
  '/messages': 'Messages',
  '/quality-gaps': 'Quality Gaps',
  '/tcm': 'TCM',
  '/ccm': 'CCM',
  '/schedule': 'Schedule',
  '/administrator': 'Administrator',
};

export default function ActiveBreadcrumbPage() {
  // Utils
  const pathname = usePathname();
  const activePage = useMemo(() => pathsMap[pathname], [pathname]);

  // Render
  return (
    <BreadcrumbPage>{activePage}</BreadcrumbPage>
  );
}