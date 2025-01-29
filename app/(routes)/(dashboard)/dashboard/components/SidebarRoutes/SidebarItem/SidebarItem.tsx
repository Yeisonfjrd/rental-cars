import Link from "next/link";
import { SidebarItemProps } from "./SidebarItem.types";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function SidebarItem(props: SidebarItemProps) {
  const { item } = props;
  const { href, icon: Icon, label } = item;

  const pathname = usePathname();
  const activePath = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex gap-x-2 mt-2 text-[#E3B97B] text-sm items-center p-2 rounded-lg cursor-pointer transition-colors",
        activePath
          ? "bg-[#CA9352] text-black"
          : "hover:bg-[#CA9352]/30 hover:text-[#CA9352]"
      )}
    >
      <Icon className="w-5 h-5" strokeWidth={1} />
      {label}
    </Link>
  );
}