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
const username = document.getElementById("username");


const chatRef = ref(db, "messages");


sendBtn.onclick = () => {

  let text = message.value.trim();
  let name = username.value.trim();

  if (text === "") return;

  if (name === "") {
    name = "User";
  }

  push(chatRef, {
    name: name,
    text: text,
    time: Date.now()
  });

  message.value = "";

};


onChildAdded(chatRef, (data) => {

  const msg = document.createElement("div");
  msg.className = "msg";


  const name = data.val().name;
  const text = data.val().text;

  const time = new Date(data.val().time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });


  msg.innerHTML = `
    <b>${name}</b><br>
    <span>${text}</span>
    <small>${time}</small>
  `;


  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;

});


console.log("Chat Ready");
