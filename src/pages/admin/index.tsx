import { AppProps } from "next/app";
import { useEffect, useContext } from "react";
import { useUser } from "../../firebase/useUser";
import router from "next/router";
import AppContext from "../../store/AppContext";

const Admin = ({ Component, pageProps }: AppProps) => {
  const { user, setUser } = useUser();
  const context = useContext(AppContext);

  useEffect(() => {
    console.log("context.isAuthenticated", context.isAuthenticated);
  }, []);
  return (
    <>
      <h1>Admin panel</h1>
    </>
  );
};

export default Admin;
