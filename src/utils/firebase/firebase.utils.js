import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  writeBatch,
  doc,
  query,
  getDocs,
  getDoc,
  setDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

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

const auth = getAuth();

export const createUserDoc = async (userAuth, additionalInfo = {}) => {
  const userDoc = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDoc);
  if (!userSnapShot.exists()) {
    const { displayName, email, number } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDoc, {
        displayName,
        email,
        number,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("There was an error creating user doc, ", error);
    }
  }
  return userSnapShot;
};

export const createUserAuth = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const signInAuth = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};
