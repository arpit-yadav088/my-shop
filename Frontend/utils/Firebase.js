// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "loginshopcart-b0d43.firebaseapp.com",
//   projectId: "loginshopcart-b0d43",
//   storageBucket: "loginshopcart-b0d43.firebasestorage.app",
//   messagingSenderId: "796867539232",
//   appId: "1:796867539232:web:90262c6a45c34cb5dce745"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// const provider = new GoogleAuthProvider()

// export {auth , provider}

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "login-44360.firebaseapp.com",
  projectId: "login-44360",
  storageBucket: "login-44360.firebasestorage.app",
  messagingSenderId: "195588628952",
  appId: "1:195588628952:web:b0ef0a1e32f786991752ad"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}