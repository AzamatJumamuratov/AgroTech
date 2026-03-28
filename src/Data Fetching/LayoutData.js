import FetchData from "./FetchData";

export async function Loader() {
  const responseContacts = await FetchData("contact-info/");
  const responseSocialLinks = await FetchData("social-links/");

  if (responseContacts.ok && responseSocialLinks.ok) {
    const contactData = await responseContacts.json();
    const socialLinkData = await responseSocialLinks.json();
    return {
      contacts: contactData,
      social_links: socialLinkData,
    };
  } else {
    console.error("Error fetching Footer data");
  }

  return { contacts: {}, social_links: {} };
}
