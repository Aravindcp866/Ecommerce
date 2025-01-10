
interface Props {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: Props) {
  try {
    // No need to await params.id directly
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Product Details</h1>
        <p>Product ID: {params.id}</p>
        {/* Add your product details here */}
      </div>
    );
  } catch (error) {
    console.error('Error in ProductPage:', error);
    return <div>Error loading product</div>;
  }
}