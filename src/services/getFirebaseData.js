import { getDatabase, ref, child, get } from "firebase/database";
import { app } from "../firebase";

export default function getFirebaseData(collectionName) {
  const dbRef = ref(getDatabase(app));
  return get(child(dbRef, collectionName));
}
