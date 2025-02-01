"use client"
import Header from "@/app/components/Header";
import "./globals.css";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import json from './jsonld.json'
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timeout);
  }, [pathname]);



  return (
    <html lang="en" className="bg-white text-black">
      <Head>
        <title>United by Vibe - Trendy T-Shirts in India | Best T-shirt Brand in Kerala</title>
        <meta name="description" content="United by Vibe (UBV) is India's best T-shirt brand, offering stylish and trendy graphic T-shirts with premium quality. Order online today!"></meta>
        <script type="application/ld+json">
          {JSON.stringify(json)}
        </script>
        <meta name="google-site-verification" content="tqcf21sne-RWs8PzP2nacZx5C8qo0sESclDkktGRC5Q" />
      </Head>
      <body className="font-sans ">
        <section className="w-full h-[100vh]">
          <Header />
          {children}
          {loading && <Loader />}
          {/* <Footer/> */}
        </section>
      </body>
    </html>
  );
}