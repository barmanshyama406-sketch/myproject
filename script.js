const chat = document.getElementById("chat");
const message = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
  if (message.value.trim() === "") return;

  chat.innerHTML += `<p><b>You:</b> ${message.value}</p>`;
  message.value = "";
  chat.scrollTop = chat.scrollHeight;
});
