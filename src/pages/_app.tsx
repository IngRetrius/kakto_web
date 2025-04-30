import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="font-quicksand">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}