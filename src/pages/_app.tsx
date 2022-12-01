import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';

import { Footer } from 'components/footer/footer.component';
import Navbar from 'components/navbar/navbar.component';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col overflow-x-hidden">
      <Navbar />
      <section className="container max-w-3xl mx-auto mt-[66px] pb-5 flex-grow">
        <Component {...pageProps} />
      </section>
      <Footer />
    </main>
  );
}
