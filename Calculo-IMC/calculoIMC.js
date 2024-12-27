// Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e imprima na tela sua condição de acordo com a tabela abaixo:

// Fórmula do IMC = peso / (altura) ²

// Tabela Condições IMC

//  Abaixo de 18,5   | Abaixo do peso          

//  Entre 18,6 e 24,9 | Peso ideal (parabéns)  

//  Entre 25,0 e 29,9 | Levemente acima do peso

//  Entre 30,0 e 34,9 | Obesidade grau I 

//  Entre 35,0 e 39,9 | Obesidade grau II (severa)

//  Maior ou igual a 40 | Obesidade grau III (mórbida)

const altura = prompt("Digite aqui sua altura (utilize pontos, não vírgula)");
const peso = prompt("Digite aqui seu peso (utilize pontos, não vírgula)");

const valorAltura = parseFloat(altura.replace(",", "."));
const valorPeso = parseFloat(peso.replace(",", "."));

const IMC = valorPeso / (valorAltura * valorAltura);

if (IMC < 18.5) {
    console.log("Você está abaixo do peso.");
} else if (IMC >= 18.6 && IMC <= 24.9) {
    console.log("Você está no peso ideal.");
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log("Você está levemente acima do peso.");
} else if (IMC >= 30 && IMC <= 34.9) {
    console.log("Você está com obesidade grau I.");
} else if (IMC >= 35 && IMC <= 39) {
    console.log("Você está com obesidade grau II (severa).");
} else if (IMC >= 40) {
    console.log("Você está com obesidade grau III (mórbida).");
} else {
    console.log("Houve um erro no cálculo. Tente novamente.");
}