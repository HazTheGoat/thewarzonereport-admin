import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../context/AuthUserContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  //Optional error handling
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword, createUserWithGmail } = useAuth();

  const onEmailSignupSubmit = (event) => {
    setError(null);
    if (passwordOne === passwordTwo)
	createUserWithEmailAndPassword(email, passwordOne)
        .then((authUser) => {
          console.log("Success. The user is created in firebase");
          router.push("/logged_in");
        })
        .catch((error) => {
          setError(error.message);
        });
    else setError("Password do not match");
    event.preventDefault();
  };

  const onGmailSignupSubmit = () => {
	createUserWithGmail()
  }

  return (
    <div className="text-center" style={{ padding: "40px 0px" }}>
      <div>
        <div>
		  <br /><br />
		  <button onClick={onGmailSignupSubmit}>or Sign in using gmail</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
