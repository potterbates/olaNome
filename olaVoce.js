const form = document.querySelector("form");
const mensagem = document.querySelector("h1");

form.addEventListener("submit", (e) => {
    const nome = form.inputNome.value;
    mensagem.innerText = `Olá, ${nome}.`;
    e.preventDefault();
})