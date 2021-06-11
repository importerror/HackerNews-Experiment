import { formatJsonData } from "./helper";

export function searchQuery(search) {
  let queryString = `https://hn.algolia.com/api/v1/search?query=${search}&hitsPerPage=10`;

  return fetch(queryString, {
    method: "GET",
  })
    .then((r) => r.json())
    .then((r) => formatJsonData(r.hits))
    .catch((error) => {
      console.error(error);
      return [];
    });
}
