import { redirect } from "react-router";
import ConvertToJSonFormData from "../../Utils/FromDataToJson";
import FetchData from "../FetchData";

export async function RegisterAction({ request, params }) {
  const formData = await request.formData();
  let response = await FetchData("admin/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: ConvertToJSonFormData(formData),
  });
  if (response.ok) {
    return redirect("/login");
  } else {
    console.error(
      "Error Registering Admin. Code : " +
        response.status +
        " Text : " +
        response.statusText
    );
    return await response.json();
  }
}
