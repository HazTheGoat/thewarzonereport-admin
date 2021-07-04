import router from "next/router";
import { useState, useEffect } from "react";
import firebase from "./firebase";

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
		provider.addScope('profile');
		provider.addScope('email');
		firebase.auth().signInWithPopup(provider).then(function (result) {
			// This gives you a Google Access Token.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;
			router.push("/admin")
		});
	}

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
