
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Cole aqui o firebaseConfig que você acabou de enviar
const firebaseConfig = {
    apiKey: "AIzaSyAkkekCWFcwRWS-BtZqioSRO4YKFyGnoek",
  authDomain: "bimestre-539b1.firebaseapp.com",
  projectId: "bimestre-539b1",
  storageBucket: "bimestre-539b1.firebasestorage.app",
  messagingSenderId: "541919098896",
  appId: "1:541919098896:web:f261d6b8d1622b87a2b295"
};

const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
