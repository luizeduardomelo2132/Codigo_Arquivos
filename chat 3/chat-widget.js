(function() {
  // Evita carregar duas vezes
  if (window.ChatWidgetLoaded) return;
  window.ChatWidgetLoaded = true;

  // === CONFIGURAÇÕES ===
  const CHAT_URL = "chat.html"; // Caminho para seu chat
  const BUTTON_COLOR = "#2563eb";

  // === CRIA BOTÃO ===
  const btn = document.createElement("div");
  btn.id = "chatbot-btn";
  btn.innerHTML = "💬";
  Object.assign(btn.style, {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "60px",
    height: "60px",
    background: BUTTON_COLOR,
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    cursor: "pointer",
    zIndex: "99999",
    transition: "transform 0.2s ease"
  });
  btn.onmouseover = () => btn.style.transform = "scale(1.1)";
  btn.onmouseout = () => btn.style.transform = "scale(1)";

  // === CRIA JANELA DO CHAT ===
  const chatWin = document.createElement("div");
  chatWin.id = "chatbot-window";
  Object.assign(chatWin.style, {
    position: "fixed",
    bottom: "100px",
    right: "24px",
    width: "420px",
    height: "600px",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
    display: "none",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: "99999",
    border: "1px solid #e5e7eb"
  });

  const header = document.createElement("div");
  Object.assign(header.style, {
    background: BUTTON_COLOR,
    color: "white",
    padding: "10px 14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  });
  const title = document.createElement("h4");
  title.textContent = "Assistente de Agendamento";
  title.style.margin = "0";
  title.style.fontSize = "15px";

const closeBtn = document.createElement("button");
closeBtn.innerHTML = "✖";
Object.assign(closeBtn.style, {
  background: "none",
  border: "none",
  color: "white",
  fontSize: "18px",
  cursor: "pointer",
  marginRight: "24px", // encosta mais no canto
  transform: "translateY(-1px)", // centraliza verticalmente
  transition: "opacity 0.2s ease"
});
closeBtn.onmouseover = () => closeBtn.style.opacity = "0.7";
closeBtn.onmouseout = () => closeBtn.style.opacity = "1";
closeBtn.onclick = () => chatWin.style.display = "none";

  header.appendChild(title);
  header.appendChild(closeBtn);
  chatWin.appendChild(header);

  const iframe = document.createElement("iframe");
  iframe.src = CHAT_URL;
  Object.assign(iframe.style, {
    border: "none",
    width: "100%",
    height: "100%",
    flex: "1"
  });
  chatWin.appendChild(iframe);

  // === INSERE NO SITE ===
  document.body.appendChild(btn);
  document.body.appendChild(chatWin);

  btn.onclick = () => {
    chatWin.style.display = chatWin.style.display === "flex" ? "none" : "flex";
    chatWin.style.flexDirection = "column";
  };

  // === RESPONSIVO ===
  window.addEventListener("resize", () => {
    if (window.innerWidth < 520) {
      chatWin.style.width = "95%";
      chatWin.style.right = "2.5%";
      chatWin.style.height = "85%";
    } else {
      chatWin.style.width = "420px";
      chatWin.style.right = "24px";
      chatWin.style.height = "600px";
    }
  });
})();
