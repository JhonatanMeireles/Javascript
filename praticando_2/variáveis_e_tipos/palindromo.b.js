//Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

//Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)

function verificapalindromo2(string){
    if (!string) return;
    if (!string.length) return;

    for (var i = 0; i < string.length / 2; i++) {

        if (string[i] !== string[string.length - 1 - i]) {
            return console.log(false);
        }
    }
    return console.log(true);
}

verificapalindromo2 ('asa');