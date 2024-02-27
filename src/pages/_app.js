import "@/styles/globals.css";
import { SWRConfig } from "swr";
import Layout from "../../components/Layout";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </SWRConfig>
    </Layout>
  );
}
