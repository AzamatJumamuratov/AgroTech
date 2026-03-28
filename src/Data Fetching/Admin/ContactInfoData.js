import { redirect } from "react-router";
import FetchData from "../FetchData.js";

export async function loader() {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  let responseContacts = await FetchData("contact-info/", {
    headers: {
      Authorization: getAuthHeader(),
    },
  });
  let responseSocialLinks = await FetchData("social-links/", {
    headers: {
      Authorization: getAuthHeader(),
    },
  });
  if (responseContacts.ok && responseSocialLinks.ok) {
    const contactData = await responseContacts.json();
    const socialLinkData = await responseSocialLinks.json();
    return {
      contacts: contactData,
      socialLinks: socialLinkData,
    };
  } else {
    if (responseContacts.status == 401) {
      return redirect("/login");
    }

    console.error(
      "Error Loading Admin Contact Info Data. Code : " +
        responseContacts.status +
        " Text : " +
        responseContacts.statusText
    );
  }
}
