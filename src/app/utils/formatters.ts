export const currencyFormatter = (value: number, currency?: "INR" | "USD") =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency || "INR",
  }).format(value);
