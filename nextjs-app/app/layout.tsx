
import "./globals.css";
import Header from "./components/Header";
import Link from "next/link";
import Footer from "./components/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" className="bg-white text-black">
      <body className="font-sans ">
        <section className="w-full h-[100vh]">
          <Header />
          {children} 
          <Footer/>
        </section>
      </body>
    </html>
  );
}