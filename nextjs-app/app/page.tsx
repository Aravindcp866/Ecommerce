import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";
import ProductListItem from "./components/ProductListItem";
import { listProduct } from "@/sanity/lib/queries";
import ProductSlider from "./components/ProductSection/ProductSlider";
import Section from "./components/Structure/Section";



export default async function Page() {
  const { data } = await sanityFetch({
    query: listProduct,
    params: {},
  });

  return (
    <>
      <ProductSlider className={''}/>
      <Section className={'flex-col'}>
      <div className="grid grid-cols-2 gap-2 p-3 overflow-hidden">

        {data?.length && data.map((e: any, i: number) => {
          return (
            <div className="lg:p-10 " key={i} >
              <ProductListItem props={e} />
            </div>)
        })}
      </div>
      </Section>
    </>
  );
}
