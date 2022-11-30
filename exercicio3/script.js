// # Exercício 3

// Crie uma função que receba do usuário sua nacionalidade, utilize um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 

let nacionalidade = (nacionalidade) => {
    nacionalidade = prompt("Qual a sua nacionalidade?")
    nacioLower = nacionalidade.toLowerCase()
        if (nacioLower === "brasileira" || nacioLower === "argentina" || nacioLower === "uruguaia" || nacioLower === "chilena" || nacioLower === "colombiana" || nacioLower === "japonesa") {
            console.log("A sua nacionalidade é", nacioLower[0].toUpperCase()+nacioLower.substring(1)+".")}
        else {console.log("Nacionalidade não encontrada!")}
        }

nacionalidade()

