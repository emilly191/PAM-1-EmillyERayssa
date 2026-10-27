import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase Console > Configurações do projeto > Seus apps > Web
export const firebaseConfig = {
  apiKey: 'COLOQUE_SUA_API_KEY',
  authDomain: 'COLOQUE_SEU_AUTH_DOMAIN',
  projectId: 'COLOQUE_SEU_PROJECT_ID',
  storageBucket: 'COLOQUE_SEU_STORAGE_BUCKET',
  messagingSenderId: 'COLOQUE_SEU_MESSAGING_SENDER_ID',
  appId: 'COLOQUE_SEU_APP_ID',
};
export const firebaseReady = !Object.values(firebaseConfig).some(v => String(v).startsWith('COLOQUE_'));
const app = firebaseReady ? (getApps().length ? getApp() : initializeApp(firebaseConfig)) : null;
export const db = app ? getFirestore(app) : null;
