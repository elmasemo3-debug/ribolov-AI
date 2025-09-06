async function sendMessage() {
  const input = document.getElementById("userInput");
  const messages = document.getElementById("messages");
  const userText = input.value;
  if (!userText) return;

  messages.innerHTML += `<div class="message user">Ti: ${userText}</div>`;
  input.value = "";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
 console.log("Status:", response.status);
const data = await response.json();
console.log("Odgovor:", data);
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer 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"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userText }]
    })
  });

  const data = await response.json();
  const aiText = data.choices[0].message.content;
  messages.innerHTML += `<div class="message ai">AI: ${aiText}</div>`;
}

