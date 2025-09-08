import {Roboto} from 'next/font/google'

import Header from "app/components/shared/Header/Header";
import Footer from "app/components/shared/Footer/Footer";

import 'app/sass/globals.scss'

const robotoFont = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
    <body className={robotoFont.className}>
      <Header/>

      {children}

      <Footer/>
    </body>
    </html>
  );
}
