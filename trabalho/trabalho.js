document.getElementById("form-agendamento").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const especialidade = document.getElementById("especialidade").value;
    const data = document.getElementById("data").value;
    const canal = document.getElementById("canal").value;

    if (!nome || !email || !telefone || !especialidade || !data || !canal) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const lista = document.getElementById("lista-consultas");
    const item = document.createElement("li");
    item.innerHTML = `
        <strong>${nome}</strong> - ${especialidade}<br>
        📅 ${data} | 📞 ${canal}<br>
        <small>${email} - ${telefone}</small>
    `;
    lista.appendChild(item);

    alert("Solicitação enviada com sucesso!");

    document.getElementById("form-agendamento").reset();
});
