import app from "../../firebase";

const auth = app.auth();
const db = app.firestore();

export const registerUser = async (data) => {
  try {
    await auth.createUserWithEmailAndPassword(data.email, data.password);

    const user = auth.currentUser;
    await user.sendEmailVerification();

    await db.collection("users").doc(user.uid).set({
      firstName: data.Firstname,
      lastName: data.Lastname,
      email: data.email,
      createdAt: new Date(),
    });
  } catch (err) {
    console.log("error", err.message);
  }
};

export const loginUser = async (data) => {
  try {
    auth.signInWithEmailAndPassword(data.email, data.password);
  } catch (err) {
    console.log("error", err.message);
  }
};

export const logOutUser = () => {
  auth.signOut();
};
