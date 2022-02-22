import type { AppProps } from "next/app";
import { Layout, Header } from "../components";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
