import { redirect } from "react-router";
import FetchData from "../FetchData.js";

export async function loader() {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  let response = await FetchData("admin/project-contacts/", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  if (response.ok) {
    return await response.json();
  } else {
    if (response.status == 401) {
      return redirect("/login");
    }
    console.error(
      "Error Loading Admin About Page. Code : " +
        response.status +
        " Text : " +
        response.statusText
    );
  }
}
