//getter obtem valor e setter configura o valor

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoques', {
        enumerable: true,
        configurable: true,

        get: function() {
            return estoquePrivado;
        },
        get: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Bad valor');
                return;
            }

            estoquePrivado = valor;
        },
    });
};

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', 'haleluia');
            nome = valor;
        },
    };
};

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
// p1.estoque = 'Isso é uma string e retornará a mensagem do set';
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);