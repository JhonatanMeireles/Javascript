//Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

//Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)

function verificacaopalindromo(string){
    if(!string) return;
    console.log(string === string.split('').reverse().join(''));
}

verificacaopalindromo ('cat');