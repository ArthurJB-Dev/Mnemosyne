// Estruturas Condicionais

// Exercício 1
//let num = prompt("Digite um numero:");
//if (num > 0) {
//    console.log("Positivo.");
//} else if (num < 0) {
//    console.log("Negativo.");
//} else {
//    console.log("È zero");
//}

// Exercício 2
//let par = prompt("Digite um numero:");
//if (par % 2 === 0) {
//    console.log("é par");
//} else {
//    console.log("Não é par");
//}

// Exercício 3
//let idade = prompt("Digite sua idade:");
//if (idade >= 0 && idade <= 12) {
//    console.log("Você é uma Criança.");
//} else if (idade >= 13 && idade <= 17) {
//    console.log("Você é um Adolescente.");
//} else if (idade >= 18) {
//    console.log("Você é um Adulto.");
//} else {
//    console.log("não reconhecido");
//}

// Exercício 4
//let prova = prompt("Digite sua nota:");
//if (prova >= 0 && prova <= 60) {
//    console.log("reprovado");
//} else if (prova =60 && prova <= 100) {
//    console.log("Aprovado");
//} else {
//    console.log("não reconhecido");
//}

// Exercício 8
//let usuario = prompt("Digite o usuario:");
//let senha = prompt("Digite sua senha:");
//if (usuario == "admin" && senha == 1234) {
//    console.log("login bem sucedido");
//} else {
//    console.log("acesso negado");
//}

// Exerc[icio 7
//let compra = Number(prompt("Digite o valor da compra:"));
//if (compra >= 100) {
//    console.log(compra * 0.9,"$ valor da compra com desconto.");
//} else {
//    console.log("$",compra,"valor da compra sem desconto.");
//}

// Exercício 5
//let num1 = parseFloat(prompt("Digite o primeiro numero:"));
//let num2 = parseFloat(prompt("Digite o segundo numero:"));
//let operador = prompt("Digite a operação desejada + - * ?");
//let resultado;
//switch (operador) {
//    case "+":
//        resultado  = num1 + num2;
//    break ;
//    case "-":
//        resultado = num1 - num2;
//    break;
//    case "*":
//        resultado = num1 * num2;
//    break;
//    case "/":
//        if (num2 == 0) {
//            resultado = "Indefinido";
//        } else {
//            resultado = num1 / num2;
//        }
//    break
//    default:
//        resultado = "Erro"
//}
//console.log("Resultado:", resultado);

// Exercício 6
//let num1 = prompt("Digite o primeiro numero:");
//let num2 = prompt("Digite o segundo numero:");
//let num3 = prompt("Digite o terceiro numero:");
//if (num1 > num2 && num1 > num3) {
//    console.log (num1,"Este numero é o maior");
//} else if (num2 > num1 && num2 > num3) {
//    console.log(num2,"Este é o maior numero");
//} else if (num3 > num1 && num3 > num1) {
//    console.log(num3,"Este é o maior numero");
//}

// Exercício 9
//let ang1 = prompt("Digite o primeiro angulo do triangulo:");
//let ang2 = prompt("Digite o segundo angulo do triangulo:");
//let ang3 = prompt("Digite o terceiro angulo do ttriangulo:");
//if (ang1 == ang2 && ang1 == ang3) {
//    console.log("Este é um triangulo equilatero");
//} else if (ang1 == ang2 || ang3 == ang2 || ang1 == ang3 ) {
//    console.log("Este é um trinagulo isoceles");
//} else {           
//    console.log("Este é um triangulo escaleno")
//}

// Exercício 10
//let nota = prompt("Digite o valor da nota da prova:");
//if (nota >= 90 && nota <= 100) {
//    console.log("Nota A");
//} else if (nota >= 80 && nota <= 89) {
//    console.log("Nota B");
//} else if (nota >= 70 && nota <= 79) {
//    console.log("Nota C");
//} else if (nota >= 60 && nota <=69) {
//    console.log("Nota D");
//} else if (nota < 60) {
//    console.log("Nota F");
//}

// Exercício 11
//let peso = prompt("Digite o seu peso em kg:");
//let altura = prompt("Digite a sua altura em m:");
//let imc;
//imc = peso/altura*altura
//if (imc < 18.5) {
//    console.log("Baixo Peso");
//} else if (imc >= 18.5 && imc <= 24.99) {
//    console.log("Normal");
//} else if (imc >= 25 && imc <= 29.99) {
//    console.log("Sobrepeso");
//} else if (imc >= 30) {
//    console.log("Obsidade")
//}

// Exercício 12
//let ano = parseInt(prompt("Insira um ano:"));
//if (ano % 4 == 0) {
//    console.log("Ano bissexto");
//} else {
//    if (ano % 400 == 0) {
//    console.log("Bissexto")
//    } else {
//            console.log("não é Bissexto")
//    } 
//}