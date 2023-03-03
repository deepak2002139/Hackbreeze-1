import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "../components/UI/Layout";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
