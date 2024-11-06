const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const messagesContainer = document.getElementById("messages");

function addMessage(text, isSent) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.classList.add(isSent ? "sent" : "received");

  const avatarDiv = document.createElement("div");
  avatarDiv.classList.add("message-avatar");

  const textDiv = document.createElement("div");
  textDiv.classList.add("message-text");
  textDiv.textContent = text;

  messageDiv.appendChild(avatarDiv);
  messageDiv.appendChild(textDiv);

  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  const messageText = messageInput.value.trim();
  if (messageText) {
    addMessage(messageText, true);
    messageInput.value = "";
  }
});

messageInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    sendBtn.click();
  }
});

setTimeout(() => {
  addMessage("Saudades de você! 🥰", false);
}, 2000);
