
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAkkekCWFcwRWS-BtZqioSRO4YKFyGnoek",
  authDomain: "bimestre-539b1.firebaseapp.com",
  projectId: "bimestre-539b1",
  storageBucket: "bimestre-539b1.firebasestorage.app",
  messagingSenderId: "541919098896",
  appId: "1:541919098896:web:3ff1951d1519b380a2b295"
};

const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

