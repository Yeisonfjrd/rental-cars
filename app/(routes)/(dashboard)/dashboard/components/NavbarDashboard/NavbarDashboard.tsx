import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarRoutes } from "../SidebarRoutes";
import { UserButton } from "@clerk/nextjs";

export function NavbarDashboard() {
  return (
    <nav className="flex items-center justify-between w-full h-20 px-6 md:px-8 bg-transparent border-b border-[#CA9352]/40 backdrop-blur-md">
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu className="text-[#CA9352] h-6 w-6 transition-transform hover:scale-125" />
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#1A120B] text-white">
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center justify-end w-full gap-x-4">
        <UserButton
          appearance={{
            elements: {
              rootBox:
                "text-[#CA9352] border border-[#CA9352]/50 hover:bg-[#CA9352]/20 transition-all px-4 py-2 rounded-xl"
            }
          }}
        />
      </div>
    </nav>
  );
}