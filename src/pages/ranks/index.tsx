import { AppProps } from "next/app";
import router from "next/router";
import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { useAuth } from "../../context/AuthUserContext";

const Ranks = ({ Component, pageProps }: AppProps) => {
	const { authUser, loading } = useAuth() as any;

	useEffect(() => {
		if (!loading && !authUser) router.push("/");
	}, [authUser, loading]);

	return (
		<Layout>
			<h1>Ranks</h1>
		</Layout>
	);
};

export default Ranks;
