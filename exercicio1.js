// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

btnCalc = document.querySelector('#calcular');

btnCalc.addEventListener('click', () => {
    var G = document.querySelector('#constante');
    var m1 = document.querySelector('#massa1');
    var m2 = document.querySelector('#massa2');
    var d = document.querySelector('#distancia');
    var result = document.querySelector('#resultado');

    result.value = ((G.value * m1.value * m2.value) / (d.value**2));
})