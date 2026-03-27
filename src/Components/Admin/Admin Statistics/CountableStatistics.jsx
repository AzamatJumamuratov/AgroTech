import { useLoaderData } from "react-router";
import CountableItem from "./CountableItem";
import getPublishedToday from "../../../Utils/getPublishedToday";
import GetTotalViews from "../../../Utils/GetTotalViews";

const CountableStatistics = () => {
  const loaderData = useLoaderData();

  const totalViews = GetTotalViews(loaderData.results);
  const count = loaderData.count;
  const published_today = getPublishedToday(loaderData.results).length;
  let avgViews = "0";
  if (
    typeof totalViews === "number" &&
    typeof count === "number" &&
    count > 0
  ) {
    const avg = totalViews / count;
    avgViews = Number.isInteger(avg) ? avg.toString() : avg.toFixed(2);
  }
  return (
    <div className="grid xl:grid-cols-4 grid-cols-2 xl:gap-5 lg:gap-3 gap-2 mb-5">
      <CountableItem count={count} content={"Всего новостей"} />
      <CountableItem count={totalViews} content={"Общие просмотры"} />
      <CountableItem count={published_today} content={"Новостей сегодня"} />
      <CountableItem count={avgViews} content={"просмотров в среднем"} />
    </div>
  );
};

export default CountableStatistics;
