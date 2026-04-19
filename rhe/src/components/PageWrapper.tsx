"use client";

import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className={`flex min-h-0 w-full min-w-0 flex-1 flex-col${pathname === "/" ? "" : " pt-[76px]"}`}>
      {children}
    </div>
  );
}
