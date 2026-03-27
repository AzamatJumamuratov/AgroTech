import FetchData from "./FetchData.js";

export async function loader({ params }) {
  let responseItem = await FetchData(`projects/${params.id}/`, {});

  let responseProjects = await FetchData(`projects/`, {});

  if (responseItem.ok && responseProjects.ok) {
    let item = await responseItem.json();
    let projects = await responseProjects.json();
    return { item, projects };
  } else {
    if (!responseItem.ok) {
      console.error(
        "Error Loading Projects Item Page. Code : " +
          responseItem.status +
          " Text : " +
          responseItem.statusText
      );
    } else {
      console.error(
        "Error Loading Projects Item Projects Data. Code : " +
          responseProjects.status +
          " Text : " +
          responseProjects.statusText
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
