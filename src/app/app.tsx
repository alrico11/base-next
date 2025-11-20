"use client"
import { getQueryClient } from "@/lib";
import { QueryClientProvider, QueryClientProviderProps } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import dayjs from "dayjs";
import "dayjs/locale/id";
import { Provider } from 'jotai';
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ReactNode } from "react";

dayjs.locale("id");

interface App extends Omit<QueryClientProviderProps, "client"> {
  children: ReactNode;
}


export const App = ({ children }: App) => {
  const queryClient = getQueryClient()

  return (
    <Provider>
      <NuqsAdapter>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          {/* <AppClient> */}
          {children}
          {/* </AppClient> */}
        </QueryClientProvider>
      </NuqsAdapter>
    </Provider>
  );
};
