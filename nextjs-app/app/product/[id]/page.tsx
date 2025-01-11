import React from "react";
import { sanityFetch } from "@/sanity/lib/live";
import { fetchProductWithRating } from "@/sanity/lib/queries";
import Image from "next/image";
import ProductDescription from "@/app/components/ProductDescription";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: Props) {
  try {
    const product: { data: any } | null = await sanityFetch({
      query: fetchProductWithRating,
      params: { productId: params.id },
    });

    const data = product?.data;

    return (
      <div className="container mx-auto p-4">
        <div className="w-80 h-64">
          <Image
            src={data?.image?.asset?.url || "/placeholder.png"}
            alt={data?.stockName || "Product image"}
            width={300}
            height={150}
          />
          {data?.stockName && (
            <ProductDescription
              productName={data?.stockName}
              size={data?.supportedSize}
              productDescription={data?.productDescription}
            />
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in ProductPage:", error);
    return <div>Error loading product</div>;
  }
}
