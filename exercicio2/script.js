// # Exercício 2
// Escreva uma função que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.
const funcao = (idade,ensMedio,faculdade) => {
    idade = +(prompt("Digite a sua idade:"))
        if (idade >=18) {console.log("Vc é maior de idade!")}
        else {console.log("Vc é menor de idade!")}
    ensMedio 
    if (confirm("Vc completou o ensino médio?") == true) {
        console.log("Parabéns! Vc completou o ensino médio!")
    faculdade
        if (confirm("Vc está cursando uma faculdade?") == true) {
        console.log("Muito bem, vc está cursando uma faculdade!")}
        else if (confirm("Vc já completou a faculdade?") == true) {
            console.log("Parabéns!! Vc completou a faculdade!")}
            else console.log("Vc não completou a faculdade!")}
    else {console.log("Vc não completou o ensino médio!")}
}

funcao()
    console.log(idade)

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

// <details>

// <summary>Exemplo</summary>

// Caso a primeira pessoa tenha idade >=18:

// <b>"A pessoa é maior de idade"</b>

// e caso não seja:

// <b>"A pessoa é menor de idade"</b>

// </details>



// let idade;
// let isMaiorIdade;
// let isCursandoOutraFaculdade;

// if(){

// }else{
	
// }