import { AppProps } from "next/app";
import router from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useAuth } from "../../context/AuthUserContext";
import firebase from "./../../lib/firebase";
import User from "./_user";

const Users = ({ Component, pageProps }: AppProps) => {
  const { authUser, loading } = useAuth() as any;
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading]);

  useEffect(() => {
    if (!authUser) return;
    try {
      firebase
        .firestore()
        .collection("instances")
        .doc(authUser.uid)
        .onSnapshot((doc) => {
          console.log("DATA: ", doc.data());
          const data = doc.data();

          setUsers(data?.users);
        });
    } catch (error) {
      console.log(error);
    }
  }, [authUser]);

  const addBlankUserHandler = () => {
    setUsers((prevState: any) => {
      return [
        ...prevState,
        {
          avatar: "derp",
          name: "derp",
          platform: "derp",
          username: "derp",
        },
      ];
    });
  };

  const saveUsersHandler = () => {
    firebase
      .firestore()
      .collection("instances")
      .doc(authUser.uid)
      .update({
        users,
      })
      .then();
  };

  const updateUserHandler = (updatedUser: any) => {
    // do some stuff

    setUsers((prevState: any) => {
      console.log("prevState", prevState);
      let usersCopy = [...prevState];
      let indexOfUser = usersCopy.findIndex(
        (user) => user.name === updatedUser.name
      );

      usersCopy[indexOfUser] = updatedUser;

      return usersCopy;
    });
  };

  return (
    <Layout>
      <h1>Users</h1>
      {users.map((user: any, i: number) => (
        <div key={i}>
          <h3>User #{i + 1}</h3>
          <User user={user} updateUser={updateUserHandler} />
        </div>
      ))}
      <button onClick={addBlankUserHandler}>Add another user</button>
      <button onClick={saveUsersHandler}>Save users</button>
    </Layout>
  );
};

export default Users;
