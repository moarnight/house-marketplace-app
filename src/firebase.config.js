import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCVASeQy2UFokrL1Yxks1rY6IB3yXm1MRA',
  authDomain: 'house-marketplace-app-18e50.firebaseapp.com',
  projectId: 'house-marketplace-app-18e50',
  storageBucket: 'house-marketplace-app-18e50.appspot.com',
  messagingSenderId: '328790701290',
  appId: '1:328790701290:web:1f28ff1f34d8c205bad393',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
