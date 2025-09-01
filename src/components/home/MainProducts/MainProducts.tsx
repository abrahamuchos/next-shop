import Image from "next/image";

import styles from './MainProducts.module.scss'

interface Product{
  id: number,
  title: string,
  body_html: string;
  product_type: string;
  created_at: Date;
  handle: string;
  updated_at: Date;
  published_at: Date;
  tags: string;
  images: Image[];
  image: Image;
}

interface Image {
  id: number;
  alt: null;
  position: number;
  product_id: number;
  created_at: Date;
  updated_at: Date;
  admin_graphql_api_id: string;
  width: number;
  height: number;
  src: string;
  variant_ids: string[];
}

const getProducts = async (): Promise<Product[]|[]> => {
  try{
    const response = await fetch(`${process.env.SHOPIFY_ADMIN_API_HOSTNAME}/products.json`, {
      headers: new Headers({
        'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
      })
    })
    const {products} = await response.json();

    return products;

  }catch (error) {
    console.error(error);
    return [];
  }
}

export default async function MainProducts() {
  const products = await getProducts();
  console.log(products);

  return (
    <section className={styles.MainProducts}>
      <h3>New Products released</h3>

      <div className={styles.MainProducts__grid}>
        {products.map((product) => (
          <article key={product.id}>
            <p>{product.title}</p>
            <Image src={product.images[0].src} alt={product.title} fill loading='eager'/>
          </article>
        ))
        }
      </div>
    </section>


  );
}

