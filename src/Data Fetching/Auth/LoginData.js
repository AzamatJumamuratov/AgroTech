import { redirect } from "react-router";
import ConvertToJSonFormData from "../../Utils/FromDataToJson";
import FetchData from "../FetchData";

export async function LoginAction({ request, params }) {
  const formData = await request.formData();
  let response = await FetchData("admin/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: ConvertToJSonFormData(formData),
  });
  if (response.ok) {
    let result = await response.json();
    localStorage.setItem("token", result.token);

    return redirect("/admin");
  } else {
    console.error(
      "Error Logining Page. Code : " +
        response.status +
        " Text : " +
        response.statusText
    );
    return await response.json();
  }
}
