// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjEpqKYy17fwmOMGM22_PUWrNlODqFSMk",
  authDomain: "community-fb521.firebaseapp.com",
  projectId: "community-fb521",
  storageBucket: "community-fb521.appspot.com",
  messagingSenderId: "889407001088",
  appId: "1:889407001088:web:fa437441f55f6b5f6a7ee5",
  measurementId: "G-YGXZDBVT9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;