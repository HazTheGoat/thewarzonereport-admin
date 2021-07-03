import styles from "../../styles/Home.module.css";
import WriteToCloudFireStore from "../components/coudFirestore/Write";
import ReadCloudFireStore from "../components/coudFirestore/Read";
import Link from "next/link";
import { useUser } from "../firebase/useUser";
import AppContext from "../store/AppContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const { user, logout } = useUser() as any;

  const context = useContext(AppContext);
  useEffect(() => {
    console.log("context.isAuthenticated", context.isAuthenticated);
  }, []);
  return (
    <div className={styles.container}>
      <h1>is user logged in: {context.isAuthenticated}</h1>
      {user ? (
        <>
          <h1> Welcome {user.name}</h1>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <Link href="/auth">
          <a>Log In!</a>
        </Link>
      )}

      <WriteToCloudFireStore />
      <ReadCloudFireStore />
    </div>
  );
}
