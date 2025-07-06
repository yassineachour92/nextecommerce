import ProductList from "@/components/shared/product/ProductList";
import { getLastestProducts } from "@/lib/actions/getLatestProducts";
export const Page = async() => {
  const productData = await getLastestProducts();
  return (
      <ProductList data={productData} title="Newest Arrivals" />
  );
};
