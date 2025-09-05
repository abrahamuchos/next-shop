import {env} from 'app/config/env';
import {shopifyUrls} from './urls'

/**
 * Get all products from Shopify
 * @param [id] - string
 * @returns Promise<Product[]|[]>
 */
export const getProducts = async (id?: string ): Promise<Product[]|[]> => {
  try {
    const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all
    const response = await fetch(apiUrl, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
      })
    })
    const {products} = await response.json();

    //Transform products to match our Product type
    return products.map((product: Product) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.images[0].src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      }
    })

  } catch (error) {
    console.error(error);
    return [];
  }
}

export const getMainProducts = async (): Promise<Product[]|[]> => {
  try{
    const response = await fetch(shopifyUrls.products.mainProducts, {
      headers: new Headers({
        'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
      }),
      cache: "force-cache",
      next: {
        tags: ["main-products"]
      }
    });

    const {products} = await response.json();

    return products;

  }catch (e) {
    console.error(e);
    return [];
  }

}

