import Image from "next/image";

import {getProducts} from "app/services/shopify"

import styles from './MainProducts.module.scss'



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

