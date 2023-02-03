import React, { useState } from "react";
import "@/styles/globals.scss";

import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
