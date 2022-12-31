
import { initializeApp } from "firebase/app";


//autenticacao
import {getAuth} from 'firebase/auth'

//firestore
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNCkYfsEt_ZUDCLoS9WzJ-T3sKWpTTHwg",
  authDomain: "magni-challenge.firebaseapp.com",
  projectId: "magni-challenge",
  storageBucket: "magni-challenge.appspot.com",
  messagingSenderId: "706387627064",
  appId: "1:706387627064:web:885df735653e7e4b0a6acd"
};


const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)



export default app