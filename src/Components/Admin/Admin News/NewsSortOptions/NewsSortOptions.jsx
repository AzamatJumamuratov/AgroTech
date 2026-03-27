import { useState } from "react";
import SortOptionsItem from "./SortOptionsItem";

const NewsSortOptions = () => {
  const [type, setType] = useState("all");
  return (
    <div className="flex max-lg:flex-wrap gap-3 mb-8">
      <SortOptionsItem onClick={() => setType("all")} active={type == "all"}>
        Все
      </SortOptionsItem>
      <SortOptionsItem
        onClick={() => setType("recent")}
        active={type == "recent"}
      >
        Недавние
      </SortOptionsItem>
      <SortOptionsItem
        onClick={() => setType("popular")}
        active={type == "popular"}
      >
        Популярные
      </SortOptionsItem>
      <SortOptionsItem
        onClick={() => setType("world")}
        active={type == "world"}
      >
        Весь мир
      </SortOptionsItem>
    </div>
  );
};

export default NewsSortOptions;
