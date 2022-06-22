
const pessoa1 =
{
    nome: 'Jhonatan',
    idade: 30,
};

const pessoa2 =
{
    nome: 'Érika',
    idade: 36,
};

const pessoa3 =
{
    nome: 'Bernardo',
    idade: 6,
};
const animal =
{
    nome: 'Pipoca',
    idade: 0,
};


function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}


console.log(calculaIdade.call(pessoa3, 17));
console.log(calculaIdade.apply(pessoa2,[17]));