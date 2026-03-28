import { redirect } from "react-router";
import FetchData, { getAuthHeader } from "../FetchData";

export async function loader() {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  let response = await FetchData("admin/project-comments/", {
    headers: {
      Authorization: getAuthHeader(),
    },
  });

  if (response.status == 401) {
    return redirect("/login");
  }
}
