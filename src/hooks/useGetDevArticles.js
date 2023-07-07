import { useEffect, useState } from "react";

// Services
import getDevArticles from "../services/getDevArticles";

function useGetDevArticles() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getDevArticles()
      .then((data) => {
        setPosts(data);
      })
      .catch(() => {
        setPosts([]);
      });
  }, []);
  return [posts];
}

export default useGetDevArticles;
