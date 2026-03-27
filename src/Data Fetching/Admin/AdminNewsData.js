import FetchData from "../FetchData.js";

export async function loader() {
  // let language = localStorage.getItem("language");
  let response = await FetchData("news/", {
    headers: {
      "Accept-Language": "ru",
    },
  });
  if (response.ok) {
    return await response.json();
  } else {
    console.error(
      "Error Loading Admin News Page. Code : " +
        response.status +
        " Text : " +
        response.statusText
    );
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
  //   ],
  // };
}

export async function action({ request }) {
  const formData = await request.formData();

  let response = await FetchData("news/", {
    method: "POST",
    body: formData,
  });

  let result;
  if (response.ok) {
    result = await response.json();
  } else {
    console.error(
      "Error In Action from Admin News Page Error Code : " +
        response.status +
        "Text : " +
        response.statusText
    );
    result = {
      message: "Произошла Ошибка!",
    };
  }

  return {
    success: response.ok,
    result,
  };
}
