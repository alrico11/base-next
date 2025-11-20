import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDlUhqP2qHRoDw42pNsVmwzczHPRfu_LDM",
  authDomain: "com-laparaga-app.firebaseapp.com",
  projectId: "com-laparaga-app",
  messagingSenderId: "1090432985181",
  appId: "1:1090432985181:web:a5099c51a9fe7e84a685b4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and export
export const auth = getAuth(app);