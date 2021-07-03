import firebase from "firebase";
import "firebase/firestore";
import { useUser } from "../../firebase/useUser";

const ReadCloudFireStore = () => {
  const { user, setUser } = useUser();
  const readData = () => {
    try {
      firebase
        .firestore()
        .collection("instances")
        .doc(user.id)
        .onSnapshot((doc) => {
          console.log("DATA: ", doc.data());
        });
    } catch (error) {
      console.log(error);
    }
  };
  return <button onClick={readData}>Read data from cloud</button>;
};
export default ReadCloudFireStore;
