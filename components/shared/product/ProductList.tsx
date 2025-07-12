import React from "react";
import ProductCard from "./ProductCard";
import { ProductType } from "@/types";



const ProductList = async ({
  data,
  title,
}: {
  data: ProductType[];
  title?: string;
}) => {
  
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
