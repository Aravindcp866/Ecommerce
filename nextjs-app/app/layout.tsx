"use client"
import Header from "@/app/components/Header";
import "./globals.css";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

export default  function RootLayout({
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
      <meta name="google-site-verification" content="tqcf21sne-RWs8PzP2nacZx5C8qo0sESclDkktGRC5Q" />
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