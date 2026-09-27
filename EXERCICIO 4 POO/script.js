"use strict";
// q2
//class Hotel {
//quantReservas : number;
//adicionarReserva() : void {
// this.quantReservas++;
// }
//}
//Q3
//class Hotel {
//quantReservas: number;
//(quantReservas: number) {
//  this.quantReservas = quantReservas;
//}
//adicionarReserva(): void {
//   this.quantReservas++;
//  }
//}
//let hotel: Hotel = new Hotel(2);
//.log(hotel.quantReservas);
//Q4
//class Radio {
//volume : number;
//constructor(volume : number = 0) {
//this.volume = volume;
//}
//}
//let r : Radio = new Radio();
//r.volume = 10;
//não foi fornecido um argumento para volume, o construtor espera um argumento e recebe 0, a solução seria dar um valor padrão ao construtor
//Q5
class Conta {
    constructor(id, saldo) {
        this.id = id;
        this.saldo = saldo;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}
let c1 = new Conta("1", 100);
let c2 = new Conta("2", 100);
let c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
//letra A resultado 90
//letra B
// O objeto original de c1 (new Conta("1", 100)) perde toda 
//referência após "c1 = c2", já que nenhuma variável aponta mais 
//para ele. Esse objeto fica órfão na memória e se torna candidato 
//ao Garbage Collector, que futuramente irá liberá-lo automaticamente.
//*/
