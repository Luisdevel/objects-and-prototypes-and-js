function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar sim o ou não o valor
        configurable: true // configurável sim ou não
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
console.log(p1);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}