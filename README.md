# 🧮 Sistema Matemático

Projeto desenvolvido em **JavaScript** com o objetivo de reunir funções e ferramentas para resolução de cálculos matemáticos de forma simples e modular.

Atualmente, o projeto conta com um módulo para resolução de **equações do segundo grau utilizando a fórmula de Bhaskara** e está preparado para receber novas funcionalidades matemáticas futuramente.

## 🚀 Funcionalidades

### ✅ Equação de Bhaskara

O módulo `bhaskara.js` recebe os coeficientes **a**, **b** e **c** de uma equação do segundo grau:

```text
ax² + bx + c = 0
```

A partir desses valores, o programa:

- Verifica se `a` é diferente de zero;
- Calcula o valor de **Delta (Δ)**;
- Verifica se existem raízes reais;
- Calcula as raízes **x₁** e **x₂**;
- Retorna os resultados em um objeto JavaScript.

A fórmula utilizada para calcular o Delta é:

```text
Δ = b² - 4ac
```

E as raízes são calculadas por:

```text
x₁ = (-b + √Δ) / 2a
x₂ = (-b - √Δ) / 2a
```

## 📁 Estrutura do projeto

```text
sistema-matematico/
├── bhaskara.js
├── calculadora.js
├── index.js
└── README.md
```

| Arquivo | Descrição |
| --- | --- |
| `bhaskara.js` | Módulo responsável pelo cálculo de equações do segundo grau |
| `calculadora.js` | Arquivo reservado para funcionalidades de calculadora |
| `index.js` | Arquivo principal do projeto |
| `README.md` | Documentação do projeto |

## 🛠️ Tecnologias utilizadas

- **JavaScript**
- **Node.js**
- **Git**
- **GitHub**

## 📋 Pré-requisitos

Para executar o projeto localmente, é necessário ter instalado:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

## 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/flaviofigueredo/sistema-matematico.git
```

Entre na pasta do projeto:

```bash
cd sistema-matematico
```

## 💻 Exemplo de uso

O módulo de Bhaskara pode ser importado em outro arquivo JavaScript:

```javascript
const calcularBhaskara = require("./bhaskara");

const resultado = calcularBhaskara(1, -5, 6);

console.log(resultado);
```

Resultado esperado:

```javascript
{
  delta: 1,
  x1: 3,
  x2: 2
}
```

### ⚠️ Observação sobre a versão atual

No arquivo `bhaskara.js`, a função está declarada como:

```javascript
function calcularbhaskara(a, b, c)
```

mas é exportada como:

```javascript
module.exports = calcularBhaskara;
```

Como JavaScript diferencia letras maiúsculas de minúsculas, é necessário padronizar os dois nomes para que a importação funcione corretamente. Por exemplo:

```javascript
function calcularBhaskara(a, b, c) {
  // ...
}

module.exports = calcularBhaskara;
```

## 🧠 Tratamento de casos especiais

O módulo já trata alguns cenários importantes.

### Quando `a = 0`

Uma equação do segundo grau precisa possuir um coeficiente `a` diferente de zero.

```javascript
calcularBhaskara(0, 2, 3);
```

Retorno:

```text
O valor de 'a' não pode ser zero
```

### Quando Delta é negativo

Quando `Δ < 0`, a equação não possui raízes reais.

```javascript
calcularBhaskara(1, 0, 1);
```

Nesse caso, o módulo informa que não existem raízes reais.

## 🗺️ Próximos passos

Algumas funcionalidades que podem ser adicionadas ao projeto:

- [ ] Operações básicas de calculadora
- [ ] Equações de primeiro grau
- [ ] Potenciação e radiciação
- [ ] Porcentagem
- [ ] Regra de três
- [ ] Cálculo de áreas e perímetros
- [ ] Funções trigonométricas
- [ ] Validação de entradas
- [ ] Testes automatizados
- [ ] Interface de linha de comando

## 🤝 Contribuição

Contribuições são bem-vindas.

Para contribuir:

1. Faça um **fork** do projeto;
2. Crie uma branch para sua alteração:

```bash
git checkout -b minha-feature
```

3. Faça suas alterações e crie um commit:

```bash
git commit -m "Adiciona nova funcionalidade"
```

4. Envie a branch:

```bash
git push origin minha-feature
```

5. Abra um **Pull Request** no GitHub.

---

Feito com JavaScript.
