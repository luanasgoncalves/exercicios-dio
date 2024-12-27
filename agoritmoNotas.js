//10 - Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.

// let nota1 = parseFloat(prompt("Digite primeira nota:"));
// let nota2 = parseFloat(prompt("Digite a segunda nota:"));
// let nota3 = parseFloat(prompt("Digite a terceira nota:"));

// const media = nota1 + nota2 + nota3 / 3;

// console.log("A média de notas é igual a:", media);

// exercício quase correto, porém o js está dividindo somente a nota 3. o correto seria: 

let nota1 = parseFloat(prompt("Digite primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

const media = (nota1 + nota2 + nota3) / 3;

console.log("A média de notas é igual a:", media);

// outro exemplo de código:

let nota1, nota2, nota3;

do {
  nota1 = parseFloat(prompt("Digite a primeira nota (entre 0 e 10):"));
} while (nota1 < 0 || nota1 > 10);

// ... repetir para nota2 e nota3

const media = (nota1 + nota2 + nota3) / 3;

console.log("A média de notas é igual a:", media.toFixed(2));
