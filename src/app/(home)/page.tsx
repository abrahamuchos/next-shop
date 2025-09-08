import {Metadata} from "next";

import MainProducts from "app/components/home/MainProducts/MainProducts";

export const metadata: Metadata = {
  title: 'Future World',
  description: 'An ecommerce from other century',
  keywords: ['ecommerce', 'future', 'world', 'products', 'shopping'],
};

export default function Home() {

  return (
    <main>
      <MainProducts/>
    </main>
  );
}