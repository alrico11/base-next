"use client";
import { zBaseResponse } from "@/@constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { z } from "zod";

type MutationConfig<T, R extends z.infer<typeof zBaseResponse>> = {
  mutationFn: (args: T) => Promise<R>;
  queryKey: string;
  onSuccess?: (data: R) => void;
  onError?: (error: AxiosError<R>) => void;
};

export const useMutate = <T, R extends z.infer<typeof zBaseResponse>>({
  mutationFn,
  queryKey,
  onSuccess,
  onError,
}: MutationConfig<T, R>) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const client = useQueryClient();
  const mutation = useMutation<R, AxiosError<R>, T>({
    mutationFn,
    retry: 0,
    onSuccess: (data) => {
      client.invalidateQueries({ queryKey: [queryKey] });
      setErrorMessage(undefined);
      onSuccess?.(data);
    },
    onError: (error) => {
    },
  });

  return {
    ...mutation,
    errorMessage,
    setErrorMessage,
  };
};
