import {ProductsWrapper} from "app/components/Store/ProductsWrapper/ProductsWrapper";

import {getProducts} from "app/services/shopify/products";
import {getCollectionProducts, getCollections} from "../../../services/shopify/collections";

interface CategoryProps {
  params: {
    categories: string[]|undefined;
    searchParams?: { socialmedia: string }
  }
}

export default async function Page(props: CategoryProps) {
  let products = [];
  const {categories} = props.params;
  const collections = await getCollections();

  if(categories && categories?.length > 0){
    const selectedCollectionId = collections.find((collection) => collection.handle === categories?.[0])?.id || 10026435936535;
    products = await getCollectionProducts(selectedCollectionId);

  }else{
    products = await getProducts();
  }

  return (
    <>
      <ProductsWrapper products={products}/>
    </>
  );
}


