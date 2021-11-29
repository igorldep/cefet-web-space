// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML
let listExpandirRetrair = document.querySelectorAll(".botao-expandir-retrair");

function expandeRetrai(el) {
    el.addEventListener('click', function(e) { 
        let element = e.currentTarget;
        let pExp = element.parentNode;
        pExp.classList.toggle('expandido');
        element.innerHTML = (pExp.classList.value=='expandido') ? '-': '+';
    });
};

listExpandirRetrair.forEach(expandeRetrai); 