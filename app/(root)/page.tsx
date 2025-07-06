import ProductList from "@/components/shared/product/ProductList";
import sampleData from "@/db/sample-data";
export const Page = () => {
  return (
    <>
      <ProductList data={sampleData.products} title="Newest Arrivals" limit={4} />
    </>
  );
};
