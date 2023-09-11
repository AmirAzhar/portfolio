import { useEffect, useState } from "react";

// Services
import getFirebaseData from "../services/getFirebaseData";

function useGetFirebaseCollection(collectionName) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getFirebaseData(collectionName)
      .then((snapshot) => {
        if (snapshot.exists()) setData(snapshot.val());
        else setData([]);
      })
      .catch((error) => {
        console.error(error);
        setData([]);
      })
      .finally(() => setLoading(false));
  }, []);
  return [data, loading];
}

export default useGetFirebaseCollection;
