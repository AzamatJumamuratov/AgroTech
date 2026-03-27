export default function GetLastDates(arr, count = null, currentId = null) {
  const filtered = arr.filter((item) => item.id !== currentId);
  const sorted = filtered.sort(
    (a, b) => new Date(b.published_at) - new Date(a.published_at)
  );

  return count == null ? sorted : sorted.slice(0, count);
}
