export abstract class Account {
    // Atributos
    private name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    // Construtor
    constructor (name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    // Métodos
    deposit = (value: number): void => {
        this.balance += value;
        console.log(`✅ Depositado com sucesso: R$${value},00.`)
    }

    withdraw = (value: number): void => {
        if (this.status === true && value <= this.balance) {
            this.balance -= value;
            console.log(`➖ Saque efetuado com sucesso: -R$${value},00.`)
        } else {
            if (this.status === false) {
                this.validateStatus();
            } else {
                console.log('❌ Operação Inválida! Saldo Insuficiente.')
            }
        }
    }

    getBalance = (): void => {
        console.log(`O saldo da conta é: ${this.balance}`);
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status;
        } else {
            throw Error('Conta Inválida!');
        }
    }

    getStatus = (): boolean => {
        return this.status;
    }

    setBalance = (value: number): void => {
        this.balance += value;
    }
    
}