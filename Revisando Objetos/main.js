const pessoa = {
    nome: 'Luis',
    sobrenome: 'Henrique',
};

// const chave = 'nome';
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

const pessoa2 = new Object();
pessoa2.nome = 'Maria';
pessoa2.sobrenome = 'Silva';

delete pessoa2.nome;
console.log(pessoa2);

pessoa3 = {
    idade: 3,
};

console.log(pessoa3.idade);

const pessoa4 = new Object();
pessoa4.nome = 'Luis';
pessoa4.sobrenome = 'Henrique';
pessoa4.idade = 25;

pessoa4.falarNome = function() {
    return (`${this.nome} está falando seu nome`);
};

pessoa4.getDataNasc = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa4) {
    console.log(pessoa4[chave]);
}

console.log(pessoa4.getDataNasc());