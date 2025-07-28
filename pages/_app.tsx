import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="pt-16 scroll-smooth">
        <Component {...pageProps} />
      </div>
    </>
  );
}
