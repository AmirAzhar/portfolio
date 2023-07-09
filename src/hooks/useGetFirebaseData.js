import { useEffect, useState } from "react";

// Services
import getFirebaseData from "../services/getFirebaseData";

function useGetFirebaseData(collectionName) {
  const [data, setData] = useState({ value: [] });
  useEffect(() => {
    getFirebaseData(collectionName)
      .then((snapshot) => {
        if (snapshot.exists()) setData({ value: snapshot.val() });
        else setData({ value: [] });
      })
      .catch((error) => {
        console.error(error);
        setData({ value: [] });
      });
  }, []);
  return [data];
}

export default useGetFirebaseData;
