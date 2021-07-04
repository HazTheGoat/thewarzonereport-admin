import { AppProps } from "next/app";
import router from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useAuth } from "../../context/AuthUserContext";
import firebase from "./../../lib/firebase";

const Users = ({ Component, pageProps }: AppProps) => {
	const { authUser, loading } = useAuth() as any;
	const [users, setUsers] = useState<any>([]);

	useEffect(() => {
		if (!loading && !authUser) router.push("/");
	}, [authUser, loading]);


	useEffect(() => {
		console.log(authUser)
		if(!authUser) return;
		try {
			firebase
				.firestore()
				.collection("instances")
				.doc(authUser.uid)
				.onSnapshot((doc) => {
					console.log("DATA: ", doc.data());
					setUsers(doc.data())
				});
		} catch (error) {
			console.log(error);
		}
	}, [authUser])

	return (
		<Layout>
			<h1>Users</h1>

		<code>{ users }</code>
		</Layout>
	);
};

export default Users;
