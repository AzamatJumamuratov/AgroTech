const base_url = "https://aza.imaster.uz/api/";

export default async function FetchData(path, options) {
  return fetch(base_url + path, options);
}

// Хелпер для получения заголовка авторизации
export function getAuthHeader() {
  const token = localStorage.getItem("token");
  const tokenType = localStorage.getItem("token_type") || "Token";
  return token ? `${tokenType} ${token}` : "";
}
