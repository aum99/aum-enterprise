import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  writeBatch,
  doc,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAood0m1hh7lFJqhtYIWA3CuTt1_BcCIoc",
  authDomain: "aum-enterprise.firebaseapp.com",
  projectId: "aum-enterprise",
  storageBucket: "aum-enterprise.appspot.com",
  messagingSenderId: "899558090168",
  appId: "1:899558090168:web:87d813d5cf8c28758f5b4d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("Added categories to the firestore successfully!");
};

export const getCollectionAndCategories = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => {
    return docSnapshot.data();
  });
};
