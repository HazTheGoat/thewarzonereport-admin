import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import WriteToCloudFireStore from "../components/coudFirestore/Write";
import ReadCloudFireStore from "../components/coudFirestore/Read";
import Link from "next/link";
import { useUser } from "../firebase/useUser";

export default function Home() {
  const { user, logout } = useUser() as any;

  return (
    <div className={styles.container}>
      <p></p>

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
