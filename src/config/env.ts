type env = {
  SHOPIFY_HOSTNAME: string,
  SHOPIFY_ADMIN_API_HOSTNAME: string,
  SHOPIFY_API_KEY: string,
}

export const env: env = {
  SHOPIFY_HOSTNAME: process.env.SHOPIFY_HOSTNAME || '',
  SHOPIFY_ADMIN_API_HOSTNAME: process.env.SHOPIFY_ADMIN_API_HOSTNAME || '',
  SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY || '',
}