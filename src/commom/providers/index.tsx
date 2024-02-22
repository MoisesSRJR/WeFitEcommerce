import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { MoviesProvider } from '../../modules/cart/context';

export type ProvidersProps = {
   children: React.ReactNode;
};

const queryClient = new QueryClient({});

export default function Providers({ children }: PropsWithChildren) {
   return (
      <QueryClientProvider client={queryClient}>
         <MoviesProvider>
            {children}
         </MoviesProvider>
         <ReactQueryDevtools />
      </QueryClientProvider>
   );
}
