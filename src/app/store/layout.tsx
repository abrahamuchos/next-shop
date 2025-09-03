import Link from "next/link";

import type { ReactNode } from "react";

import {getCollections} from "app/services/shopify/collections";

type Props = {
  children: ReactNode;
}

export default async function Layout({children}: Props) {
  const collections = await getCollections();


  return (
    <div>
      <nav>
        {collections.map((collection)=> (
          <Link key={collection.id} href={`/store/${collection.handle}`}>
            {collection.title}
          </Link>
        ))}
      </nav>


      <div>
        {children}
      </div>
    </div>
  );
}

