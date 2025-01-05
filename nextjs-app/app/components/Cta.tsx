import { Suspense } from "react";

import ResolvedLink from "@/app/components/ResolvedLink";
import { CallToAction } from "@/sanity.types";

type CtaProps = {
  value: string;
};

export default function CTA({ value }:CtaProps) {
  return (
    <button className="text-white bg-blue-950 p-3 rounded">{value}</button>
  );
}
