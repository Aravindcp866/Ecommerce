import React from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { fetchProductWithRating } from "@/sanity/lib/queries";
import Image from "next/image";
import ProductDescription from "@/app/components/ProductDescription";
import { BuyNowButton } from "@/app/components/BuyNowButton";



export default async function ProductPage({ params }: any) {
  try {
    const product: { data: any } | null = await sanityFetch({
      query: fetchProductWithRating,
      params: { productId: params?.id },
    });

    const data = product?.data;

    return (
      <div className="container mx-auto p-4 h-[900px]">

        <Image
          src={data?.image?.asset?.url || "/placeholder.png"}
          alt={"Trendy T-shirts in India"}
          width={300}
          height={150}
          className="w-full h-fit rounded-md"
        />
        {data?.stockName && (
          <ProductDescription
            productName={data?.stockName}
            size={data?.supportedSize}
            productDescription={data?.productDescription}
          />
        )}
        <BuyNowButton/>

      </div>

    );
  } catch (error) {
    console.error("Error in ProductPage:", error);
    return <div>Error loading product</div>;
  }
}

