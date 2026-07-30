import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onChildAdded
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHuie3BYhnsG8XgXP_Dn3-fmqrOq0UhCA",
  authDomain: "simple-chat-29379.firebaseapp.com",
  databaseURL: "https://simple-chat-29379-default-rtdb.firebaseio.com",
  projectId: "simple-chat-29379",
  storageBucket: "simple-chat-29379.firebasestorage.app",
  messagingSenderId: "110265526293",
  appId: "1:110265526293:web:bd5796795b1beb1c32061c"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Firebase Connected");
