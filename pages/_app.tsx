import type { AppProps } from "next/app";
import { Layout } from "../components";
import {
  AuthContextProvider,
  DateContextProvider,
  ModalContextProvider,
} from "../context";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <DateContextProvider>
        <ModalContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ModalContextProvider>
      </DateContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
