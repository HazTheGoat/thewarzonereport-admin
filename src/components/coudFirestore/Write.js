import firebase from "firebase";
import "firebase/firestore";
import { useUser } from "../../firebase/useUser";

const WriteToCloudFireStore = () => {
  const { user, setUser } = useUser();

  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("instances")
        .doc(user.id)
        .set({
          appSettings: {
            name: "Apex gutta",
          },
          users: [
            {
              avatar: "HazTheGoat",
              name: "HazTheGoat",
              platform: "battle2",
              username: "apxteknyc#2849",
              dateOfBirth: "1985-01-02",
            },
            {
              avatar: "HazTheGoat",
              name: "HazTheGoat",
              platform: "battle",
              username: "apxteknyc#2849",
              dateOfBirth: "1985-01-02",
            },
            {
              avatar: "Superkriss",
              name: "Superkriss",
              platform: "battle",
              username: "superKriss#2862",
              dateOfBirth: "1993-06-21",
            },
            {
              avatar: "Josef",
              name: "Josef",
              platform: "battle",
              username: "josef#21281",
              dateOfBirth: "1997-01-03",
            },
            {
              avatar: "Aytee",
              name: "Aytee",
              platform: "battle",
              username: "at91#2813",
              dateOfBirth: "1991-09-22",
            },
            {
              avatar: "Fragments",
              name: "Fragments",
              platform: "battle",
              username: "fragments#21255",
              dateOfBirth: "1997-05-19",
            },
            {
              avatar: "Qezzo",
              name: "Qezzo",
              platform: "battle",
              username: "qezzo#2376",
              dateOfBirth: "1998-10-22",
            },
            {
              avatar: "Skjalg",
              name: "Skjalg",
              platform: "psn",
              username: "SKJALGG",
              dateOfBirth: "1998-04-10",
            },
            {
              avatar: "Anders1337",
              name: "Anders1337",
              platform: "battle",
              username: "d0A#21433",
              dateOfBirth: "1993-05-01",
            },
            {
              avatar: "Qezzo",
              name: "Kdawgz",
              platform: "battle",
              username: "Kenbeast#2482",
              dateOfBirth: "1992-06-11",
            },
            {
              avatar: "Qezzo",
              name: "Akatsk",
              platform: "battle",
              username: "Akatsk#2980",
              dateOfBirth: "1988-09-13",
            },
          ],
          ranks: {
            wood: 0.5,
            iron: 0.7,
            bronze: 0.8,
            silver: 0.9,
            gold: 1,
            platinum: 1.3,
            diamond: 1.5,
            master: 1.6,
            challenger: 2,
            god: 3,
          },
          badges: [
            {
              name: "shield",
              description:
                "This fucker is a beast! He is our bulletspunge. He has the most damage taken this week!",
              active: true,
            },
            {
              name: "traveler",
              description:
                "Enjoys long walks on the beach. Has explored all of Verdansk! This lad has covered most distances this week!",
              active: true,
            },
            {
              name: "deadeye",
              description:
                "The enemy fears him. No one dares run in the open. Legend says henever misses a headshot!",
              active: true,
            },
            {
              name: "pitbull",
              description:
                "He does not shy away from battle, he thrives in it. You can not escape his punishment. He has the most damage done this week!",
              active: true,
            },
            {
              name: "martyr",
              description:
                "The good guy. The Canadian. Like Jesus he sacrifices himself for the squad. He has the most deaths this week.",
              active: true,
            },
          ],
        })
        .then(alert("totally successful"));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Hello</h1>
      <button onClick={sendData}>Send</button>
    </>
  );
};

export default WriteToCloudFireStore;
