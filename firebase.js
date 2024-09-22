// Import Firebase and Firestore SDK
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'; // Firestore methods
import { getDatabase } from 'firebase/database';  // Realtime Database (if you're using it)
import { getAuth, GoogleAuthProvider } from 'firebase/auth';  // Firebase Authentication



// Firebase configuration (replace with your config from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyDMhiJ_9kkonTNeBXVONZ55pgaB_761dWE",
  authDomain: "studentmisportal.firebaseapp.com",
  projectId: "studentmisportal",
  storageBucket: "studentmisportal.appspot.com",
  messagingSenderId: "692065787875",
  appId: "1:692065787875:web:b031bcfbaa6c22b5530ad6",
  measurementId: "G-79Q2TQH3WD"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firestore instance
const firestore = getFirestore(app);

// Realtime Database instance (optional)
const database = getDatabase(app);

// Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Define and export the `addDocument` function for adding a document to Firestore
export async function addDocument(collection, docId, data) {
  try {
    await setDoc(doc(firestore, collection, docId), data);
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
}

// Define and export the `getDocument` function for reading a document from Firestore
export async function getDocument(collection, docId) {
  const docRef = doc(firestore, collection, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
}

// Export other Firebase services if needed
export { firestore, database, auth, provider };
