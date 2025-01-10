import { sanityFetch } from "@/sanity/lib/live";
import { fetchProduct } from "@/sanity/lib/queries";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const productId = params?.id;
  try {
    const product = await sanityFetch({
      query: fetchProduct,
      params: { "productId": params.id }
    });
    return (
      <div className="container mx-auto p-4">
        <Image
          src={product?.data?.image?.asset?.url}
          alt={""}
          width={300}
          height={300}
        />
      </div>
    );
  } catch (error) {
    console.error("Error in ProductPage:", error);
    return <div>Error loading product</div>;
  }
}
