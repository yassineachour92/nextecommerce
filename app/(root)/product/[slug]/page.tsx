import notFoundPage from "@/app/not-found";
import ProductPrice from "@/components/shared/product/ProductPrice";
import { CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/getLatestProducts";
import { Badge } from "lucide-react";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
  slug: string;
}) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) notFoundPage();
  return (
    <section>
      {product?.name}
      <div className="grid grid-cols-1 md:grid-cols-5">
        <div className="col-span-2"></div>
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6">
            <p>
              {product?.brand} {product?.category}
            </p>
            <h1 className="h3-bold">{product?.name}</h1>
            <p>
              {product?.rating?.toString()} of {product?.numReviews}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <ProductPrice
                value={Number(product?.price || 0)}
                className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
              />
            </div>
          </div>
          <div className="mt-10">
            <p className="font-semibold">
              <p>Description</p>
              <p>{product?.description}</p>
            </p>
          </div>
          <div>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <p>Price</p>
                <div>
                  <ProductPrice
                    value={Number(product?.price || 0)}
                    className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
                  />
                </div>
                <div className="mb-2 flex justify-between">
                  <div>Status</div>
                  {(product?.stock ?? 0) > 0 ? (
                    <Badge className="bg-green-500 text-white">En stock</Badge>
                  ) : (
                    <Badge className="bg-red-500 text-white">
                      Rupture de stock
                    </Badge>
                  )}
                </div>

                {(product?.stock ?? 0) <= 0 && (
                  <Badge className="bg-red-500 text-white">
                    Rupture de stock
                  </Badge>
                )}
              </div>
            </CardContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
