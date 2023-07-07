import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from "../firebase";

export default function getFirebaseItem(itemName) {
  return getDownloadURL(ref(getStorage(app), itemName));
}
