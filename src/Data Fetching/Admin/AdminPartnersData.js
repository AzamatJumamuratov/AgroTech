import ConvertToJSonFormData from "../../Utils/FromDataToJson.js";
import FetchData from "../FetchData.js";

export async function loader() {
  // let language = localStorage.getItem("language");
  let response = await FetchData("partners/", {
    headers: {
      "Accept-Language": "ru",
    },
  });
  if (response.ok) {
    return await response.json();
  } else {
    console.error(
      "Error Loading Admin Partners Page. Code : " +
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
  const rawTranslations = formData.get("translations");

  let parsed;
  try {
    parsed = JSON.parse(rawTranslations);
  } catch (error) {
    console.error("Invalid JSON in translations:", error);
    return {
      success: false,
      result: { message: "Неверный формат translations" },
    };
  }

  // Получаем первый язык из translations
  const firstLang = Object.keys(parsed)[0];
  const fallbackData = parsed[firstLang] || {};

  const bodyToSend = {
    name: fallbackData.name || "",
    description: fallbackData.description || "",
    translations: parsed,
  };

  let response = await FetchData("/partners/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyToSend),
  });

  let result;
  if (response.ok) {
    result = await response.json();
  } else {
    console.error(
      "Error in Action from Admin Partners Page. Error Code: " +
        response.status +
        " Text: " +
        response.statusText
    );
    result = {
      message: "Произошла ошибка при создании партнера!",
    };
  }

  return {
    success: response.ok,
    result,
  };
}
