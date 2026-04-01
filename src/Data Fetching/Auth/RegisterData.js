import { redirect } from "react-router";
import ConvertToJSonFormData from "../../Utils/FromDataToJson";
import FetchData from "../FetchData";

export async function RegisterAction({ request, params }) {
  const formData = await request.formData();
  let response = await FetchData("accounts/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: ConvertToJSonFormData(formData),
  });
  if (response.ok) {
    let result = await response.json();
    // Автоматически логиним после регистрации
    localStorage.setItem("token", result.tokens.access);
    localStorage.setItem("refresh_token", result.tokens.refresh);
    localStorage.setItem("token_type", "Bearer");
    return redirect("/");
  } else {
    console.error(
      "Error Registering. Code : " +
        response.status +
        " Text : " +
        response.statusText
    );
    return await response.json();
  }
}
