import ConvertToJSonFormData from "../Utils/FromDataToJson";
import FetchData from "./FetchData";

export async function action({ params, request }) {
  const formData = await request.formData();

  const dataJson = ConvertToJSonFormData(formData);
  let response = await FetchData("project-contacts/", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: dataJson,
  });

  let result;
  if (response.ok) {
    result = await response.json();
  } else {
    console.error(
      "Error Sending Contacts. Code : " +
        response.status +
        " Text : " +
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

  // return {
  //   success: false,
  //   result: {
  //     message: "sdada",
  //   },
  // };
}
