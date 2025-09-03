import {shopifyUrls} from "./urls";
import {env} from "../../config/env";

interface Collections{
  id: number;
  title: string;
  handle: string;
  updated_at: string;
  published_at: string;
  body_html: string|null;
}

export const getCollections = async (): Promise<Collections[]> => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
      })
    });
    const {smart_collections} = await response.json();

    return smart_collections.map((collection: Collections) => {
      return {
        id: collection.id,
        title: collection.title,
        handle: collection.handle,
        updated_at: collection.updated_at,
        published_at: collection.published_at,
        body_html: collection.body_html
      }
    });

  } catch (e) {
    console.error(e);
    return [];
  }

}

export const getCollectionProducts = async (id: number): Promise<Product[]|[]> => {
  try {
    const response = await fetch(shopifyUrls.collections.products(id),  {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
      })
    });

    const {products} = await response.json();

    return products;

  }catch (e) {
    console.error(e);
    return [];
  }
}

