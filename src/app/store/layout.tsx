import Link from "next/link";

import type { ReactNode } from "react";

import styles from "./StoreLayout.module.scss";

import {getCollections} from "app/services/shopify/collections";

type Props = {
  children: ReactNode;
}

export default async function Layout({children}: Props) {
  const collections = await getCollections();


  return (
    <div className={styles.StoreLayout}>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {collections.map((collection)=> (
            <Link key={collection.id} href={`/store/${collection.handle}`} className={styles.StoreLayout__chip}>
              {collection.title}
            </Link>
          ))}
        </ul>
      </nav>


      <div>
        {children}
      </div>
    </div>
  );
}

