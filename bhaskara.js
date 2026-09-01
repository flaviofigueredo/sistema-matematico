//====================================
// MÓDULO: Equação de bhaskara
//====================================

// Função principal que recebe os valores de A, B, e C
function calcularBhaskara(a, b, c) {
    // Validação básica: 'a' não pode ser zero em uma equação de 2 grau
    if (a === 0) {
        return "O valor de 'a' não pode ser zero";
    }

    // Calcula o Delta (Delta = b² - 4ac)
    const delta = (b * b) - (4 * a * c);

    // Se o delta for negativo, não existem raizes reais
    if (delta<0){
        return "Delta negativo. A equeção não possui raizes reais.";
    }

    // Calcula as raízes X1 e X2 usando a classe Math nativa do JS para a raiz quadrada
    const X1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    
    // Retorna um objeto formatado com os resultados
    return{
        delta: delta,
        x1: X1,
        x2: x2
    };
}

// Exportamos a função para ser consumida externamente
module.exports = calcularBhaskara;
