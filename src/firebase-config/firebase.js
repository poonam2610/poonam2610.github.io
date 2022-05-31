import firebase from "firebase";


import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAMlYsCAB6X5zTNCaoFJyE7auDPOGZ1ppw",
    authDomain: "ecommerce-c704f.firebaseapp.com",
    projectId: "ecommerce-c704f",
    storageBucket: "ecommerce-c704f.appspot.com",
    messagingSenderId: "861102569963",
    appId: "1:861102569963:web:b17ccbbc47cc93a85e81ae",
    measurementId: "G-2T0JS1BBYG"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

const userRef = (uid) => db.collection("user").doc(uid);

const clearFirebaseBasket = (user) => {
    userRef(user?.uid).update({
        basket: [],
    });
};

export {
    app,
    db,
    auth,
    googleAuthProvider,
    facebookAuthProvider,
    userRef,
    firebase,
    clearFirebaseBasket,
};

// import app from "firebase/app";
// import "firebase/auth";
// import "firebase/database";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyBK4_JrXqh0GOAFJpz-XXqszW7t7Ey8DF4",
//   authDomain: "wardrobe-2bdbc.firebaseapp.com",
//   projectId: "wardrobe-2bdbc",
//   storageBucket: "wardrobe-2bdbc.appspot.com",
//   messagingSenderId: "962108832243",
//   appId: "1:962108832243:web:cc6c830287fedbf1757a86",
//   measurementId: "G-6P0TLJT65C",
// };

// class Firebase {
//   constructor() {
//     this.app = app.initializeApp(firebaseConfig);
//     this.db = app.database();
//     this.auth = app.auth();
//     this.googleAuthProvider = new app.auth.GoogleAuthProvider();
//     this.facebookAuthProvider = new app.auth.FacebookAuthProvider();
//   }

//   doGoogleSignIn = () => this.auth.signInWithPopup(this.googleAuthProvider);
//   doFacebookSignIn = () => this.auth.signInWithPopup(this.facebookAuthProvider);

//   doPhoneSignIn = (phone, recaptcha) => {
//     return this.auth.signInWithPhoneNumber(phone, recaptcha);
//   };
//   user = (uid) => this.db.ref(`/users/${uid}`);
// }

// export default Firebase;