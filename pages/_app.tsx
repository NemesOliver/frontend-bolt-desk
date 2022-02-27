import type { AppProps } from "next/app";
import { Layout } from "../components";
import { AuthContextProvider, ModalContextProvider } from "../context";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
