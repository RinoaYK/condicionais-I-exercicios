// # Exercício 1
// Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Após imprima o retorno no console.

const num = (num) => {
    num = +(prompt("Digite um número")) //seu numero aqui
    if(num%2 === 0){
        alert("O número é par!")
        console.log("O número",num,"é par!")}
    else {
        alert("O número é ímpar!")
        console.log("O número",num,"é ímpar!")
    }}

num()
