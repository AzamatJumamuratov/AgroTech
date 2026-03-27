import FetchData from "./FetchData.js";

export async function loader({ params }) {
  let responseItem = await FetchData(`news/${params.id}/`, {
    headers: {
      "Accept-Language": "ru",
    },
  });

  let responseNews = await FetchData(`news/`, {
    headers: {
      "Accept-Language": "ru",
    },
  });

  if (responseItem.ok && responseNews.ok) {
    let item = await responseItem.json();
    let news = await responseNews.json();
    return { item, news };
  } else {
    if (!responseItem.ok) {
      console.error(
        "Error Loading News Item ITem Data Page. Code : " +
          responseItem.status +
          " Text : " +
          responseItem.statusText
      );
    } else {
      console.error(
        "Error Loading News Item Page News Data. Code : " +
          responseNews.status +
          " Text : " +
          responseNews.statusText
      );
    }
  }

  // return {
  //   results: [
  //     {
  //       id: "1",
  //       title: "Запуск нового проекта по органическому земледелию",
  //       content:
  //         "С радостью сообщаем о старте инновационного проекта, направленного на развитие органического земледелия. Его главная цель - внедрение экологически чистых методов выращивания сельхозпродукции.",
  //       published_at: "2025-06-12T11:18:46.935073+05:00",
  //     },
  //     {
  //       id: "2",
  //       title: null,
  //       content: null,
  //       published_at: "2025-06-12T11:18:46.935073+05:00",
  //     },
  //   ],
  // };
}
