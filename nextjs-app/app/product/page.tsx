import { sanityFetch } from '@/sanity/lib/live';
import { listProduct } from '@/sanity/lib/queries';
import React from 'react';
import Header from '../components/Header';
import ProductListItem from '../components/ProductListItem';

export default async function Page({ params }: { params: { category?: string } }) {
  console.log(params, 'params');
  
  // Use params to modify the query or its parameters
  const queryParams = params.category ? { category: params.category } : {};

  const { data } = await sanityFetch({
    query: listProduct,
    params: queryParams,
  });

  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-2 p-3">
        {data?.length
          ? data.map((e: any, i: number) => (
              <div className="lg:p-10" key={i}>
                <ProductListItem props={e} />
              </div>
            ))
          : <p>No products found.</p>}
      </div>
    </>
  );
}
