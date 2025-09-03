import {env} from 'app/config/env';

export const shopifyUrls = {
  products: {
    'all': `${env.SHOPIFY_ADMIN_API_HOSTNAME}/products.json`

  },
  collections: {
    'all': `${env.SHOPIFY_ADMIN_API_HOSTNAME}/smart_collections.json`,
    'products': (id: number) => `${env.SHOPIFY_ADMIN_API_HOSTNAME}/collections/${id}/products.json`
  }

}