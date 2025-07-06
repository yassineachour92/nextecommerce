import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/components/types/productType";



const ProductList = async ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  console.log('data', data);
  
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.map((product) => (
          <ProductCard key={product?.slug} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
