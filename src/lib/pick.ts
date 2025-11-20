import { z } from "zod";

export const pick = <T extends z.ZodRawShape>(schema: z.ZodObject<T>) => {
  return z.enum(Object.keys(schema.shape) as [keyof T & string]);
};