import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA0wrFNtKh7KY4YTf0VWLlm31aju10h4l4",
    authDomain: "resturantapp-9ccc0.firebaseapp.com",
    databaseURL: "https://resturantapp-9ccc0-default-rtdb.firebaseio.com",
    projectId: "resturantapp-9ccc0",
    storageBucket: "resturantapp-9ccc0.appspot.com",
    messagingSenderId: "229133982870",
    appId: "1:229133982870:web:5ae885a677f389a05536b7"
};

const app = getApps.length > 0 ? getApp : initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };