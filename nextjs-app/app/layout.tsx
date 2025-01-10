import "./globals.css";
import { sanityFetch } from "@/sanity/lib/live";
import { listProduct } from "@/sanity/lib/queries";
import Header from "./components/Header";
import ProductListItem from "./components/ProductListItem";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { data } = await sanityFetch({
    query: listProduct,
    params: {},
  });

  return (
    <html lang="en" className="bg-white text-black">
      <body>
        <section>
          {children}
        </section>
      </body>
    </html>
  );
}