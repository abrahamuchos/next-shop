import {ProductView} from "app/components/product/ProductView/ProductView";
import {getProducts} from "../../../services/shopify/products";

interface ProductProps {
  searchParams: {
    id: string;
  };
}

export default  async function Product({searchParams} : ProductProps) {
  const products = await getProducts(searchParams.id);
  const product = products[0]

  return (
    <ProductView product={product} />
  );
}


