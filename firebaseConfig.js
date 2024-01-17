// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADIq7Wxecu9Hj8fN4A3mLFfh3PHkpEIHM",
  authDomain: "four-atoms.firebaseapp.com",
  projectId: "four-atoms",
  storageBucket: "four-atoms.appspot.com",
  messagingSenderId: "772833235324",
  appId: "1:772833235324:web:70e25f7d6ba4b85e84d4f9",
  measurementId: "G-0YL3H1TVMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const firestore = getFirestore(app);

export { auth, createUserWithEmailAndPassword, firestore };