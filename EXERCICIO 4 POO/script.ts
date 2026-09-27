 //Q1
 //F,F,F,F,V,V,V
 
 //q2
class Hotel {
 quantReservas : number;
 adicionarReserva() : void {
 this.quantReservas++;
 }
}

//Q3
class Hotel {
    quantReservas: number;
    (quantReservas: number) {
        this.quantReservas = quantReservas;
   }
   adicionarReserva(): void {
       this.quantReservas++;
    }
}

let hotel: Hotel = new Hotel(2);
.log(hotel.quantReservas);

//Q4
class Radio {
 volume : number;
 constructor(volume : number = 0) {
 this.volume = volume;
 }
}
let r : Radio = new Radio();
r.volume = 10;

//não foi fornecido um argumento para volume, o construtor espera um argumento e recebe 0, a solução seria dar um valor padrão ao construtor

//Q5
class Conta {
    id: string;
    saldo: number;

    constructor(id: string, saldo: number) {
        this.id = id;
        this.saldo = saldo;
    }

    sacar(valor: number): void {
        this.saldo -= valor;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
}

let c1: Conta = new Conta("1", 100);
let c2: Conta = new Conta("2", 100);
let c3: Conta;

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

//Q6
class Triangulo {
    lado1: number;
    lado2: number;
    lado3: number;

    constructor(lado1: number, lado2: number, lado3: number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    eh_triangulo(): boolean {
        if (Math.abs(this.lado2 - this.lado3) < this.lado1 && this.lado1 < this.lado2 + this.lado3) {
            return true;
        } else {
            return false;
        }
    }

    ehIsoceles(): boolean {
        if (!this.eh_triangulo()) {
            return false;
        }
        if (this.lado1 == this.lado2 && this.lado1 == this.lado3 && this.lado2 == this.lado3) {
            return true;
        } else {
            return false;
        }
    }

    ehEquilatero(): boolean {
        if (!this.eh_triangulo()) {
            return false;
        }
        if (this.lado1 == this.lado2 && this.lado2 == this.lado3) {
            return true;
        } else {
            return false;
        }
    }

    ehEscaleno(): boolean {
        if (!this.eh_triangulo()) {
            return false;
        }
        if (this.lado1 != this.lado2 && this.lado1 != this.lado3 && this.lado2 != this.lado3) {
            return true;
        } else {
            return false;
        }
    }
}


let t1 = new Triangulo(3, 4, 5);  
let t2 = new Triangulo(5, 5, 5);   
let t3 = new Triangulo(4, 4, 7);   
let t4 = new Triangulo(1, 2, 10);  

console.log("t1 (3,4,5):", t1.eh_triangulo(), t1.ehIsoceles(), t1.ehEquilatero(), t1.ehEscaleno());
console.log("t2 (5,5,5):", t2.eh_triangulo(), t2.ehIsoceles(), t2.ehEquilatero(), t2.ehEscaleno());
console.log("t3 (4,4,7):", t3.eh_triangulo(), t3.ehIsoceles(), t3.ehEquilatero(), t3.ehEscaleno());
console.log("t4 (1,2,10):", t4.eh_triangulo(), t4.ehIsoceles(), t4.ehEquilatero(), t4.ehEscaleno());

//Q7
class Equipamento {
    ligado: boolean = false;

    ligar(): void {
        if (!this.ligado) {
            this.ligado = true;
            console.log("Equipamento ligado.");
        } else {
            console.log("O equipamento já está ligado.");
        }
    }

    desligar(): void {
        if (this.ligado) {
            this.ligado = false;
            console.log("Equipamento desligado.");
        } else {
            console.log("O equipamento já está desligado.");
        }
    }

    inverter(): void {
        this.ligado = !this.ligado;
        console.log("Estado invertido. Agora está: " + (this.ligado ? "ligado" : "desligado"));
    }

    estaLigado(): boolean {
        return this.ligado;
    }
}


let equip: Equipamento = new Equipamento();

console.log("Estado inicial: " + equip.estaLigado()); 

equip.ligar();              
console.log(equip.estaLigado()); 

equip.ligar();             

equip.desligar();           
console.log(equip.estaLigado());

equip.desligar();           

equip.inverter();           
console.log(equip.estaLigado()); 

equip.inverter();          
console.log(equip.estaLigado()); 

//Q8
class Conta {
    id: string;
    saldo: number;

    constructor(id: string, saldo: number) {
        this.id = id;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (this.saldo - valor < 0) {
            return false;
        }
        this.saldo = this.saldo - valor;
        return true;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) {
            return false; 
        }
        contaDestino.depositar(valor);
        return true;
    }
}

let c1: Conta = new Conta("1", 100);
let c2: Conta = new Conta("2", 50);

console.log(c1.sacar(200));         
console.log(c1.consultarSaldo());     

console.log(c1.sacar(30));           
console.log(c1.consultarSaldo());    

console.log(c1.transferir(c2, 1000)); 
console.log(c1.consultarSaldo());    
console.log(c2.consultarSaldo());    

console.log(c1.transferir(c2, 20));   
console.log(c1.consultarSaldo());    
console.log(c2.consultarSaldo());

//Q9
//A abordagem da questão 8 (retornar true/false) é mais correta na maioria dos casos, porque dá ao programador que está usando a classe a chance de saber se a operação deu certo ou não e reagir a isso (mostrar uma mensagem de erro, tentar de novo, etc.). Já a abordagem da questão 10 (simplesmente ignorar a operação com return; dentro de um método void) esconde a falha — quem chama atacar() não tem como saber se o ataque realmente aconteceu ou foi ignorado, o que pode causar confusão. Por outro lado, se a informação de sucesso/falha realmente não importa para quem está usando o método, o void é mais simples e direto.

//Q10

class Jogador {
    forca: number;
    nivel: number;
    pontos: number;

    constructor(forca: number, nivel: number, pontos: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos = pontos;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    estaVivo(): boolean {
        return this.pontos > 0;
    }

    atacar(atacado: Jogador): void {
        if (!atacado.estaVivo()) {
            return; 
        }
        atacado.pontos = atacado.pontos - this.calcularAtaque();
    }
}


let j1: Jogador = new Jogador(10, 2, 100); 
let j2: Jogador = new Jogador(5, 3, 50);   

console.log("Ataque de j1: " + j1.calcularAtaque()); 
console.log("Ataque de j2: " + j2.calcularAtaque()); 

j1.atacar(j2); 
console.log("Pontos de j2 após ataque de j1: " + j2.pontos); 

j2.atacar(j1); 
console.log("Pontos de j1 após ataque de j2: " + j1.pontos); 

j1.atacar(j2); 
console.log("Pontos de j2 após 2º ataque de j1: " + j2.pontos);

j1.atacar(j2); 
console.log("Pontos de j2 após 3º ataque de j1: " + j2.pontos); 
console.log("j2 está vivo? " + j2.estaVivo()); // false

j2.atacar(j1); 
console.log("Pontos de j1 (deve continuar 85): " + j1.pontos); 


if (j1.pontos > j2.pontos) {
    console.log("j1 tem mais pontos");
} else if (j2.pontos > j1.pontos) {
    console.log("j2 tem mais pontos");
} else {
    console.log("Empate");
}
