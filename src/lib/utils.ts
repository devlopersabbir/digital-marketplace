import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type TCurrency = "USD" | "EUR" | "GBP" | "BDT";
type TFormatOptions = {
  currency?: TCurrency;
  notation?: Intl.NumberFormatOptions["notation"];
};
export const formatPrice = (
  price: number | string,
  options?: TFormatOptions
) => {
  const { currency = "USD", notation = "compact" } = options ?? {};
  const numericPrice = typeof price === "string" ? parseFloat(price) : price;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice);
};
