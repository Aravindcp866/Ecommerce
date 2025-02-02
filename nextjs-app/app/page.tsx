import { sanityFetch } from "@/sanity/lib/live";
import ProductListItem from "./components/ProductListItem";
import { fecthHomeBestSellersImage, fecthHomeSliderImage, listProduct } from "@/sanity/lib/queries";
import ProductSlider from "./components/ProductSection/ProductSlider";
import Section from "./components/Structure/Section";
import HeroSlider from "./components/ProductSection/HeroSlider";
import BestSellerSlider from "./components/ProductSection/BestSellerSlider";
import { DataProvider } from "./components/Context/GlobalContext";

// Define the expected shape of the fetched data
interface ImageData {
  image: any; // Assuming the image is a URL or an object containing the image URL
}

interface Product {
  title: string;
  description: string;
  price: string;
  image: string;
}

export default async function Page() {
  // Fetch product data
  const { data } = await sanityFetch({
    query: listProduct,
    params: {},
  });

  const {data:image}: { data: { image: string } | any } = await sanityFetch({
    query: fecthHomeSliderImage,
    params: {},
  })
  const {data:bestImage}: { data: { image: string } | any } = await sanityFetch({
    query: fecthHomeBestSellersImage,
    params: {},
  });

  return (
    <>
    <DataProvider>
      <ProductSlider className={''} />
      <HeroSlider imageProps={image?.image} />
      {bestImage && <BestSellerSlider imageProps={bestImage.image} />}
      <Section className={'flex-col'}>
        <div className="grid grid-cols-2 gap-3">
          {data?.length &&
            data.map((e: Product, i: number) => {
              return (
                <div className="lg:p-10 pb-3" key={i}>
                  <ProductListItem props={e} />
                </div>
              );
            })}
        </div>
      </Section>
      </DataProvider>
    </>
  );
}
