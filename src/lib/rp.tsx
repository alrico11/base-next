export const rupiah = (value: string | number | null | undefined): string => {
  if (value === null || value === undefined || value === "") return "";
  const cleaned = typeof value === "string"
    ? value.replace(/[^\d-]/g, "")
    : String(value);
  const number = Number(cleaned);
  if (Number.isNaN(number)) return "";
  return new Intl.NumberFormat("id-ID").format(number);
}