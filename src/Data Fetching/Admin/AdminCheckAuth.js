import { redirect } from "react-router";
import FetchData from "../FetchData";

export async function loader() {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  let response = await FetchData("admin/project-comments/", {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  if (response.status == 401) {
    return redirect("/login");
  }
}
