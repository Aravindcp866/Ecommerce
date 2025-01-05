import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing, toPlainText } from "next-sanity";
import { Toaster } from "sonner";

import DraftModeToast from "@/app/components/DraftModeToast";
;
import * as demo from "@/sanity/lib/demo";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { listProduct, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { handleError } from "./client-utils";
import CTA from "./components/Cta";
import Header from "./components/Header";
import ProductListItem from "./components/ProductListItem";


export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();
  const { data } = await sanityFetch({
    query: listProduct,
    params: {},
  });

  return (
    <html lang="en" className={`${inter.variable} bg-white text-black`}>
      <body>
        <section>
          <Toaster />
          {isDraftMode && (
            <>
              <DraftModeToast />

              <VisualEditing />
            </>
          )}

          <SanityLive onError={handleError} />
          <Header />
          {data?.length && data.map((e: any, i: number) => {
            return (
              <div className="p-10" key={i}>
                <ProductListItem props={e}  />
              </div>)
          })}

        </section>
        <SpeedInsights />
      </body>
    </html>
  );
}
