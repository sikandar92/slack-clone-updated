// import firebase from 'firebase';
// const firebaseConfig = {
//   apiKey: 'AIzaSyDbLi3qRRjY_uRfpHPC1jXKzu9aZ6Yt-jU',
//   authDomain: 'slack-clone-9965e.firebaseapp.com',
//   projectId: 'slack-clone-9965e',
//   storageBucket: 'slack-clone-9965e.appspot.com',
//   messagingSenderId: '1094562000209',
//   appId: '1:1094562000209:web:f6ed414805727b33bf7770',
//   measurementId: 'G-G3TXE7XTSB',
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, db, provider };

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAhBgvuOsnEy0FSsD3JsprACCPEpYz-Ho8",
  authDomain: "slack-clone-4a664.firebaseapp.com",
  projectId: "slack-clone-4a664",
  storageBucket: "slack-clone-4a664.appspot.com",
  messagingSenderId: "508728886136",
  appId: "1:508728886136:web:b802ce6ad5590d12193e8d",
  measurementId: "G-J6CT2GVYMQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, db, provider };
