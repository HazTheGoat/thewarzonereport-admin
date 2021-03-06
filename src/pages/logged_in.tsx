import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthUserContext";

const LoggedIn = () => {
  const { authUser, loading, signOut } = useAuth() as any;
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);

  return (
    <div>
      {loading ? (
        <div>
          <div>Loading....</div>
        </div>
      ) : (
        <>
          <div>
            <div>
              {authUser && (
                <div>Congratulations {authUser?.email}! You are logged in.</div>
              )}
            </div>
          </div>
          <div>
            <div>
              <button onClick={signOut}>Sign out</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LoggedIn;
