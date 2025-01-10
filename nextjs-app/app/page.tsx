import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";
import ProductListItem from "./components/ProductListItem";
import { listProduct } from "@/sanity/lib/queries";



export default async function Page() {
  const { data } = await sanityFetch({
    query: listProduct,
    params: {},
  });

  return (
    <>
      <div className="grid grid-cols-2 gap-2 p-3">
        {data?.length && data.map((e: any, i: number) => {
          return (
            <div className="lg:p-10 " key={i} >
              <ProductListItem props={e} />
            </div>)
        })}
      </div>
    </>
  );
}
