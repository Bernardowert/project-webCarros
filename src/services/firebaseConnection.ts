import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDTmZrdCX06nJnYOh7AG2AuPgMXbOmD7P8",
  authDomain: "webcarros-6de20.firebaseapp.com",
  projectId: "webcarros-6de20",
  storageBucket: "webcarros-6de20.firebasestorage.app",
  messagingSenderId: "620457032253",
  appId: "1:620457032253:web:c44f6c9d004c6b5f118854"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
// const storage = getStorage(app);


export {db, auth}