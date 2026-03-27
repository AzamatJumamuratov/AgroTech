import FetchData from "./FetchData.js";

export async function loader() {
  let response = await FetchData("partners/", {
    headers: {
      "Accept-Language": "ru",
    },
  });
  if (response.ok) {
    return await response.json();
  } else {
    console.error(
      "Error Loading About Page. Code : " +
        response.status +
        " Text : " +
        response.statusText
    );
  }

  // return {
  //   results: [
  //     {
  //       id: "1",
  //       name: "Министерство сельского хозяйства Республики Узбекистан",
  //       description: "adadadad",
  //       is_foreign: false,
  //     },
  //   ],
  // };
}
