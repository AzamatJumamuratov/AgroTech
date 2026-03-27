import project_image from "../assets/images/project.png";
import ConvertToJSonFormData from "../Utils/FromDataToJson";
import FetchData from "./FetchData";

export async function loader() {
  let response = await FetchData("projects/", {
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
  //       title: "Органическое земледелие",
  //       description:
  //         "Развитие экологически чистых методов выращивания сельскохозяйственных культур.",
  //       image: project_image,
  //     },
  //   ],
  // };
}

export async function action({ request }) {
  const formData = await request.formData();

  let response = await FetchData("project-comments/", {
    method: "POST",
    body: formData,
  });

  let result;
  if (response.ok) {
    result = await response.json();
  } else {
    console.error(
      "Error in Action from Projects Page.Error Code : " +
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
