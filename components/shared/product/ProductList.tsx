import React from "react";
import ProductCard from "./ProductCard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductList = ({ data, title,limit }: { data:any; title?: string,limit?:number }) => {
    console.log('data', data);
  return (
    <div className="my-10">

      <h2 className="h2-bold mb-4">{title}</h2>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.slice(0,limit).map((product: any) => (
            <ProductCard key={product?.slug} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
