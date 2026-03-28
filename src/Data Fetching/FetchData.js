const base_url = "https://aza.imaster.uz/api/";

export default async function FetchData(path, options) {
  return fetch(base_url + path, options);
}
