import { LogoDashboard } from "../LogoDashboard";
import { SidebarRoutes } from "../SidebarRoutes";

export function Sidebar() {
  return (
    <div className="h-screen bg-[#1A120B]/90 backdrop-blur-md">
      <div className="flex flex-col h-full border-r border-[#CA9352]/30 px-4 py-6">
        <LogoDashboard />
        <SidebarRoutes />
      </div>
    </div>
  );
}