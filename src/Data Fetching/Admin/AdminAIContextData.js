import { redirect } from "react-router";
import FetchData from "../FetchData.js";

export async function loader() {
  const token = localStorage.getItem("token");
  if (!token) return redirect("/login");

  const tokenType = localStorage.getItem("token_type") || "Token";
  let response = await FetchData("admin/ai-context/", {
    headers: {
      Authorization: `${tokenType} ${token}`,
    },
  });

  if (response.ok) {
    return await response.json();
  }
  if (response.status === 401) return redirect("/login");

  console.error("Error loading AI contexts:", response.status);
  return { results: [] };
}

export async function action({ request }) {
  const token = localStorage.getItem("token");
  const tokenType = localStorage.getItem("token_type") || "Token";
  const formData = await request.formData();

  const data = {
    key: formData.get("key"),
    title: formData.get("title"),
    content: formData.get("content"),
    is_active: formData.get("is_active") === "true",
    priority: parseInt(formData.get("priority") || "0"),
  };

  let response = await FetchData("admin/ai-context/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${tokenType} ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return { success: true, result: await response.json() };
  }

  const errorData = await response.json().catch(() => ({}));
  return {
    success: false,
    result: { message: "Ошибка создания контекста", ...errorData },
  };
}
