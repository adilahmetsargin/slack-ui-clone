import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDBOFlXaLaGUnC2wWoYfOCrYucjwSoS80Y",
    authDomain: "slack-clone-c57fd.firebaseapp.com",
    projectId: "slack-clone-c57fd",
    storageBucket: "slack-clone-c57fd.appspot.com",
    messagingSenderId: "113922140621",
    appId: "1:113922140621:web:cb3267c7eac174639fbc84"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider }