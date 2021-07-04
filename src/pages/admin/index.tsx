import { AppProps } from "next/app";
import router from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthUserContext";

const Admin = ({ Component, pageProps }: AppProps) => {
	const { authUser, loading } = useAuth() as any;

	useEffect(() => {
		if (!loading && !authUser) router.push("/");
	}, [authUser, loading]);

	return (
		<>
			<h1>Admin panel</h1>
		</>
	);
};

export default Admin;
