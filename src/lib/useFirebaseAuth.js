import router from "next/router";
import { useState, useEffect } from "react";
import firebase from "./firebase";
import { initialDatabaseData } from "./../constants/data";
import "firebase/firestore";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setLoading(false);
      return;
    }

    setLoading(true);

    var formattedUser = formatAuthUser(authState);

    setAuthUser(formattedUser);

    setLoading(false);
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };
  const createUserWithGmail = () => {
    // Using a popup.
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        if (result.additionalUserInfo.isNewUser) {
          initiateNewAccount(result.user.uid);
        }

        router.push("/admin");
      });
  };

  const initiateNewAccount = (userId) => {
    firebase
      .firestore()
      .collection("instances")
      .doc(userId)
      .set(initialDatabaseData)
      .then();
  };

  const signOut = () => firebase.auth().signOut().then(clear);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    createUserWithGmail,
    signOut,
  };
}
