"use client"
import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-md z-50">
      <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
    </div>
  );
}
