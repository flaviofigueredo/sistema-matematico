function somar(a, b) {
    return a + b;
}

function subtrair (a, b){
return a - b;
}

function multiplicar(a, b) {
return a * b;
}

function dividir(a, b) {
    if (b === 0){
    return "Erro: Divisao por zero nao e permitida!";
    }
    return a / b;
}

module.exports = {
soamr, subtrair, multiplicar, dividir
};