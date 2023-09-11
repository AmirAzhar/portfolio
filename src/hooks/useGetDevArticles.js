import { useEffect, useState } from "react";

// Services
import getDevArticles from "../services/getDevArticles";

function useGetDevArticles() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getDevArticles()
      .then((data) => {
        setPosts(data);
      })
      .catch(() => {
        setPosts([]);
      })
      .finally(() => setLoading(false));
  }, []);
  return [posts, loading];
}

export default useGetDevArticles;
