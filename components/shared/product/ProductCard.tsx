import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ProductType } from "@/types";
import ProductPrice from "./ProductPrice";

const ProductCard = ({ product }: { product: ProductType }) => {
  if (!product?.images?.[0] || !product?.slug) return null;

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link
          href={`/product/${product.slug}`}
          className="flex items-center justify-between p-4 hover:bg-gray-100 transition-colors"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            width={200}
            height={200}
            className="w-full h-auto object-cover"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link
          href={`/product/${product.slug}`}
          className=" hover:underline cursor-pointer"
        >
          <h2 className="text-sm font-medium">{product.name}</h2>
        </Link>
        <div className="felx-between gap-4">
          <p>{product.rating?.toString()} Stars</p>
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
