// Filter

// Exercício 1
// const numeros = [5, 8, 12, 15, 3, 20, 7];
// const maioresQueDez = numeros.filter(numero => numero > 10);
// console.log(maioresQueDez); // Deve retornar [12, 15, 20]

// Exercício 2
// const nomes = ["Ana", "João", "Amanda", "Carlos", "Arthur", "Beatriz"];
// const nomesComA = nomes.filter(nome => nome.startsWith("A"));
// console.log(nomesComA); // Deve retornar ["Ana", "Amanda", "Arthur"]

// Exercício 3
// const produtos = [
//     { nome: "Teclado", preco: 120 },
//     { nome: "Mouse", preco: 40 },
//     { nome: "Fone de ouvido", preco: 80 },
//     { nome: "Caderno", preco: 30 }
//   ];
//   const produtosBaratos = produtos.filter(produto => produto.preco < 50)
//   console.log(produtosBaratos); // Deve retornar [{ nome: "Mouse", preco: 40 }, { nome: "Caderno", preco: 30 }]

// Exercício 4
// const pessoas = [
//     { nome: "Carlos", idade: 17 },
//     { nome: "Mariana", idade: 22 },
//     { nome: "João", idade: 15 },
//     { nome: "Fernanda", idade: 30 }
//   ];
//   const maioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18)
//   console.log(maioresDeIdade); // Deve retornar [{ nome: "Mariana", idade: 22 }, { nome: "Fernanda", idade: 30 }]
  
// Exercício 5
// const palavras = ["sol", "mar", "montanha", "rio", "cachoeira", "nuvem"];
// const palavrasLongas = palavras.filter(palavra => palavra.length > 5);
// console.log(palavrasLongas); // Deve retornar ["montanha", "cachoeira"]

// Exercício 6
// const usuarios = [
//     { nome: "Ana", ativo: true },
//     { nome: "Carlos", ativo: false },
//     { nome: "Beatriz", ativo: true },
//     { nome: "João", ativo: false }
//   ];
//   const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);
//   console.log(usuariosAtivos); // Deve retornar [{ nome: "Ana", ativo: true }, { nome: "Beatriz", ativo: true }]

// Exercício 7
// const pedidos = [
//     { id: 1, status: "pendente" },
//     { id: 2, status: "entregue" },
//     { id: 3, status: "cancelado" },
//     { id: 4, status: "entregue" }
//   ];
//   const pedidosEntregues = pedidos.filter(pedido => pedido.status == "entregue");
//   console.log(pedidosEntregues); // Deve retornar [{ id: 2, status: "entregue" }, { id: 4, status: "entregue" }]

// Exercício 8
// const alunos = [
//     { nome: "Paula", nota: 8 },
//     { nome: "Miguel", nota: 5 },
//     { nome: "Camila", nota: 9 },
//     { nome: "Lucas", nota: 6 }
//   ];
//   const alunosAprovados = alunos.filter(aluno => aluno.nota >= 7);
//   console.log(alunosAprovados); // Deve retornar [{ nome: "Paula", nota: 8 }, { nome: "Camila", nota: 9 }]
    
// Find

// Exercício 1
// const nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
// const amanda = nomes.find(nome => nome == "Amanda");
// console.log(amanda); // Deve retornar "Amanda"

// Exercício 2
// const listaDeUsuarios = [
//     { id: 1, nome: "Alice" },
//     { id: 2, nome: "Bruno" },
//     { id: 3, nome: "Carla" }
//   ];
//   const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);
//   console.log(usuarioEncontrado); 
//   // Deve retornar { id: 2, nome: "Bruno" }
  
// Exercício 3
// const produtos = [
//     { nome: "Teclado", preco: 120 },
//     { nome: "Mouse", preco: 40 },
//     { nome: "Fone de ouvido", preco: 80 },
//     { nome: "Caderno", preco: 30 }
//   ];
//   const produtoBuscado = produtos.find(produto => produto.nome == "Fone de ouvido");
//   console.log(produtoBuscado); // Deve retornar { nome: "Fone de ouvido", preco: 80 }

// Exercício 4
// const pessoas = [
//     { nome: "Carlos", idade: 17 },
//     { nome: "Mariana", idade: 22 },
//     { nome: "João", idade: 15 },
//     { nome: "Fernanda", idade: 30 }
//   ];
//   const maiorDeIdade = pessoas.find(pessoa => pessoa.idade > 18);
//   console.log(maiorDeIdade); // Deve retornar { nome: "Mariana", idade: 22 }

// Exercício 5
// const palavras = ["sol", "mar", "montanha", "rio", "lua", "nuvem"];
// const palavraLonga = palavras.find(palavra => palavra.length > 5);
// console.log(palavraLonga); // Deve retornar "montanha"
  
// Exercício 6
// const usuarios = [
//     { nome: "Carlos", ativo: false },
//     { nome: "Ana", ativo: true },
//     { nome: "Beatriz", ativo: false},
//     { nome: "João", ativo: false }
//   ];
//   const usuarioAtivo = usuarios.find(usuario => usuario.ativo == true)
//   console.log(usuarioAtivo); // Deve retornar { nome: "Ana", ativo: true }

// Exercício 7
// const pedidos = [
//     { id: 1, status: "pendente" },
//     { id: 2, status: "entregue" },
//     { id: 3, status: "cancelado" },
//     { id: 4, status: "cancelado" }
//   ];
//   const pedidoEntregue = pedidos.find(pedido => pedido.status == "entregue");
//   console.log(pedidoEntregue); // Deve retornar { id: 2, status: "entregue" }

// Exercício 8
// const alunos = [
//     { nome: "Miguel", nota: 5 },
//     { nome: "Paula", nota: 8 },
//     { nome: "Camila", nota: 9 },
//     { nome: "Lucas", nota: 6 }
//   ];
//   const alunoAprovado = alunos.find(aluno => aluno.nota >= 7);
//   console.log(alunoAprovado); // Deve retornar { nome: "Paula", nota: 8 }

// Map

// Exercício 1
// const palavras = ["olá", "mundo", "javascript"];
// const enfatizadas = palavras.map(palavra => palavra + "!!!");
// console.log(enfatizadas); // ["olá!!!", "mundo!!!", "javascript!!!"]

// Exercício 2
// const nomes = ["ana", "bruno", "carla"];
// const nomesMaiusculos = nomes.map(nome =>`Colaborador ${nome}`);
// console.log(nomesMaiusculos); // ["Colaborador: ana", "Colaborador: bruno", "Colaborador: carla"]

// Exercício 3
// const pessoas = [
//     { nome: "João", idade: 25 },
//     { nome: "Maria", idade: 30 },
//     { nome: "Carlos", idade: 28 }
//   ];
//   const nomes = pessoas.map(pessoa => pessoa.nome);
//   console.log(nomes); // ["João", "Maria", "Carlos"]

// Exercício 4
// const raios = [3, 5, 7];
// const areas = raios.map(raio => Math.PI * Math.pow(raio, 2));
// console.log(areas); // [28.27, 78.54, 153.94] (valores aproximados);

// Exercício 5
// const precos = [10, 25.5, 3.99, 7];
// const precosFormatados = precos.map(preco => `R$ ${preco.toFixed(2).replace('.', ',')}`);
// console.log(precosFormatados); // ["R$ 10,00", "R$ 25,50", "R$ 3,99", "R$ 7,00"]

// Exercício 6
// const notas = [95, 82, 74, 63, 49];
// const conceitos = notas.map(nota => {
//   if (nota >= 90) return "A";
//   if (nota >= 80) return "B";
//   if (nota >= 70) return "C";
//   if (nota >= 60) return "D";
//   return "F";
// });
// console.log(conceitos); // ["A", "B", "C", "D", "F"]

// Exercício 7
// const titulos = ["Aprenda JavaScript", "Método Map em JS", "Dicas de Programação"];
// const slugs = titulos.map(titulo => titulo.toLowerCase().replace(/\s+/g, "-"));
// console.log(slugs); // ["aprenda-javascript", "metodo-map-em-js", "dicas-de-programacao"]

// Exercício 8
// const produtos = [
//     { id: 1, nome: "Celular", preco: 1999.99 },
//     { id: 2, nome: "Notebook", preco: 3999.99 },
//     { id: 3, nome: "Tablet", preco: 899.99 }
//   ];
//   const catalogo = produtos.map(produto => ({
//     nome: produto.nome,
//     precoFormatado: `R$ ${produto.preco.toFixed(2).replace('.', ',')}`
//   }));
//   console.log(catalogo);
//   /*
//   [
//     { nome: "Celular", precoFormatado: "R$ 1999,99" },
//     { nome: "Notebook", precoFormatado: "R$ 3999,99" },
//     { nome: "Tablet", precoFormatado: "R$ 899,99" }
//   ]
//   */


  