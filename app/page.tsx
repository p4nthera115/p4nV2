"use client";

import DotGrid from "@/components/DotGrid";
import DarkModeButton from "@/components/DarkModeButton";

export default function Home() {
  return (
    <div className="h-full w-full flex bg-[#f2f2f2] justify-center items-center text-black/70 font-semibold text-sm">
      <DotGrid />
      <DarkModeButton />
    </div>
  );
}
