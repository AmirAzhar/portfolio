import { useEffect, useState } from "react";

// Services
import getFirebaseItem from "../services/getFirebaseItem";

function useGetFirebaseItem(itemList) {
  const [urlList, setUrlList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Promise.all(itemList.map((item) => getFirebaseItem(item)))
      .then((res) => setUrlList(res))
      .catch((error) => {
        console.error(error);
        setUrlList([""]);
      })
      .finally(() => setLoading(false));
  }, []);
  return [urlList, loading];
}

export default useGetFirebaseItem;
