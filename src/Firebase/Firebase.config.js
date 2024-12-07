// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWKrHEtXof6thybtk2JpVMWjd7oAUfHfo",
  authDomain: "movies--cloud.firebaseapp.com",
  projectId: "movies--cloud",
  storageBucket: "movies--cloud.firebasestorage.app",
  messagingSenderId: "204841376687",
  appId: "1:204841376687:web:89b8bd6cb6ad5f29c52d5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;