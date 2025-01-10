import "./globals.css";
import Header from "./components/Header";
import Link from "next/link";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" className="bg-white text-black">
      <body>
        <section>
          <Header />
          {children} 
        </section>
      </body>
    </html>
  );
}