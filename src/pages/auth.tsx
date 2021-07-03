import FirebaseAuth from "../components/auth/FirebaseAuth";
import Link from "next/link";

const Auth = () => {
  return (
    <div>
      <FirebaseAuth />

      <Link href="/">
        <a>Go home</a>
      </Link>
    </div>
  );
};

export default Auth;
