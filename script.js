const nome = prompt("Qual é o seu nome?");
const idade = prompt("Qual é sua idade?");
const linguagem = prompt("Qual linguagem de programação você está aprendendo?");

alert(`Olá ${nome}, você tem ${idade} ano e está estudando ${linguagem}`);

const opcao = prompt(`Você gosta de estudar ${linguagem} ? Responda número 1 para SIM e número 2 para NÂO`);

if(opcao == 1){
    alert('Muito bom! Continue estudando e você terá muito sucesso!');
} else{
    alert('Ah que pena... Já tentou aprender outras linguagens?');
}