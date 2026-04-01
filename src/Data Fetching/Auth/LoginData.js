import { redirect } from "react-router";
import ConvertToJSonFormData from "../../Utils/FromDataToJson";
import FetchData from "../FetchData";

export async function LoginAction({ request, params }) {
  const formData = await request.formData();

  // Пробуем accounts/login/ (JWT — для всех юзеров)
  let response = await FetchData("accounts/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: ConvertToJSonFormData(formData),
  });

  if (response.ok) {
    let result = await response.json();
    // Сохраняем JWT access токен
    localStorage.setItem("token", result.tokens.access);
    localStorage.setItem("refresh_token", result.tokens.refresh);
    localStorage.setItem("token_type", "Bearer");

    // Если юзер — staff, редиректим в админку, иначе в чат
    if (result.user?.is_staff) {
      return redirect("/admin");
    }
    return redirect("/");
  } else {
    // Fallback: пробуем admin/login/ (DRF Token — для админов)
    let adminResponse = await FetchData("admin/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: ConvertToJSonFormData(formData),
    });

    if (adminResponse.ok) {
      let result = await adminResponse.json();
      localStorage.setItem("token", result.token);
      localStorage.setItem("token_type", "Token");
      return redirect("/admin");
    }

    // Оба не сработали — возвращаем ошибку
    return await response.json();
  }
}
