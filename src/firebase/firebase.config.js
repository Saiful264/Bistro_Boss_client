// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6baOoxEp5YgcTTk-gUYvHAqV5nsHgPL8",
  authDomain: "bistro-boss-17325.firebaseapp.com",
  projectId: "bistro-boss-17325",
  storageBucket: "bistro-boss-17325.appspot.com",
  messagingSenderId: "817124428157",
  appId: "1:817124428157:web:d74d0e76e8ce73269aa414"
};

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.envVITE_APIKEY,
//   authDomain: import.meta.envVITE_AUTHDOMAIN,
//   projectId: import.meta.envVITE_PROJECTID,
//   storageBucket: import.meta.envVITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.envVITE_MESSAGINGSENDERID,
//   appId: import.meta.envVITE_APPID
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);