import { useEffect, useState } from "react";

// Services
import getFirebase from "../services/getFirebase";

function useGetFirebase(collectionName) {
  const [data, setData] = useState({ value: [] });
  useEffect(() => {
    getFirebase(collectionName)
      .then((snapshot) => {
        if (snapshot.exists()) setData({ value: snapshot.val() });
        else setData({ value: [] });
      })
      .catch((error) => {
        console.error(error);
        setData({ value: [] });
      });
  }, [collectionName]);
  return [data];
}

export default useGetFirebase;
