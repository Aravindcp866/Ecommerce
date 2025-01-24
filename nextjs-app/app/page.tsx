import { sanityFetch } from "@/sanity/lib/live";
import { Suspense } from "react";
import ProductListItem from "./components/ProductListItem";
import { fecthHomeBestSellersImage, fecthHomeSliderImage, listProduct } from "@/sanity/lib/queries";
import ProductSlider from "./components/ProductSection/ProductSlider";
import Section from "./components/Structure/Section";
import HomePageSlider from "./components/ProductSection/HeroSlider";
import BestSellersSlider from "./components/ProductSection/HeroSlider";
import HeroSlider from "./components/ProductSection/HeroSlider";
import BestSellerSlider from "./components/ProductSection/BestSellerSlider";



export default async function Page() {
  const { data } = await sanityFetch({
    query: listProduct,
    params: {},
  });

  const {data:image} = await sanityFetch({
    query: fecthHomeSliderImage,
    params: {},
  })
  const {data:bestImage} = await sanityFetch({
    query: fecthHomeBestSellersImage,
    params: {},
  })

  return (
    <>
      <ProductSlider className={''}/>
      <HeroSlider imageProps={image?.image}/>
      <BestSellerSlider imageProps={bestImage?.image}/>
      <Section className={'flex-col'}>
      <div className="grid grid-cols-2 gap-10">
        {data?.length && data.map((e: any, i: number) => {
          return (
            <div className="lg:p-10 pb-3 " key={i} >
              <ProductListItem props={e} />
            </div>)
        })}
      </div>
      </Section>
    </>
  );
}
