import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: 'feedback-hub-project.firebaseapp.com',
  databaseURL: 'https://feedback-hub-project-default-rtdb.firebaseio.com/',
  projectId: 'feedback-hub-project',
  storageBucket: 'feedback-hub-project.appspot.com',
  messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database