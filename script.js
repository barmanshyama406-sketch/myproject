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

const chat = document.getElementById("chat");
const message = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

const chatRef = ref(db, "messages");

sendBtn.onclick = () => {
  const text = message.value.trim();

  if (text === "") return;

  push(chatRef, {
    text: text,
    time: Date.now()
  });

  message.value = "";
};

onChildAdded(chatRef, (data) => {
  const msg = document.createElement("p");
  msg.innerText = data.val().text;
  chat.appendChild(msg);
});
