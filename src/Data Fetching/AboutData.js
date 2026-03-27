import FetchData from "./FetchData";

export async function loader() {
  let response = await FetchData("company-info/", {
    headers: {
      "Accept-Language": "ru",
    },
  });
  if (response.ok) {
    return await response.json();
  } else {
    console.error(
      "Error Loading About Page. Code : " +
        response.status +
        " Text : " +
        response.statusText
    );
  }

  // return {
  //   results: [
  //     {
  //       id: "1",
  //       title: "Структура компании",
  //       description:
  //         "Компания включает в себя несколько ключевых отделов: производственный, исследовательский, образовательный и отдел международного сотрудничества.",
  //       translations: {
  //         uz: {
  //           title: "Kompaniya Strukturasi",
  //           description: "Кompaniya oziga bir necha bolimlarni oladi bla bla",
  //         },
  //         ru: {
  //           title: "Структура компании",
  //           description:
  //             "Компания включает в себя несколько ключевых отделов: производственный, исследовательский, образовательный и отдел международного сотрудничества.",
  //         },
  //       },
  //     },
  //     // {
  //     //   id: "2",
  //     //   title: "Наша история",
  //     //   description:
  //     //     "Основанная с целью модернизации сельского хозяйства, компания активно развивается и внедряет инновационные решения.",
  //     // },
  //     // {
  //     //   id: "3",
  //     //   title: "Местоположение",
  //     //   description:
  //     //     "Главный офис расположен в Ташкенте, с филиалами в ключевых сельскохозяйственных регионах Узбекистана.",
  //     // },
  //   ],
  // };
}
