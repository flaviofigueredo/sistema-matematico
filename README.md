# 🧮 Sistema Matemático

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)
![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)
![License](https://img.shields.io/badge/license-not%20specified-lightgrey)

Projeto desenvolvido em **JavaScript** com o objetivo de reunir funções e ferramentas para resolução de cálculos matemáticos de forma simples, organizada e modular.

Atualmente, o projeto conta com um módulo para resolução de **equações do segundo grau utilizando a fórmula de Bhaskara**, além de uma estrutura preparada para receber novas funcionalidades matemáticas futuramente.

## 🚀 Funcionalidades

### ✅ Equação de Bhaskara

O módulo `bhaskara.js` recebe os coeficientes **a**, **b** e **c** de uma equação do segundo grau:

```text
ax² + bx + c = 0
```

A partir desses valores, o programa:

* Verifica se `a` é diferente de zero;
* Calcula o valor de **Delta (Δ)**;
* Verifica se existem raízes reais;
* Calcula as raízes **x₁** e **x₂**;
* Retorna os resultados de forma simples e organizada.

A fórmula utilizada para calcular o Delta é:

```text
Δ = b² - 4ac
```

As raízes são calculadas utilizando:

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

| Arquivo          | Descrição                                            |
| ---------------- | ---------------------------------------------------- |
| `bhaskara.js`    | Responsável pelo cálculo de equações do segundo grau |
| `calculadora.js` | Destinado às funcionalidades de calculadora          |
| `index.js`       | Arquivo principal do projeto                         |
| `README.md`      | Documentação do projeto                              |

## 🛠️ Tecnologias utilizadas

* **JavaScript**
* **Node.js**
* **Git**
* **GitHub**

## 📋 Pré-requisitos

Para executar o projeto localmente, é necessário ter instalado:

* [Node.js](https://nodejs.org/)
* [Git](https://git-scm.com/)

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

Importe a função de Bhaskara:

```javascript
const calcularBhaskara = require("./bhaskara");
```

Depois, informe os valores de `a`, `b` e `c`:

```javascript
const resultado = calcularBhaskara(1, -5, 6);

console.log(resultado);
```

Resultado:

```javascript
{
  delta: 1,
  x1: 3,
  x2: 2
}
```

Nesse exemplo, a equação utilizada é:

```text
x² - 5x + 6 = 0
```

As raízes encontradas são:

```text
x₁ = 3
x₂ = 2
```

## 🧠 Casos especiais

### Quando `a = 0`

Uma equação do segundo grau precisa possuir um coeficiente `a` diferente de zero.

Exemplo:

```javascript
calcularBhaskara(0, 2, 3);
```

O programa informa que o valor de `a` não pode ser zero.

### Quando Delta é negativo

Quando:

```text
Δ < 0
```

a equação não possui raízes reais.

Exemplo:

```javascript
calcularBhaskara(1, 0, 1);
```

Equação:

```text
x² + 1 = 0
```

Nesse caso, o programa informa que não existem raízes reais.

## 🗺️ Próximas funcionalidades

O projeto pode ser expandido com novas ferramentas matemáticas, como:

* [ ] Operações básicas de calculadora
* [ ] Equações de primeiro grau
* [ ] Potenciação
* [ ] Radiciação
* [ ] Porcentagem
* [ ] Regra de três
* [ ] Cálculo de áreas e perímetros
* [ ] Funções trigonométricas
* [ ] Validação de entradas
* [ ] Testes automatizados
* [ ] Interface de linha de comando

## 🤝 Contribuição

Contribuições são bem-vindas.

Para contribuir com o projeto:

1. Faça um **fork** do repositório;
2. Crie uma nova branch:

```bash
git checkout -b minha-feature
```

3. Faça suas alterações;
4. Crie um commit:

```bash
git commit -m "Adiciona nova funcionalidade"
```

5. Envie sua branch:

```bash
git push origin minha-feature
```

6. Abra um **Pull Request** no GitHub.

---

Feito com JavaScript.
