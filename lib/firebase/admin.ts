import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from '../../scripts/serviceAccountKey.json';

// Initialize Firebase Admin SDK
const apps = getApps();
let adminApp;

if (apps.length === 0) {
  adminApp = initializeApp({
    credential: cert(serviceAccount as any),
    projectId: 'abogado-gentile'
  });
} else {
  adminApp = apps[0];
}

const adminDb = getFirestore(adminApp);

export { adminDb };
