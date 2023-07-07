export default function getDevArticles() {
  return fetch("https://dev.to/api/articles?username=amehpls").then(
    (response) => response.json()
  );
}
