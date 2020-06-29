function criaPessoa(nome, sobrenome) {
    const falar = {
        falar() {
            console.log(`${this.nome} está falando.`);
        },
    };

    const comer = {
        comer() {
            console.log(`${this.nome} está comendo.`);
        },
    };

    const beber = {
        beber() {
            console.log(`${this.nome} está bebendo.`);
        },
    };

    // const pessoasPrototype = { ...falar, ...comer, ...beber };
    const pessoasPrototype = Object.assign({}, falar, comer, beber);

    return Object.create(pessoasPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
};

const p1 = criaPessoa('Luis', 'Henrique');
const p2 = criaPessoa('Maria', 'Fernanda');
console.log(p1);