"use client";

import { useState, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/nextjs";
import { dataAdminSidebar, dataGeneralSidebar } from "./SidebarRoutes.data";
import { SidebarItem } from "./SidebarItem";
import { isAdministrator } from "@/lib/isAdministrator";

export function SidebarRoutes() {
  const { userId } = useAuth();
  const [currentYear, setCurrentYear] = useState<string>("");

  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);

  return (
    <div className="flex flex-col justify-between h-full bg-[#1A120B] text-[#E3B97B] p-4">
      <div>
        <div className="p-4">
          <p className="mb-2 text-[#CA9352] tracking-wide">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator className="border-[#CA9352]" />

        {isAdministrator(userId) && (
          <div className="p-4">
            <p className="mb-2 text-[#CA9352] tracking-wide">ADMIN</p>
            {dataAdminSidebar.map((item) => (
              <SidebarItem key={item.label} item={item} />
            ))}
          </div>
        )}
      </div>

      <div>
      <Separator className="border-[#CA9352]" />
      <footer className="p-3 mt-3 text-center text-[#CA9352] text-sm">
        {currentYear}. Todos los derechos reservados
      </footer>
    </div>
    </div>
  );
}