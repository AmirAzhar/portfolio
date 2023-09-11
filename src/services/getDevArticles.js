export default async function getDevArticles() {
  const res = await fetch("https://dev.to/api/articles?username=amehpls");
  return res.json();
}
