import { useEffect, useState } from "react";

// Services
import getFirebaseItem from "../services/getFirebaseItem";

function useGetFirebaseItem(itemList) {
  const [urlList, setUrlList] = useState([]);
  useEffect(() => {
    Promise.all(itemList.map((item) => getFirebaseItem(item)))
      .then((res) => setUrlList(res))
      .catch((error) => {
        console.error(error);
        setUrlList([""]);
      });
  }, []);
  return [urlList];
}

export default useGetFirebaseItem;
