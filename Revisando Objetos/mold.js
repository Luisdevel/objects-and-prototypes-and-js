// Factory function / Constructor function

function criarPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criarPessoa('Luis', 'Henrique');
console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // Object.freeze(this); Não permite alterar nada no meu objeto.
}

const p2 = new Pessoa('Jorge', 'Mateus');
Object.freeze(p2); //Permite que nada no objeto (selecionado) seja alterado.
p2.nome = 'Fernando';
const p3 = new Pessoa('Maria', 'Mateia');

console.log(p2.nome, p2.sobrenome);
console.log(p3.nome, p3.sobrenome);