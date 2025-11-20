import { QueryKey, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useCallback, useState } from "react";

type UseImperativeOptions = {
  retry?: number;
  staleTime?: number;
};

export const useImperativeQuery = <
  TArgs,
  TResult,
  TError = AxiosError
>(
  makeKey: (args: TArgs) => QueryKey,
  queryFn: (args: TArgs) => Promise<TResult>,
  options: UseImperativeOptions = {}
) => {
  const { retry, staleTime = 15_000 } = options;
  const queryClient = useQueryClient();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TResult | undefined>(undefined);
  const [error, setError] = useState<TError | null>(null);
  const [argsState, setArgsState] = useState<TArgs | null>(null);

  const fetch = useCallback(
    async (args: TArgs): Promise<TResult> => {
      setIsLoading(true);
      setError(null);
      setArgsState(args);

      try {
        const result = await queryClient.fetchQuery<TResult, TError>({
          queryKey: makeKey(args),
          queryFn: () => queryFn(args),
          retry,
          staleTime,
        });
        setData(result);
        return result;
      } catch (err) {
        setError(err as TError);
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [queryClient, queryFn, makeKey, retry, staleTime]
  );

  return {
    fetch,                            
    isLoading,
    data,
    error,
    isError: !!error,
    args: argsState,
  };
};
