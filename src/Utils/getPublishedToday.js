export default function getPublishedToday(items) {
  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  return items.filter((item) => {
    const publishedDate = new Date(item.published_at);
    return (
      publishedDate.getDate() === todayDay &&
      publishedDate.getMonth() === todayMonth &&
      publishedDate.getFullYear() === todayYear
    );
  });
}
