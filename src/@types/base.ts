import { zPagination } from "@/@constant";
import React, { ReactNode } from "react";
import { z } from "zod";

export type InfinitePagination<T> = Omit<T, "page" | "limit">;

export type TBaseFind = z.infer<typeof zPagination>;
export type TFindResponse<TColumnData> = TBaseFind & {
  data: TColumnData[];
};

export type ApiFunction<Args, TColumnData> = (
  args: Args
) => Promise<TFindResponse<TColumnData>>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TOfResponseData<T> = T extends ApiFunction<any, infer TColumnData>
  ? TColumnData
  : never;

export interface TabItem {
  value: string;
  label: string;
  content: React.ComponentType | React.ReactNode;
  icon?: ((isActive: boolean) => React.ReactNode) | React.ReactNode;
}

export interface DynamicTabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  className?: string;
}

export interface Option<T = string> {
  value: T;
  label: string;
  subLabel?: string
  icon?: ReactNode
  onSelect?: () => void
}

type Join<K, P> = K extends string | number
  ? P extends string | number
  ? `${K}.${P}`
  : never
  : never;

export type DeepKeyOf<T> = {
  [K in keyof T]: NonNullable<T[K]> extends object
  ? K | Join<K, DeepKeyOf<NonNullable<T[K]>>>
  : K
}[keyof T];


