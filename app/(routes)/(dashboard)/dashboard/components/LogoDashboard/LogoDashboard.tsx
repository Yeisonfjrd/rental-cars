import Image from "next/image";
import Link from "next/link";

export function LogoDashboard() {
  return (
    <Link
      href="/"
      className="flex items-center h-20 gap-2 px-6 cursor-pointer"
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={30}
        height={30}
        priority
        className="object-cover"
      />
      <h1 className="text-xl font-bold text-[#CA9352]">RoadEra</h1>
    </Link>
  );
}