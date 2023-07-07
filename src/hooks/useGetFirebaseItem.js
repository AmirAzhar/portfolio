import { useEffect, useState } from "react";

// Services
import getFirebaseItem from "../services/getFirebaseItem";

function useGetFirebaseItem(itemName) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    getFirebaseItem(itemName)
      .then((urlRes) => setUrl(urlRes))
      .catch((error) => {
        console.error(error);
        setUrl("");
      });
  });
  return [url];
}

export default useGetFirebaseItem;
