import {env} from 'app/config/env';

export const shopifyUrls = {
  products: {
    'all': `${env.SHOPIFY_ADMIN_API_HOSTNAME}/products.json`,
    'mainProducts': `${env.SHOPIFY_ADMIN_API_HOSTNAME}/collections/509043573015/products.json`,
    // 'mainProducts': `${env.SHOPIFY_ADMIN_API_HOSTNAME}/smart_collections.json?since_id=509043573015`,

  },
  collections: {
    'all': `${env.SHOPIFY_ADMIN_API_HOSTNAME}/smart_collections.json`,
    'products': (id: number) => `${env.SHOPIFY_ADMIN_API_HOSTNAME}/collections/${id}/products.json`
  }

}