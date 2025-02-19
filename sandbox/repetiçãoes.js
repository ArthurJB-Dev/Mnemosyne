// Repetições

// Exercício 1 
function exercicioRep01 () { // funções para clicar na imagem da pagina e rodar o Ex no console
for (let i = 1; i <= 10; i++) {
    console.log(i);
} 
 let divDeLogs = document.querySelector(".logs"); //Busca um elemento da tela
 let paragrafo = document.createElement("p");
 paragrafo.innerHTML = "Exercicio 01 de repetição executado, confira o console."
 divDeLogs.appendChild(paragrafo);
}

// Exercício 2
function exercicioRep02 () { 
let numero = prompt("Digite um numero para tabuada:");
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
} }

// Exercício 3
function exercicioRep03 () { 
let num = prompt("Digite um numero N:");
let total = 0;
for (let i = 1; i <= num; i++) {
    total = total + i
} console.log("A soma dos numeros 1 até",num,"é:",total) }

// Exercício 4
function exercicioRep04 () { 
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
    console.log(i); 
    } 
} }

// Exercício 5
function exercicioRep05 () { 
let numeroAleatorio = Math.floor(Math.random() * 100);
let chute = null;
while (chute != numeroAleatorio) {
    chute = parseInt(prompt("Chute um número:"));
    if (chute != numeroAleatorio) {
        if (chute > numeroAleatorio) {    
            alert("Chutou alto.");    
        } else {    
            alert("Chutou baixo.");    
        }
    }
}
alert("Você acertou!"); }

// Exercício 6
//let numero = prompt("Digite um numero para contagem regresiva:")
//while (numero >= 0) {
//    console.log(numero); 
//    numero--; 
//}

// Exercício 7
//let numero = parseInt(prompt("Digite um número inteiro positivo:"));
//let soma = 0;
//while (numero > 0) {
//  soma += numero % 10;  
//  numero = Math.floor(numero / 10);  }  
//alert("A soma dos dígitos é: " + soma);

// Exercício 8

