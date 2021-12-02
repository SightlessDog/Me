// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC6QbjGz-eXSFEJGXQmaeK8PT1Z9WyfICU',
  authDomain: 'portfolio-1609193644545.firebaseapp.com',
  projectId: 'portfolio-1609193644545',
  storageBucket: 'portfolio-1609193644545.appspot.com',
  messagingSenderId: '589510131350',
  appId: '1:589510131350:web:d542308314bd623a014cb7',
  measurementId: 'G-Y4V7GWTERM',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.getStorage(app);
const projectFirestore = firebase.getFirestore(app);

export { projectStorage, projectFirestore };
