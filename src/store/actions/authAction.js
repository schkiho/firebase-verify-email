export const signIn = (credentials) => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  try {
    await firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password);
    dispatch({ type: 'LOGIN_SUCCESS' });
  } catch (err) {
    dispatch({ type: 'LOGIN_ERROR', err });
  }
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.auth().signOut();
    dispatch({ type: 'SIGNOUT_SUCCESS' });
  } catch (err) {
    console.log(err.message);
  }
};

export const signUp = (newUser) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password);

    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();

    await firestore
      .collection('users')
      .doc(res.user.uid)
      .set({
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0],
      });
    dispatch({ type: 'SIGNUP_SUCCESS' });
  } catch (err) {
    dispatch({ type: 'SIGNUP_ERROR', err });
  }
};

export const verifyEmail = () => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  try {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    dispatch({ type: 'VERIFY_SUCCESS' });
  } catch (err) {
    dispatch({ type: 'VERIFY_ERROR', err });
  }
};
