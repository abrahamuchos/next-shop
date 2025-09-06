import {redirect} from "next/navigation";

import {ProductView} from "app/components/product/ProductView/ProductView";
import {getProducts} from "app/services/shopify/products";

interface ProductProps {
  searchParams: {
    id: string;
  };
}

export async function generateMetadata({searchParams}: ProductProps){
  const products = await getProducts(searchParams.id);
  const product = products[0];

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image]
    }
  }
}

export default  async function Product({searchParams} : ProductProps) {
  const products = await getProducts(searchParams.id);
  const product = products[0]

  if(!searchParams.id){
    redirect('/store');
  }

  return (
    <ProductView product={product} />
  );
}


