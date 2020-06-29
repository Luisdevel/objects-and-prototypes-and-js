function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente ${this.saldo}`);
        return;
    };

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`AG/C ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

CC.prototype = Object.create(Conta.prototype);
CC.prototype.construct = CC;

CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente para sacar, o seu limite máximo é de R$`+
        `${this.limite} | `+
        `Saldo Atual:${this.saldo}`);
        return;
    };


    this.saldo -= valor;
    this.verSaldo();
};

const cc = new CC(11, 22, 10, 100);
cc.sacar(120);