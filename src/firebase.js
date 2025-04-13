// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB50Z_yX_yLZmLdjrhZzAChLPJNtyFxG9Q",
  authDomain: "gift-comm.firebaseapp.com",
  projectId: "gift-comm",
  storageBucket: "gift-comm.appspot.com",
  messagingSenderId: "499505895560",
  appId: "1:499505895560:web:830fea196670b41b8ba73d",
  measurementId: "G-XCMX8JXZDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optionally initialize analytics if you plan to use it
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth, analytics ,db};
