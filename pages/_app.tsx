import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import FormProvider from "@/context/FormContext";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Fadak Registraition Form</title>
          <meta
            name="viewport"
            content="width=device-width , initial-scale=1.0"
          />
        </Head>
        <FormProvider>
          <Component {...pageProps} />
        </FormProvider>
      </QueryClientProvider>
    </>
  );
}
