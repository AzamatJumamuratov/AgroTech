export function formatDateToReadable(dateStr) {
  const date = new Date(dateStr);

  return date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
