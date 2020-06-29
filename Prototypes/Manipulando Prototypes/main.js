// const objectA = {
//     chaveA: 'A'
// };

// const objectB = {
//     chaveB: 'B'
// };

// const objectC = {
//     chaveC: 'C'
// };

// Object.setPrototypeOf(objectB, objectA);
// Object.setPrototypeOf(objectC, objectB);
// console.log(objectC.chaveA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco -= (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco += (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

const p2 = {
    nome: 'Canenca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, { //criando objeto, depois o pai desse prototype que esta sendo criado e depois as chaves...
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

// p1.desconto(100);
// p1.aumento(100);
p2.aumento(10);
p3.aumento(10);
console.log(p1);
console.log(p2);
console.log(p3);