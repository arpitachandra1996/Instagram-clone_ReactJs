
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAhf9ch4jH7mldFXktm_pD_-vIQSKee6qA",
  authDomain: "instagram-clone-579ec.firebaseapp.com",
  projectId: "instagram-clone-579ec",
  storageBucket: "instagram-clone-579ec.appspot.com",
  messagingSenderId: "539288097858",
  appId: "1:539288097858:web:e96020dd484bd9bd5c49db",
  measurementId: "G-XZP3L38HBR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();