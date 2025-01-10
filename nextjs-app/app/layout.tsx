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
          {/* <Header /> */}
          {/* <div className="grid grid-cols-2 gap-2 p-3">
            {data?.length && data.map((e: any, i: number) => {
              return (
                <div className="lg:p-10 " key={i} >
                  <ProductListItem props={e} />
                </div>)
            })}
          </div> */}
        </section>
      </body>
    </html>
  );
}