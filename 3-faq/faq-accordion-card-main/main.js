// 3 - Evento: selecionar todos os containeres onde há uma pergunta
const faqs = document.querySelectorAll(".container");

//para cadar container, adicionar um evento de clique:
faqs.forEach(container => {
    //evento por pergunta
    container.addEventListener("click", () => {

        //adicionar classe "ativo"
        container.classList.toggle("ativo");
    })
})