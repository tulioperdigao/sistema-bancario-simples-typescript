export abstract class Account {
    // Atributos
    private name: string;
    private readonly accountNumber: number;
    balance: number = 0;

    // Construtor
    constructor (name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    // Métodos
    deposit = (value: number) => {

    }

    withdraw = (value: number) => {

    }

    getBalance = () => {
        console.log(this.balance);
    }

}